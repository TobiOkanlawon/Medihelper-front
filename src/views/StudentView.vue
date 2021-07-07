<template>
    <div>
        <Layout>
            <template v-slot:content>
                <p>My name is Toby</p>
            </template>
        </Layout>
    </div>
</template>

<script>
import Layout from '../components/staffDashboardLayout.vue'

export default {
    components: {
        Layout,
    }
}
</script>