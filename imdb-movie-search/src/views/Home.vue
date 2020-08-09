<template>
  <div>

    <b-card class="my-5 mx-5">
      <label>Movie Search</label>
      <b-form-input v-model="searchText" placeholder="Enter your movie name"></b-form-input>
    </b-card>

    <b-card class="my-5 mx-5">
      <table class="table">
        <thead>
        <tr>
          <td>Title</td>
          <td>Type</td>
          <td>Year</td>
          <td>Poster</td>
        </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in searchMovies" :key="index">
            <td>{{item.Title}}</td>
            <td>{{item.Type}}</td>
            <td>{{item.Year}}</td>
            <td>
              <img :src="item.Poster" width="200px" />
            </td>
          </tr>
        </tbody>
        </thead>
      </table>
    </b-card>

  </div>
</template>

<script>
import debounce from 'lodash/debounce';
import { mapState } from 'vuex';
export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      searchText: '',
    }
  },
  watch: {
    searchText: debounce( function (newVal) {
      this.$store.dispatch('searchMovie', newVal);
    }, 500)
  },
  computed: {
    ...mapState(['searchMovies'])
  }
}
</script>
