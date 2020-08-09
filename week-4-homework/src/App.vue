<template>
  <div id="app">
    <div class="container" ref="myContainer">
      <div class="mb-3">
        <router-link tag="a" to="/">
          List All
        </router-link>
        |
        <router-link tag="a" to="/add-new">
          Add New
        </router-link>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
