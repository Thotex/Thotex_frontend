<template>
  <div>
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import type { Ref } from 'vue'
import type { ISale } from '@/interfaces/ISales'
import { useSalesStore } from '@/stores/sales'
// Registrar todos los componentes de Chart.js
Chart.register(...registerables)

const barChart: Ref<HTMLCanvasElement | null> = ref(null) // Referencia al elemento canvas
const salesStore = useSalesStore() // Accede a la store de ventas

interface RGBColor {
  r: number
  g: number
  b: number
}

// Funciones para generar colores aleatorios y oscurecer colores
const getRandomColor = (): RGBColor => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return { r, g, b }
}

const rgbaColor = ({ r, g, b }: RGBColor, alpha: number): string => `rgba(${r}, ${g}, ${b}, ${alpha})`

const darkenColor = ({ r, g, b }: RGBColor, percentage: number): RGBColor => {
  const factor = 1 - percentage
  return {
    r: Math.floor(r * factor),
    g: Math.floor(g * factor),
    b: Math.floor(b * factor)
  }
}

// Función para agrupar ventas por mes y calcular el total
const groupSalesByMonth = (sales: ISale[]) => {
  const monthlySales: { [key: string]: number } = {}
  sales.forEach(sale => {
    const date = new Date(sale.Fac_fechaGeneracion)
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    const key = `${month} ${year}`
    if (!monthlySales[key]) {
      monthlySales[key] = 0
    }
    monthlySales[key] += sale.Fac_precioTotal
  })
  return monthlySales
}

// Función para crear el gráfico
const createChart = () => {
  if (barChart.value) {
    const monthlySales = groupSalesByMonth(salesStore.dataList)
    const labels = Object.keys(monthlySales).sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    const data = labels.map(label => monthlySales[label])

    const baseColor = getRandomColor()
    const backgroundColor = rgbaColor(baseColor, 0.2)
    const borderColor = rgbaColor(darkenColor(baseColor, 0.1), 1)

    new Chart(barChart.value, {
      type: 'bar', // Cambia el tipo de gráfico a 'bar'
      data: {
        labels, // Etiquetas de los meses
        datasets: [{
          label: 'Ventas',
          data, // Datos del gráfico
          backgroundColor, // Color de fondo de las barras
          borderColor, // Color del borde de las barras
          borderWidth: 1,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Mes'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Total de Ventas'
            },
            beginAtZero: true
          }
        }
      }
    })
  }
}

// Hook del ciclo de vida para montar el componente
onMounted(async () => {
  await salesStore.fetchDataList() // Obtén los datos de ventas
  createChart() // Crea el gráfico
})
</script>

<style scoped>
canvas {
  width: 100%;
  height: 300px;
}
</style>
