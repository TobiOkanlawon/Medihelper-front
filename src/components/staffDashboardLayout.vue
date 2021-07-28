<template>
    <Layout>
        <template v-slot:sidebar>
            <div class="sidebar-container text-blue-1000">
                <!-- Put the sidebar for the staff dashboard here -->
                <div class="py-3 px-6">
                    <router-link
                            :to="{ name: 'Reception' }"
                            active-class="underline">
                        Search for a student
                    </router-link>
                </div>

                <div class='py-3 px-6'>
                    <router-link 
                            :to="{ name: 'Pharmacy' }"
                            active-class="underline">
                        Pharmacy
                    </router-link>
                </div>

                <hr>
            </div>
        </template>

        <template v-slot:content>
            <slot name="content" />
        </template>
    </Layout>
</template>

<script>
import Layout from './dashboardLayout.vue'

export default {
    components: {
        Layout,
    }
}
</script>

<style scoped>
.sidebar-container {
    display: flex;
    flex-direction: column;
}
</style>