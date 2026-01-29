<template>
  <form @submit.prevent="handleSubmit" class="p-3 border rounded shadow-sm bg-white">
    <h3>Обратная связь</h3>
    <div class="mb-3">
      <label class="form-label">Имя</label>
      <input v-model="name" type="text" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Email</label>
      <input v-model="email" type="email" class="form-control" required />
    </div>
    <div class="mb-3">
      <label class="form-label">Сообщение</label>
      <textarea v-model="message" class="form-control" rows="3" required></textarea>
    </div>
    <button type="submit" class="btn btn-primary">Отправить</button>
  </form>
</template>

<script>
export default {
  inject: ['openModal'],
  data() {
    return {
      name: '',
      email: '',
      message: ''
    };
  },
  methods: {
    handleSubmit() {
      const emailRegex = /^[\\w-.]+@([\\w-]+\\.)+[\\w-]{2,4}$/;
      if (!emailRegex.test(this.email)) {
        this.openModal('Ошибка: некорректный email');
        return;
      }
      if (!this.name.trim() || !this.message.trim()) {
        this.openModal('Ошибка: все поля должны быть заполнены');
        return;
      }
      this.openModal('Форма успешно отправлена!');
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>
