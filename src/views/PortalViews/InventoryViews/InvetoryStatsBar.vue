<template>
  <div>
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useInventoryStore } from '@/stores/inventory'
import { Chart, registerables } from 'chart.js'
import type { Ref } from 'vue'
import type { IProduct } from '@/interfaces/IInventory'

// Registrar todos los componentes de Chart.js
Chart.register(...registerables)

const barChart: Ref<HTMLCanvasElement | null> = ref(null) // Referencia al elemento canvas
const inventoryStore = useInventoryStore() // Accede a la store de inventario

// Función para agrupar productos y calcular la cantidad total por producto
const groupProducts = (products: IProduct[]) => {
  const productQuantities: { [key: string]: number } = {}

  products.forEach(product => {
    if (!productQuantities[product.Prod_nombre]) {
      productQuantities[product.Prod_nombre] = 0
    }
    productQuantities[product.Prod_nombre] += product.Prod_cantidad
  })

  return productQuantities
}

// Función para crear el gráfico
const createChart = () => {
  if (barChart.value) {
    const productQuantities = groupProducts(inventoryStore.dataList)
    const labels = Object.keys(productQuantities)
    const data = labels.map(label => productQuantities[label])

    const backgroundColors: string[] = []
    labels.forEach(() => {
      backgroundColors.push(getRandomColor())
    })

    new Chart(barChart.value, {
      type: 'bar',
      data: {
        labels, // Etiquetas de los productos
        datasets: [{
          label: 'Cantidad',
          data, // Datos del gráfico
          backgroundColor: backgroundColors, // Colores aleatorios para las barras
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            mode: 'index',
            intersect: false
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Producto'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Cantidad'
            },
            beginAtZero: true
          }
        }
      }
    })
  }
}

// Función para generar colores aleatorios
const getRandomColor = (): string => {
  const r = Math.floor(Math.random() * 255)
  const g = Math.floor(Math.random() * 255)
  const b = Math.floor(Math.random() * 255)
  return `rgba(${r}, ${g}, ${b}, 0.5)`
}

// Hook del ciclo de vida para montar el componente
onMounted(async () => {
  await inventoryStore.fetchDataList() // Obtén los datos de inventario
  createChart() // Crea el gráfico
})
</script>

<style scoped>
canvas {
  max-width: 600px;
  max-height: 400px;
}
</style>
