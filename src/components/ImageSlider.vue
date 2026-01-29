<template>
  <div class="slider text-center">
    <h3>Галерея</h3>
    <div class="position-relative">
      <img :src="images[current]" class="img-fluid rounded shadow" style="max-height: 300px;" />
      <button class="btn btn-outline-dark slider-btn left" @click="prev">&lt;</button>
      <button class="btn btn-outline-dark slider-btn right" @click="next">&gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      images: [
        'https://via.placeholder.com/600x300?text=Комната+1',
        'https://via.placeholder.com/600x300?text=Комната+2',
        'https://via.placeholder.com/600x300?text=Комната+3'
      ]
    };
  },
  methods: {
    prev() {
      this.current = (this.current - 1 + this.images.length) % this.images.length;
    },
    next() {
      this.current = (this.current + 1) % this.images.length;
    }
  }
};
</script>

<style scoped>
.slider-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}
</style>
