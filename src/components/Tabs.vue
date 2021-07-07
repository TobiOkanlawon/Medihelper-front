<template>
<div class="form">

    <div class="tabBar">
        <div @click="tabOne" :class="tabOneActive ? 'active': 'inactive' ">
            <slot name="header1" />
        </div>
        <div @click="tabTwo" :class="!tabOneActive ? 'active': 'inactive'">
            <slot name="header2" />
        </div>
    </div>

        <div v-show="tabOneActive">
            <slot name="content1" />
        </div>
        <div v-show="!tabOneActive">
            <slot name="content2" />
        </div>
</div>
</template>

<script>
export default {
    data(){
        return {
            tabOneActive: true,
        }
    },
    emthods: {
        tabOne(){
            this.tabOneActive = true;
        },
        tabTwo(){
            this.tabOneActive = false;
            console.log(this.tabOneActive)
        }
    }
}
</script>

<style scoped>
.active {
    color: black;
    background-color: yellow;
}
.inactive {
    color: gray;
}
</style>