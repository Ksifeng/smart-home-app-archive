<!-- components/History.vue -->
<template>
  <div class="history-log">
    <h2>Журнал событий</h2>
    <div class="row mb-2">
      <div class="col-auto">
        <label>Тип события:</label>
        <select v-model="filterType" class="form-select">
          <option value="">Все</option>
          <option v-for="type in eventTypes" :key="type">{{ type }}</option>
        </select>
      </div>
      <div class="col-auto">
        <label>Дата с:</label>
        <input type="date" v-model="startDate" class="form-control">
      </div>
      <div class="col-auto">
        <label>Дата по:</label>
        <input type="date" v-model="endDate" class="form-control">
      </div>
      <div class="col-auto align-self-end">
        <button class="btn btn-primary" @click="filterEvents">Фильтровать</button>
      </div>
      <div class="col-auto align-self-end ms-auto">
        <button class="btn btn-secondary" @click="exportCSV">Экспорт CSV</button>
        <button class="btn btn-secondary ms-1" @click="exportPDF">Экспорт PDF</button>
      </div>
    </div>

    <table class="table table-bordered">
      <thead>
        <tr><th>Время</th><th>Тип</th><th>Сообщение</th></tr>
      </thead>
      <tbody>
        <tr v-for="event in filteredEvents" :key="event.time">
          <td>{{ event.time }}</td>
          <td>{{ event.type }}</td>
          <td>{{ event.message }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
export default {
  setup() {
    const allEvents = [
      { time: '2023-06-01 09:00', type: 'Инфо', message: 'Устройство X включено' },
      { time: '2023-06-02 10:30', type: 'Авария', message: 'Датчик дыма сработал' },
      // ... more events
    ];
    const filterType = ref('');
    const startDate = ref('');
    const endDate = ref('');
    const eventTypes = ['Инфо', 'Авария', 'Предупреждение'];

    const filteredEvents = computed(() => {
      return allEvents.filter(e => {
        const matchesType = !filterType.value || e.type === filterType.value;
        const date = new Date(e.time);
        const from = startDate.value ? new Date(startDate.value) : null;
        const to = endDate.value ? new Date(endDate.value) : null;
        const inRange = (!from || date >= from) && (!to || date <= to);
        return matchesType && inRange;
      });
    });

    const filterEvents = () => {
      // Computed will auto-update
    };
    const exportCSV = () => alert('Экспорт CSV (фиктивно)');
    const exportPDF = () => alert('Экспорт PDF (фиктивно)');

    return { filterType, startDate, endDate, eventTypes, filteredEvents, filterEvents, exportCSV, exportPDF };
  },
};
</script>
