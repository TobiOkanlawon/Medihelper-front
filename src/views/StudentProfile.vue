<template>
    <Layout>
        <template v-slot:content>
            <div class="flex flex-col items-center">

            <h2 class="text-xl text-blue-50 mt-6 mb-4">Change your profile information</h2>
            <form @submit.prevent="handleSubmit" class="px-8 pt-6 pb-8 mb-4 w-1/2">
                <label for="firstName" class="block text-blue-50 text-sm font-extralight mb-1">FirstName</label>
                <input type="text" name="" id=""
                class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
                v-model="firstName"> 

                <label for="firstName" class="block text-blue-50 text-sm font-extralight mb-1">LastName</label>
                <input type="text" name="" id=""
                class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
                v-model="lastName">

                <label for="firstName" class="block text-blue-50 text-sm font-extralight mb-1">Email</label>
                <input type="text" name="" id=""
                class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
                v-model="email">

                <label for="firstName" class="block text-blue-50 text-sm font-extralight mb-1">Password</label>
                <input type="text" name="" id=""
                class="shadow appearance-none border-1 border-gray-900 rounded w-full py-2 px-3 text-blue-1000 bg-blue-50 leading-tight focus:outline-none focus:shadow-outline mb-4"
                v-model="password">

                <button type="submit" class="bg-blue-1000 hover:bg-gray-900 text-blue-50 font-bold py-2 px-4 rounded-lg w-48 my-6">Submit</button>

            </form>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '@/components/dashboardStudent'
export default {
    components: {
        Layout,
    },
    setup(){

    }
}
</script>