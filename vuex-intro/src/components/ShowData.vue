<template>
    <div class="showData">
        <h3>Data gösterme yöntemleri</h3>
        Stora direk erişim: {{ $store.state.count }}
        <hr>
        Getters ile erişim: {{ $store.getters.getCount }}
        <hr>
        mapState ile erişim: {{ count }}
        <hr>
        mapGetters ile erişim: {{ myCount }}
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    export default {
        name: "ShowData",
        computed: {
            ...mapState(['count']),
            ...mapGetters({
                myCount: 'getCount'
            }),
        },
        created() {
        }
    }
</script>

<style scoped>
    .showData {
        border: solid 1px #ccc;
        width: 500px;
        margin: auto;
        background-color: lavender;
        padding: 12px;
    }
</style>
