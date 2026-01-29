<template>
  <div>
    <h2>Устройства</h2>
    <div class="row">
      <div class="col-md-4 mb-3" v-for="device in devices" :key="device.id">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title">{{ device.name }}</h5>
            <p class="card-text">Статус: {{ device.status ? 'Включено' : 'Выключено' }}</p>
            <button class="btn btn-sm btn-primary" @click="toggleDevice(device)">
              {{ device.status ? 'Выключить' : 'Включить' }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      devices: [
        { id: 1, name: 'Лампа в спальне', status: true },
        { id: 2, name: 'Розетка на кухне', status: false },
        { id: 3, name: 'Термостат', status: true }
      ]
    };
  },
  methods: {
    toggleDevice(device) {
      device.status = !device.status;
    }
  }
};
</script>