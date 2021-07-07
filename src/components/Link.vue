<template>
    <router-link :to="to">
        // Make a slot for the input text.
    </router-link>
</template>

<script>
export default {
    props: [
        'to',
    ]
}
</script>