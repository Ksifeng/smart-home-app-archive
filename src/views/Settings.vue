<!-- components/Settings.vue -->
<template>
  <div class="settings">
    <h2>Настройки</h2>
    <h4>Пользователь</h4>
    <form @submit.prevent="updateUser">
      <div class="mb-2">
        <label>Email:</label>
        <input type="email" v-model="user.email" class="form-control" required>
      </div>
      <div class="mb-2">
        <label>Пароль:</label>
        <input type="password" v-model="user.password" class="form-control" required pattern=".{6,}">
        <small class="text-muted">Минимум 6 символов</small>
      </div>
      <div class="mb-2">
        <label>Единицы:</label>
        <select v-model="user.units" class="form-select">
          <option value="metric">Метрические</option>
          <option value="imperial">Имперские</option>
        </select>
      </div>
      <button class="btn btn-primary">Сохранить</button>
    </form>

    <h4 class="mt-4">Комнаты и устройства</h4>
    <p>(Добавить управление списком комнат и устройств)</p>

    <h4 class="mt-4">Пороги</h4>
    <div class="mb-2">
      <label>Порог влажности (%): {{ thresholds.humidity }}</label>
      <input type="range" v-model="thresholds.humidity" min="0" max="100">
    </div>
    <div class="mb-2">
      <label>Порог температуры (°C): {{ thresholds.temperature }}</label>
      <input type="range" v-model="thresholds.temperature" min="0" max="40">
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const user = ref({ email: 'user@example.com', password: '', units: 'metric' });
    const thresholds = ref({ humidity: 80, temperature: 25 });
    const updateUser = () => {
      alert(`Данные сохранены: ${user.value.email}, единицы ${user.value.units}`);
    };
    return { user, thresholds, updateUser };
  },
};
</script>
