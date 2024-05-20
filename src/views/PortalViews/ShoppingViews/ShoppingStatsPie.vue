<template>
    <div>
      <canvas ref="pieChart"></canvas>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref, onMounted } from 'vue'
  import {useShoppingStore } from '@/stores/shopping'
  import { Chart, registerables } from 'chart.js'
  import type { Ref } from 'vue'
  import type { IShopping } from '@/interfaces/IShopping'
  
  // Registrar todos los componentes de Chart.js
  Chart.register(...registerables)
  
  const pieChart: Ref<HTMLCanvasElement | null> = ref(null) // Referencia al elemento canvas
  const shoppingStore =useShoppingStore() // Accede a la store de ventas
  
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
  const getTopFiveshopping = (shopping: IShopping[]) => {
    return shopping.sort((a, b) => b.Fac_precioTotal - a.Fac_precioTotal).slice(0, 5)
  }
  
  // Función para crear el gráfico
  const createChart = () => {
    if (pieChart.value) {
      const topshopping = getTopFiveshopping(shoppingStore.dataList)
      const labels = topshopping.map(sale => `Venta ${sale.Fac_codigo}`)
      const data = topshopping.map(sale => sale.Fac_precioTotal)
      const backgroundColors: string[] = []
      const borderColors: string[] = []
  
      topshopping.forEach(() => {
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
            }
          }
        }
      })
    }
  }
  
  // Hook del ciclo de vida para montar el componente
  onMounted(async () => {
    await shoppingStore.fetchDataList() // Obtén los datos de ventas
    createChart() // Crea el gráfico
  })
  </script>
  
  <style scoped>
  canvas {
    max-width: 600px;
    max-height: 400px;
  }
  </style>
  