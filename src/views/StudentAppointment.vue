<template>
    <Layout>
        <template v-slot:content>
            <div class="text-blue-50 text-center py-6">

                <h2 class="text-blue-1000 font-semibold text-xl">Set an Appointment</h2>
            <form @submit.prevent="handleCreateAppointment" class="py-10">
                <p>Would you like to come in to see the doctor?</p>
                <p>Click the button below and we'll send you an email with the appointment details.</p>

                <button type="submit" class="bg-blue-1000 hover:bg-gray-900 text-blue-50 font-bold py-2 px-4 rounded-lg w-48 my-6">I'd like to see the doctor</button>
            </form>

            <strong class="text-sm" v-if="showMessage">Your request has been sent!</strong>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '@/components/dashboardStudent'
import { useMutation } from '@urql/vue'
import { CREATE_APPOINTMENT } from '../constants/graphql'
import { ref } from 'vue'

export default {
    components: {
        Layout,
    },
    setup(){
        const { executeMutation: createAppointment } = useMutation(
            CREATE_APPOINTMENT
        )

        const showMessage = ref(false); 

        const handleCreateAppointment = function(){
            showMessage.value = true;
            createAppointment.then((result)=>{
                return result
            })
        } 

        return { 
            createAppointment, 
            handleCreateAppointment,
            showMessage
        }
    }
}
</script>