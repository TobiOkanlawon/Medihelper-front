<template>
<Layout>
    <template v-slot:content>
        <div class="w-full h-full flex flex-col justify-center items-center">

            <form @submit.prevent="handleSubmit" class='w-1/2'>
                <label for="clinic-id" class="text-blue-50 font-extralight">Enter a Clinic ID</label><br>
                <input type="text" id="clinic-id"
                class="w-3/4 rounded-lg bg-blue-50 text-blue-1000"
                name="clinic-id" required v-model="clinicID"/>

                <button type="submit" class='bg-blue-1000 text-blue-50 w-48 py-3 mt-10 rounded-lg font-semibold'>Submit</button>
            </form>
        </div>
    </template>
</Layout>
</template>

<script>
import Layout from '../components/staffDashboardLayout.vue';
export default {
    components: {
        Layout,
    },
    apollo: {
    },
    data(){
        return {
            clinicID: null,
        }
    },
    methods: {
        handleSubmit(){
            this.$router.push({name: 'ViewStudent', params: {id: this.clinicID}})
        },
    }
}
</script>

<style scoped>
</style>