<template>
    <div>
      Vuex intro
        <br>
        <br>
        <ShowData />
        <br>
        <br>
        <button @click="increment"> Increment </button>
        <br>
        <br>
        <button @click="increment2"> Increment 2 </button>
    </div>
</template>

<script>
    import ShowData from "./components/ShowData";
    import { mapActions } from  'vuex';
    export default {
        components: { ShowData },
        methods: {
            ...mapActions({
              setData: 'setCount'
            }),
            increment() {
                this.$store.commit('increment');
            },
            increment2() {
                this.setData();
            }
        },
    }
</script>

<style scoped>

</style>
