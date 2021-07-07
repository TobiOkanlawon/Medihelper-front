<template>
<Layout>
    <template v-slot:content>
    <form @submit.prevent="handleIDCheck">
        <label for="clinic-id">Enter a Clinic ID</label><br>
        <input type="text" id="clinic-id" name="clinic-id" required v-model="clinicID"/><br>

        <button type="submit">Submit</button>
    </form>
    </template>
</Layout>
</template>

<script>
import Layout from '../components/staffDashboardLayout.vue'
export default {
    components: {
        Layout,
    },
    data(){
        return {
            clinicID: null,
        }
    },
    methods: {
        handleIDCheck(){
            //TODO:handle the ID check and redirect to the correct page if the ID exists
            if(this.clinicID){
                this.$router.push({name: 'ViewStudent', params: {ID: this.clinicID}})
            }
        },
    }
}
</script>