<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <div id="nav" class="header-area">
      <ul class="header-menu">
        <li><router-link to="/">Home</router-link></li>
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
