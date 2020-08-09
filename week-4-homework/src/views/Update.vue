<template>
    <todoForm @onSubmit="update" :form-data="selectedData" v-if="selectedData" />
</template>

<script>
    import todoForm from "../components/todoForm";
    export default {
        name: "Update",
        components: {
            todoForm,
        },
        data() {
            return {
                selectedData: null
            }
        },
        methods: {
            update(data) {
                this.$store.commit('updateTodoItem', data);
                this.$router.push('/');
            }
        },
        created() {
            if(this.$route.params.formData) {
                const { index, title, detail, status } = this.$route.params.formData;
                this.selectedData = {
                    index,
                    title,
                    detail,
                    status
                }
            } else {
                this.selectedData = this.$store.getters.getTodoList
                    .filter(item => item.index == this.$route.params.id)[0];
            }
        }
    }
</script>

<style scoped>

</style>
