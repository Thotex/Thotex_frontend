<template>
    <div class="card-global">
        <canvas id="lineChart" height="100"></canvas>
    </div>
</template>

<script setup lang="ts">
    import Chart from 'chart.js/auto';
    import { onMounted } from 'vue';

    onMounted(() => {
        const canvas = document.querySelector('#lineChart') as HTMLCanvasElement;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                {
                    label: 'Dataset 1',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }
                ]
            }
        });
    });
</script>

<style scoped lang="scss">
    
</style>