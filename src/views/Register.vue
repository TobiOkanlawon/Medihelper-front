<template>
    <div class='w-ful max-w-xs mx-auto py-5'>
        <Tabs>
            <template v-slot:header1>
                <span>Register as Staff</span>
            </template>
            <template v-slot:content1>
                <form @submit.prevent="handleStaffSubmit" class='px-8 pt-6 pb-8 mb-4'>
                    <label for="first-name-staff" class="block text-blue-50 text-sm font-extralight mb-1">Enter your first name</label>
                    <input type="text" name="first-name-staff" id="staff-first-name"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
                    v-model="staffFirstName" required />

                    <label for="last-name-staff" class="block text-blue-50 text-sm font-extralight mb-1">Enter your last name</label>
                    <input type="text" name="last-name-staff" id="staff-last-name"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="staffLastName" required />

                    <label for="email-staff" class="block text-blue-50 text-sm font-extralight mb-1">Enter your email</label>
                    <input type="email" name="email-staff" id="staff-email"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="staffEmail" required />

                    <label for="password-staff" class="block text-blue-50 text-sm font-extralight mb-1">Enter a password</label>
                    <input type="password" name="password-staff" id="password-staff"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="staffPassword" required />

                    <label for="role" class="block text-blue-50 text-sm font-extralight mb-1">What position do you hold?</label> 
                    <label for="Doctor" class=" text-blue-50 text-sm font-extralight mb-1 inline mx-2">Doctor</label>
                    <input type="radio" name="role" id="Doctor" value="Doctor" v-model="staffRolePicked" required />

                    <label for="Pharmacist" class="text-blue-50 text-sm font-extralight mb-1 inline mx-2">Pharmacist</label>
                    <input type="radio" name="role" id="Pharmacist" value="Pharmacist" v-model="staffRolePicked" required/><br> 

                    <label for="Receptionist" class=" text-blue-50 text-sm font-extralight mb-1 inline mx-2">Receptionist</label>
                    <input type="radio" name="role" id="Receptionist" value="Receptionist" v-model="staffRolePicked" required/> <br>

                    <button type="submit" class='bg-blue-1000 hover:bg-gray-900 text-blue-50 font-bold py-2 px-4 rounded-lg w-48 my-6'>Submit</button>
                </form>
            </template>
            <template v-slot:header2>
                <span>Register as Student</span>
            </template>
            <template v-slot:content2>
                <form @submit.prevent="handleStudentSubmit" class='px-8 pt-6 pb-8 mb-4'>
                    <label for="first-name" class="block text-blue-50 text-sm font-extralight mb-1">Enter your First Name</label>
                    <input type="text" name="first-name" id="first-name"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
                     v-model="studentFirstName" />

                    <label for="last-name" class="block text-blue-50 text-sm font-extralight mb-1">Enter your Last Name</label>
                    <input type="text" name="last-name" id="last-name"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="studentLastName" />

                    <label for="clinic-number" class="block text-blue-50 text-sm font-extralight mb-1"> Enter your Clinic Number </label>
                    <input type="text" name="clinic-number" id="clinic-number"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="studentClinicID" />

                    <label for="clinic-number" class="block text-blue-50 text-sm font-extralight mb-1"> Enter your Email Address </label>
                    <input type="text" name="clinic-number" id="clinic-number"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
                    v-model="studentEmail" />

                    <label for="password-student" class="block text-blue-50 text-sm font-extralight mb-1">Enter a password</label>
                    <input type="password" name="password-student" id="password-student"
                    class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"

                    v-model="studentPassword" />

                    <button type="submit" class='bg-blue-1000 hover:bg-gray-900 text-blue-50 font-bold py-2 px-4 rounded-lg w-48 my-6'>Submit</button>
                </form>
            </template>
        </Tabs>
    </div>
</template>

<script>
import Tabs from '../components/Tabs.vue'
import { useMutation } from '@urql/vue'
import { useStore } from 'vuex';
import {useRouter} from 'vue-router'
import {ref} from 'vue'
import { CREATE_DOCTOR, CREATE_PHARMACIST, CREATE_RECEPTIONIST, CREATE_STUDENT } from '../constants/graphql'

export default {
    setup(){

        const studentFirstName = ref('');
        const studentLastName = ref('');
        const studentClinicID = ref('');
        const studentEmail = ref('');
        const studentPassword = ref('');
        const staffFirstName = ref('');
        const staffLastName = ref('');
        const staffEmail = ref('');
        const staffPassword = ref('');
        const staffRolePicked = ref('');
        const errors = ref({});

        const store = useStore();
        const router = useRouter();

        const { executeMutation: createStudent } = useMutation(
            CREATE_STUDENT
        )

        const { executeMutation: createDoctor } = useMutation(
            CREATE_DOCTOR
        )

        const { executeMutation: createPharmacist } = useMutation(
            CREATE_PHARMACIST
        )

        const { executeMutation: createReceptionist } = useMutation(
            CREATE_RECEPTIONIST
        )

        const registerStudent = function({clinicID, email, firstName, lastName, password} ){
            const variables = {clinicID, firstName, email, lastName, password};
            return createStudent(variables).then((result) => {
                return result
            })
        }

        const handleStudentSubmit = function(){
            registerStudent({
                    firstName: studentFirstName.value,
                    lastName: studentLastName.value,
                    clinicID: studentClinicID.value,
                    password: studentPassword.value
                }).then((result)=>{
                        if(result.error){
                            errors.value = result.error
                        } else if(result.data) {
                            store.commit('authUser', {user: result.user, token:result.token})
                            router.push({name: "StudentAppointment"})
                        }
                    })
        }

        const registerDoctor = function({firstName, lastName, email, password}){
                const variables = {firstName, lastName, email, password}
                return createDoctor(variables).then((result) => {
                    return result
                })
            }

        const registerPharmacist = function({firstName, lastName, email, password}){
                const variables = {firstName, lastName, email, password}
                return createPharmacist(variables).then((result) => {
                    return result
                })
            }

        const registerReceptionist = function({firstName, lastName, email, password}){
                const variables = {firstName, lastName, email, password}
                return createReceptionist(variables).then((result) => {
                    return result
                })
        }

        const handleStaffSubmit = function(){
            if(staffRolePicked.value === "Doctor"){
                registerDoctor({
                        firstName: staffFirstName.value,
                        lastName: staffLastName.value,
                        email: staffEmail.value,
                        password: staffPassword.value
                    }).then((result)=>{
                        if(result.error){
                            errors.value = result.error
                        } else if(result.data) {
                            store.commit('authUser', {user: result.user, token:result.token})
                            router.push({name: "Reception"})
                        }
                    })
            } else if(staffRolePicked.value === "Receptionist"){
                registerReceptionist({
                        firstName: staffFirstName.value,
                        lastName: staffLastName.value,
                        email: staffEmail.value,
                        password: staffPassword.value
                    }).then((result)=>{
                        if(result.error){
                            errors.value = result.error
                        } else if(result.data) {
                            store.commit('authUser', {user: result.user, token:result.token})
                            router.push({name: "Reception"})
                        }
                    })
            } else if(staffRolePicked.value === 'Pharmacist'){
                registerPharmacist({
                        firstName: staffFirstName.value,
                        lastName: staffLastName.value,
                        email: staffEmail.value,
                        password: staffPassword.value
                    }).then((result)=>{
                        alert(result)
                        if(result.error){
                            errors.value = result.error
                        } else if(result.data){
                            store.commit('authUser', {user: result.user, token:result.token})
                            router.push({name: "Pharmacy"})
                        }
                    })
            }
        }

        return {
            studentFirstName,
            studentLastName,
            studentClinicID,
            studentEmail,
            studentPassword,
            staffFirstName,
            staffLastName,
            staffEmail,
            staffPassword,
            staffRolePicked,
            errors,
            handleStudentSubmit,
            handleStaffSubmit,
        }
    },
    components: {
        Tabs,
    },
}
</script>