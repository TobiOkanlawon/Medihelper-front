<template>
    <div>
        <Tabs>
            <template v-slot:header1>
                <span>Register as Staff</span>
            </template>
            <template v-slot:content1>
                <form @submit.prevent="handleStaffSubmit">
                    <label for="email-staff">Enter your email</label><br>
                    <input type="email" name="email-staff" id="staff-email"><br>

                    <label for="password-staff">Enter a password</label><br>
                    <input type="password" name="password-staff" id="password-staff" /><br>

                    <button type="submit">Submit</button>
                </form>
            </template>
            <template v-slot:header2>
                <span>Register as Student</span>
            </template>
            <template v-slot:content2>
                <form @submit.prevent="handleStudentSubmit">
                    <label for="clinic-number"> Enter your Clinic Number </label><br>
                    <input type="number" name="clinic-number" id="clinic-number">

                    <label for="password-student">Enter a password</label><br>
                    <input type="password" name="password-student" id="password-student" />

                    <button type="submit">Submit</button>
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
    methods: {
        handleStaffSubmit(){
            return alert('staff submitted')
        },
        handleStudentSubmit(){
            return alert('student submitted')

        }
    }
}
</script>