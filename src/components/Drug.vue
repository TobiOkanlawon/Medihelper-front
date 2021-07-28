<template>
    <div class="bg-blue-50 text-blue-1000 rounded-lg mx-6 px-6 py-2 my-4 w-1/3 md:w-1/2 flex justify-between">
    <div>
        <p> <strong class="text-gray-900">Name: </strong> {{data.student.firstName}} {{data.student.lastName}}</p>
        <p class="text-blue-900"> <strong class="text-gray-900">Clinic ID: </strong>{{data.student.clinicID}}</p>
        <p>
            <strong>Drug Name: </strong>
            {{data.drug.name}}
        </p>
        <p> <strong> Instructions: </strong> {{data.drug.instructions}}</p>
            
    </div>
    <div class="flex flex-col items-middle">
        <button class="text-blue-1000" @click="deleteDrug">Delete</button>
    </div>
    </div>
</template>

<script>
import { useMutation } from '@urql/vue'

export default {
    setup(){
        const {executeMutation: deleteDrug} = useMutation(
            `mutation($id: String){
                deleteDrug(id: #id){
                    id   
                }`
        )

        return {
            deleteDrug
        }
    },
    props: [
        'data'
    ],
    methods: {
        handleDelete(){
            this.$store.commit('deleteDrug', this.data.id)
        }
    }
}
</script>