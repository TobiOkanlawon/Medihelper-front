<template>
        <div v-if='fetching'>
            <p v-if='fetching'> Loading...</p>
        </div>

        <div v-else class="w-full h-full flex flex-row justify-evenly px-10 py-5">
            <!-- {{data}} -->
            {{error}}
            <div class="flex flex-col">
                <!-- Where the image and the information box goes -->
                <div class="h-48 w-48 rounded-lg mb-4">
                    <img src="../assets/profile.jpg" :alt="data.student.firstName + ' ' +  data.student.lastName">
                </div>
            </div>

            <div>
                <div 
                    class="flex flex-col h-124 w-100 px-6 py-12 bg-blue-50 rounded-lg text-blue-1000 font-semibold">

                <div class="h-5/6 capitalize" v-if="page === 'info'">
                    <!-- Where the information and the action goes  -->
                    <p class="mb-2"> <strong>First Name: </strong> {{data.student.firstName}} </p>
                    <p class="mb-2"> <strong>Last Name: </strong> {{data.student.lastName}} </p>
                    <p class="mb-2"> <strong>Email: </strong> {{data.student.email}} </p>
                    <p class="mb-2"> <strong>Clinic ID: </strong> {{data.student.clinicID}} </p>
                </div>
                <div v-if="page === 'record'">
                    <span @click="handleChange('info')" class="rounded-lg cursor-pointer text-sm"> Back to info page </span>
                    <h2 class="text-center text-xl mb-4">Add Record</h2>

                    <div v-for="field in fields" :key="field">
                        <div class="flex justify-between py-1 px-4">
                            <div class="overflow-hidden">
                                <p>{{field.name}}</p>
                            </div>
                            <div class="overflow-hidden">
                                <p>{{field.details}}</p>
                            </div>
                        </div>
                    </div>

                    <div 
                    class="rounded-lg w-1/2 bg-blue-1000 text-blue-50 text-center py-2 mt-2 cursor-pointer" 
                    @click="showAddField = true"
                    v-if="!showAddField">
                        Add Field
                    </div>

                    <form @submit.prevent="handleAddField" v-if="showAddField">
                        <label for="name">Name: </label>
                        <input type="text" name="name" id="name" v-model="fieldName" class="rounded-lg text-blue-1000 mb-2"> <br>

                        <label for="details">More Information: </label>
                        <input type="text" name="details" id="details" v-model="fieldDetails" class="rounded-lg text-blue-1000 mb-2"><br>
                        <button type="submit" class="bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold mt-4">Submit Field</button>
                    </form>
                </div>

                <div v-if="page === 'drugs'">
                    <span @click="handleChange('info')" class="rounded-lg cursor-pointer text-sm"> Back to info page </span>

                    <h2 class="text-center text-xl mb-4">Prescribe Drugs</h2>

                    <div v-for="drug in drugs" :key="drug">
                        <div class="flex justify-between py-1 px-4">
                            <div class="overflow-hidden">
                                <p>{{drug.name}}</p>
                            </div>
                            <div class="overflow-hidden">
                                <p>{{drug.details}}</p>
                            </div>
                        </div>
                    </div>

                    <div 
                    class="rounded-lg w-1/2 bg-blue-1000 text-blue-50 text-center py-2 mt-2 cursor-pointer" 
                    @click="showAddDrug = true"
                    v-if="!showAddDrug">
                        Add Drug
                    </div>

                    <form @submit.prevent="handleAddDrug" v-if="showAddDrug">
                        <label for="name">Name: </label>
                        <input type="text" name="name" id="name" v-model="fieldName" class="rounded-lg text-blue-1000 mb-2"> <br>

                        <label for="details">Instructions: </label>
                        <input type="text" name="details" id="details" v-model="fieldDetails" class="rounded-lg text-blue-1000 mb-2"><br>
                        <button type="submit" class="bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold mt-4">Prescribe drug</button>
                    </form>
                </div>

                <div class="flex justify-evenly w-full" v-if="page === 'info'">
                    <button class="bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold" @click="handleChange('record')">Add Record</button>
                    <button class="bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold" @click="handleChange('drugs')">Prescribe Drugs</button>
                </div>

                <div class="flex justify-evenly w-full" v-if="page === 'drugs' && fields.length > 0">
                    <button class="bg-blue-1000 text-blue-50 rounded-lg w-1/3 h-12 font-semibold" @click="handleSubmitRecord('record')">Submit Record</button>
                </div>

                </div>
            </div>
        </div>
</template>

<script>
// import Layout from '../components/staffDashboardLayout.vue';
import { useQuery } from '@urql/vue'
import { useRoute } from 'vue-router'
import {ref} from 'vue'

export default {
    setup(){
        const route = useRoute()

        const fields = ref([])
        const drugs = ref([])

        const fieldName = ref('')
        const fieldDetails = ref('')

        const drugName = ref('')
        const drugDetails = ref('')

        const showAddField = ref(false)
        const showAddDrug = ref(false)

        const handleAddField = function(){
            fields.value.push({'name': fieldName.value, 'details': fieldDetails.value});
            fieldName.value = '';
            fieldDetails.value = '';
            showAddField.value = false;
        }

        const handleAddDrug = function(){
            drugs.value.push({'name': drugName.value, 'details': drugDetails.value})
            drugName.value = '';
            drugDetails.value = ''
            showAddDrug.value = false;
        }

        // TODO: Add an image field and then put that image into the UI.
        const result = useQuery({
            query: `query Student($clinicID: String!){
                student(clinicID: $clinicID) {
                    firstName
                    lastName
                    clinicID
                    email
                    DOB {
                        month
                        day
                        year
                    }
                }
            }`,
            variables: {
                clinicID: route.params.id
                },
            requestPolicy: 'cache first' 
        });

        return {
            fetching: result.fetching,
            data: result.data,
            error: result.error,
            fields,
            drugs,
            showAddField,
            showAddDrug,
            fieldName,
            fieldDetails,
            drugName,
            drugDetails,
            handleAddField,
            handleAddDrug
        }
    },
    data(){
        return {
            page: 'info',
        }
    },
    methods: {
        handleChange(page){
            this.page = page; 
        }
    }
}
</script>