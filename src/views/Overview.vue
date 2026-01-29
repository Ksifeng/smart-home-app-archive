<template>
  <div>
    <h2>Обзор умного дома</h2>
    <div class="row">
      <div class="col-md-4" v-for="(item, index) in summary" :key="index">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.value }}</p>
          </div>
        </div>
      </div>
    </div>

    <h3>Последние события</h3>
    <ul class="list-group">
      <li v-for="(event, index) in events" :key="index" class="list-group-item">
        {{ event }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      summary: [
        { title: 'Температура в комнатах', value: '22°C' },
        { title: 'Влажность', value: '45%' },
        { title: 'Окна/двери', value: 'Все закрыты' },
        { title: 'Движение', value: 'Нет' },
        { title: 'Освещение', value: 'Включено в кухне' },
        { title: 'Энергопотребление', value: '15 кВт·ч' }
      ],
      events: [
        'Обнаружено движение на кухне',
        'Дверь в спальне открыта',
        'Температура выше нормы в ванной'
      ]
    };
  }
};
</script>