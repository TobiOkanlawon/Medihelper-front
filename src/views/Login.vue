<template>
<div class="w-full max-w-xs mx-auto py-5">
    <Tabs>
        <template v-slot:header1>
            Login as Staff
        </template>
        <template v-slot:header2>
            Login as a Student
        </template>

    <template v-slot:content1>
    <form @submit.prevent="handleStaffSubmit" class="px-8 pt-6 pb-8 mb-4">
        <label for="staff-email" class="block text-blue-50 text-sm font-extralight mb-1">Enter your email</label>
        <input type="Email" name="staff-email" id="staff-email"
        class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
        v-model="staffEmail" required>

        <label for="staff-password" class="block text-blue-50 text-sm font-extralight mb-1">Enter your password</label>
        <input type="password" name="staff-password" id="staff-password"
        class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline"
        v-model="staffPassword" required> <br>

        <button type="submit" class='bg-blue-1000 hover:bg-gray-900 text-blue-50 font-bold py-2 px-4 rounded-lg w-48 my-6'>Submit</button>
    </form>
    </template>

    <template v-slot:content2>
        <form @submit.prevent="handleStudentSubmit" class="px-8 pt-6 pb-8 mb-4">
            <label for="clinic-id" class="block text-blue-50 text-sm font-extralight mb-1">Enter your Clinic number</label>
            <input type="text" name="clinic-id" id="clinic-id"
            class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
            v-model="studentClinicID" required>

            <label for="student-password" class="block text-blue-50 text-sm font-extralight mb-1">Enter your password</label>
            <input type="password" name="student-password" id="student-password"
            class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
            v-model="studentPassword" required>

            <button type="submit" class='bg-blue-1000 hover:bg-gray-900 text-blue-50 font-bold py-2 px-4 rounded-lg w-48 my-6'>Submit</button>
        </form>
    </template>
    </Tabs>
</div>
</template>

<script>
import Tabs from '../components/Tabs.vue'

export default {
    components: {
        Tabs,
    },
    data(){
        return {
            staffEmail: null,
            staffPassword: null,
            studentClinicID: null,
            studentPassword: null,
        }
    },
    methods: {
        handleStaffSubmit(){
            this.$router.push({name: 'Reception'})
        },
        handleStudentSubmit(){
            this.$router.push({name: 'StudentAppointment'})
        }
    }
}
</script>