<template>
    <Layout>
        <template v-slot:sidebar>
            <div>
                <!-- Put the sidebar for the staff dashboard here -->
                <p>Sidebar goes here</p>
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