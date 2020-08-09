<template>
    <div>
      {{ $store.state.count }} <br>
        {{ $store.state.updateDate }}
      <br><br>
      <button @click="increment">Increment</button>
    </div>
</template>

<script>
    export default {
      methods: {
        increment() {
          this.$store.commit('increment');
        }
      },
      created() {
          /*const count = localStorage.getItem('myCount');
          if(count) {
              this.$store.commit('setCount', count)
          }*/
      }
    }
</script>

<style scoped>

</style>
