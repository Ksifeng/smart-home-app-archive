<template>
  <nav class="navbar">
    <router-link to="/">Обзор</router-link>
    <router-link to="/sensors">Сенсоры</router-link>
    <router-link to="/devices">Устройства</router-link>
    <router-link to="/security">Безопасность</router-link>
    <router-link to="/history">История</router-link>
    <router-link to="/analytics">Аналитика</router-link>
    <router-link to="/settings">Настройки</router-link>
  </nav>
</template>

<style>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #eee;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  z-index: 1000;
}
.router-link-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
