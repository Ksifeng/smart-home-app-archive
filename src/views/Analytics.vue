<template>
  <div class="analytics container mt-4">
    <h2 class="mb-4">Аналитика</h2>

    <div class="row">
      <div class="col-md-6 mb-4">
        <h5>Температура</h5>
        <LineChart :chart-data="temperatureData" />
      </div>
      <div class="col-md-6 mb-4">
        <h5>Влажность</h5>
        <LineChart :chart-data="humidityData" />
      </div>
      <div class="col-md-6 mb-4">
        <h5>Энергопотребление</h5>
        <BarChart :chart-data="energyData" />
      </div>
      <div class="col-md-6 mb-4">
        <h5>Сравнение по комнатам</h5>
        <BarChart :chart-data="roomComparisonData" />
      </div>
    </div>

    <h4>Рекомендации</h4>
    <ul>
      <li>Понизить температуру в гостиной на 1°C для экономии энергии</li>
      <li>Проверить батареи в датчиках движения</li>
      <li>Добавить датчик CO2 в спальню</li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue';
import LineChart from '../components/charts/LineChart.vue';
import BarChart from '../components/charts/BarChart.vue';

export default {
  components: { LineChart, BarChart },
  data() {
    return {
      temperatureData: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
        datasets: [
          {
            label: 'Температура, °C',
            data: [21, 22, 22.5, 23, 22],
            borderColor: 'blue',
            backgroundColor: 'rgba(0, 0, 255, 0.2)',
            fill: true
          }
        ]
      },
      humidityData: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
        datasets: [
          {
            label: 'Влажность, %',
            data: [45, 47, 46, 48, 47],
            borderColor: 'green',
            backgroundColor: 'rgba(0, 128, 0, 0.2)',
            fill: true
          }
        ]
      },
      energyData: {
        labels: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт'],
        datasets: [
          {
            label: 'Энергия, кВт·ч',
            data: [12, 14, 13, 15, 14],
            backgroundColor: 'orange'
          }
        ]
      },
      roomComparisonData: {
        labels: ['Кухня', 'Гостиная', 'Спальня', 'Ванная'],
        datasets: [
          {
            label: 'Температура, °C',
            data: [22, 21, 20, 23],
            backgroundColor: 'rgba(75, 192, 192, 0.5)'
          }
        ]
      }
    };
  }
};
</script>

<style scoped>
.analytics {
  padding-top: 60px;
}
</style>
