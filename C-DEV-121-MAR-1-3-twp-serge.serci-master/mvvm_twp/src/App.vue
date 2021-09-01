<template>
  <div id="nav">
    <div class="flex mb-10 gap-32">
      <h1><img src="../src/assets/logo_1.png" class="h-20"></h1>
        <div class="mt-auto text-3xl text-gray-900">
    <h1 class="">Trello, mais en plus beau</h1>
  </div>
      <div class="bg-heropattern"></div>

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
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  background: url("../src/assets/lac.jpg") no-repeat center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
