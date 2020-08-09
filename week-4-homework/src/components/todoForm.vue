<template>
    <div>
        <ValidationObserver v-slot="{ handleSubmit }">
            <form @submit.prevent="handleSubmit(submitForm)">
                <div class="row mt-3">
                    <div class="col-12">
                        <label>Title</label>
                        <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                            <input type="text" name="title" class="w-100" v-model="formModel.title" />
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <label>Detail</label>
                        <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                            <input type="text" name="detail" class="w-100" v-model="formModel.detail" />
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row mt-3">
                    <div class="col-12">
                        <label>Status</label>
                        <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                            <select class="w-100 px-1 py-1" name="status" v-model="formModel.status">
                                <template v-for="status in Object.keys(STATUSSES)">
                                    <option :value="STATUSSES[status].VALUE">
                                        {{ STATUSSES[status].TEXT }}
                                    </option>
                                </template>
                            </select>
                            <span class="text-danger">{{ errors[0] }}</span>
                        </ValidationProvider>
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col-12">
                        <button type="submit" class="w-100 text-white"
                        :class="formData ? 'bg-danger' : 'bg-success'">
                            {{ formData ? 'Update' : 'Add New' }}
                        </button>
                    </div>
                </div>
            </form>
        </ValidationObserver>
    </div>
</template>

<script>
    import { STATUSSES } from '../statuses';
    import { ValidationProvider, ValidationObserver } from 'vee-validate';
    export default {
        name: "todoForm",
        props: {
            formData: {
                type: Object,
                default: null,
            }
        },
        components: {
            ValidationProvider,
            ValidationObserver,
        },
        data() {
            return {
                formModel: {
                    title: '',
                    detail: '',
                    status: ''
                },
                STATUSSES
            }
        },
        methods: {
            submitForm() {

                this.$emit('onSubmit', this.formModel);
                this.clearForm();
            },
            clearForm() {
                this.formModel = {
                    title: '',
                    detail: '',
                    status: ''
                }
            }
        },
        mounted() {
            if (this.formData) {
                this.formModel = this.formData;
            }
        }
    }
</script>

<style scoped>

</style>
