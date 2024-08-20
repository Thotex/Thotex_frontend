<template>
  <div>
    <canvas ref="pieChart"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useSalesStore } from '@/stores/sales'
import { Chart, registerables } from 'chart.js'
import ChartDataLabels from 'chartjs-plugin-datalabels'
import type { Ref } from 'vue'
import type { ISale } from '@/interfaces/ISales'

// Registrar todos los componentes de Chart.js y el plugin de datalabels
Chart.register(...registerables, ChartDataLabels)

const pieChart: Ref<HTMLCanvasElement | null> = ref(null) // Referencia al elemento canvas
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

// Función para obtener los 5 productos más vendidos
const getTopFiveSales = (sales: ISale[]) => {
  return sales.sort((a, b) => b.Ven_precioTotal - a.Ven_precioTotal).slice(0, 5)
}

// Función para crear el gráfico
const createChart = () => {
  if (pieChart.value) {
    const topSales = getTopFiveSales(salesStore.dataList)
    const labels = topSales.map(sale => `Venta ${sale.Ven_codigo}`)
    const data = topSales.map(sale => sale.Ven_precioTotal)
    const backgroundColors: string[] = []
    const borderColors: string[] = []

    topSales.forEach(() => {
      const baseColor = getRandomColor()
      backgroundColors.push(rgbaColor(baseColor, 0.2))
      borderColors.push(rgbaColor(darkenColor(baseColor, 0.1), 1))
    })

    new Chart(pieChart.value, {
      type: 'pie',
      data: {
        labels, // Etiquetas de los 5 productos más vendidos
        datasets: [{
          label: 'Ventas',
          data, // Datos del gráfico
          backgroundColor: backgroundColors, // Colores aleatorios para el fondo
          borderColor: borderColors, // Colores oscuros para el borde
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          datalabels: {
            formatter: (value, ctx) => {
              const data = ctx.chart.data.datasets[0].data as number[]
              const total = data.reduce((acc, val) => acc + val, 0)
              const percentage = (value / total * 100).toFixed(2) + '%'
              return percentage
            },
            color: '#fff',
            anchor: 'end',
            align: 'start',
            offset: -10
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
  max-width: 600px;
  max-height: 400px;
}
</style>
