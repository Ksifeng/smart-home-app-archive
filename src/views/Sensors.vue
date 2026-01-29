<template>
  <div>
    <h2>Сенсоры</h2>
    <table class="table table-bordered table-hover">
      <thead class="table-light">
        <tr>
          <th>Тип</th>
          <th>Комната</th>
          <th>Показание</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sensor in sensors" :key="sensor.id" :class="sensor.alert ? 'table-danger' : ''">
          <td>{{ sensor.type }}</td>
          <td>{{ sensor.room }}</td>
          <td>{{ sensor.value }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sensors: [
        { id: 1, type: 'Температура', room: 'Кухня', value: '24°C', alert: false },
        { id: 2, type: 'Газ', room: 'Котельная', value: '0%', alert: false },
        { id: 3, type: 'Движение', room: 'Гостиная', value: 'Обнаружено', alert: true },
        { id: 4, type: 'Дым', room: 'Кухня', value: '10 ppm', alert: true }
      ]
    };
  }
};
</script>