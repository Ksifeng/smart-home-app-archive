<template>
  <div class="chart-container">
    <Line :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
  components: { Line },
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
