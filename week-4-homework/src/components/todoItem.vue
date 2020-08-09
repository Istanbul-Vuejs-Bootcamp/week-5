<template>
    <div :class="colorArray[status]" class="px-3 py-3 mb-3">
        <div class="d-flex justify-content-between">
           <div>{{ title }}</div>
            <div>
                <button @click="gotoUpdate">Edit</button>
            </div>
        </div>
        <div>{{ detail }}</div>
    </div>
</template>

<script>
    export default {
        name: "todoItem",
        props: ['index', 'title', 'detail', 'status'],
        data() {
            return {
              colorArray: ['bg-info', 'bg-secondary', 'bg-primary', 'bg-danger'],
            }
        },
        methods: {
            gotoUpdate() {
                this.$router.push({
                    name: 'UpdatePage',
                    params: {
                        id: this.index,
                        formData: {
                            index: this.index,
                            title: this.title,
                            detail: this.detail,
                            status: this.status,
                        }
                    }
                })
            }
        },
    }
</script>

<style scoped>

</style>
