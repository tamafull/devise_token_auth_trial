<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav" class="header-area">
      <ul class="header-menu">
        <!-- TODO: 一旦全routerを表示しておく。後で削除。 -->
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/logout">Logout</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
