<template>
    <div style="padding: 25px">
      <input v-model="value" />
      <br><br>
      {{ value }}
    </div>
</template>

<script>
    export default {
      name: 'two-way-data-binding-example',
      computed: {
        value: {
          get() {
            //return this.$store.state.value
            // veya getters ile almak istersek
            return this.$store.getters.getValueData;
          },
          set(val) {
            this.$store.commit('setValueData', val);
          }
        }
      }
    }
</script>
