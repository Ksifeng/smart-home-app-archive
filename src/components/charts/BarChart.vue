<template>
  <div class="chart-container">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  components: { Bar },
  props: ['chartData'],
  data() {
    return {
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }
};
</script>

<style scoped>
.chart-container {
  height: 250px;
}
</style>
