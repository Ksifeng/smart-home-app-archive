<template>
  <div class="modal-backdrop" @click.self="$emit('close')">
    <div class="modal-content shadow p-4 bg-white rounded">
      <p>{{ message }}</p>
      <button class="btn btn-secondary mt-2" @click="$emit('close')">Закрыть</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['message']
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
}

.modal-content {
  background: white;
  max-width: 400px;
  width: 90%;
}
</style>
