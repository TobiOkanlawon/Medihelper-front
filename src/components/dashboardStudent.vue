<template>
<Dashboard>
    <template v-slot:sidebar>
    <div class="bg-blue-50 text-blue-1000">
        <div class="py-3 px-6">
            <router-link
                :to="{ name: 'StudentAppointment' }"
                active-class="underline">
                Make an Appointment
            </router-link>
        </div>
        <div class="py-3 px-6">
            <router-link
                :to="{ name: 'StudentProfile' }"
                active-class="underline">
                Manage Profile
            </router-link>
        </div>
    </div>
    </template>
    <template v-slot:content>
        <slot name="content"/>
    </template>
</Dashboard>
</template>

<script>
import Dashboard from '@/components/dashboardLayout.vue'

export default {
    components: {
        Dashboard,
    }
}
</script>