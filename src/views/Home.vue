<template>
    <div id="homeContainer">
        <h2>Welcome to Medihelp</h2>
        <router-link :to="{name: 'Register'}">Register</router-link>
        <router-link :to="{ name: 'Login'}">Login</router-link>
    </div>
</template>