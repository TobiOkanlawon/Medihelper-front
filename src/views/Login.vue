<template>
    <Tabs>
        <template v-slot:header1>
            Login as Staff
        </template>
        <template v-slot:header2>
            Login as a Student
        </template>
    <!-- Have a tabbed component for administrators or students to login  -->

    <template v-slot:content1>
    <form @submit.prevent="handleStaffSubmit">
        <label for="staff-email">Enter your email</label><br>
        <input type="Email" name="staff-email" id="staff-email"><br>

        <label for="staff-password">Enter your password</label><br>
        <input type="password" name="staff-password" id="staff-password"><br>

        <button type="submit">
            Submit
        </button>
    </form>
    </template>

    <template v-slot:content2>
        <form @submit.prevent="handleStudentSubmit">
            <label for="clinic-id">Enter your Clinic number</label>
            <input type="text" name="clinic-id" id="clinic-id">

            <label for="student-password">Enter your password</label>
            <input type="password" name="student-password" id="student-password">

            <button type="submit">Submit</button>
        </form>
    </template>
    </Tabs>
</template>

<script>
import Tabs from '../components/Tabs.vue'

export default {
    components: {
        Tabs,
    },
    methods: {
        handleSubmit(){
            // Handle form validation here.

            // if the password is correct, redirect to the correct home page.
        }
    }
}
</script>