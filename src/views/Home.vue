<template>
    <div class="container h-full flex flex-col justify-center items-center">
        <h2 class='text-2xl font-semibold mb-12'>Welcome to Medihelp</h2>
        <div class="flex flex-row justify-evenly">
            <button class='bg-blue-1000 hover:bg-gray-900 text-blue-50 font-semibold py-2 px-4 rounded-lg w-48 my-6 mx-6 cursor-pointer'>
            <router-link :to="{name: 'Register'}">Register</router-link>
            </button>
            <button class='bg-blue-1000 hover:bg-gray-900 text-blue-50 font-semibold py-2 px-4 rounded-lg w-48 my-6 mx-6 cursor-pointer'>
            <router-link :to="{ name: 'Login'}">Login</router-link>
        </button>

    </div>
    </div>
</template>

<script>
export default {
    created(){
        if(this.$store.state.isLoggedIn){
            if(this.$store.state.type == 'Doctor'){
                this.$router.push('./doctor')
            } else if(this.$store.state.type == 'Receptionist'){
                this.$router.push('./reception')
            } else if(this.$store.state.type == 'Pharmacist'){
                this.$router.push('./pharmacy')
            } else if(this.$store.state.type == 'Student'){
                this.$router.push('./student')
            }
        }
    }
}
</script>