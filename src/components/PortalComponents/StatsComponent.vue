<template>
    <div>
    <canvas ref="pieChart"></canvas>
  </div>
</template>

<script setup lang="ts">
    import { useSalesStore } from '@/stores/sales';
    import { onMounted, ref } from 'vue';
    import { Chart, registerables } from 'chart.js'
    import { ISale } from '@/interfaces/ISales';

    Chart.register(...registerables)// Registrar todos los componentes de Chart.js
    const pieChart = ref(null);
    const salesStore = useSalesStore();

    interface RGBColor {
        r: number
        g: number
        b: number
    }

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
        const month = new Date(sale.Fac_fechaGeneracion).toLocaleString('default', { month: 'long' })
            if (!monthlySales[month]) {
                monthlySales[month] = 0
            }
        monthlySales[month] += sale.Fac_precioTotal
    })
    return monthlySales
}

const createChart = () => {
  if (pieChart.value) {
    const monthlySales = groupSalesByMonth(salesStore.dataList)
    const labels = Object.keys(monthlySales)
    const data = Object.values(monthlySales)
    const backgroundColors: string[] = []
    const borderColors: string[] = []

    labels.forEach(() => {
      const baseColor = getRandomColor()
      backgroundColors.push(rgbaColor(baseColor, 0.2))
      borderColors.push(rgbaColor(darkenColor(baseColor, 0.1), 1))
    })

    new Chart(pieChart.value, {
      type: 'pie',
      data: {
        labels, // Etiquetas de los meses
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
          }
        }
      }
    })
  }
}

onMounted(async () => {
  await salesStore.fetchDataList() // Obtén los datos de ventas
  createChart() // Crea el gráfico
})
</script>

<style scoped lang="scss">
    canvas {
        max-width: 600px;
        max-height: 400px;
    }
</style>
