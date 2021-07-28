<template>
<div class="form border-1 border-gray-300 rounded-lg">
    <div class="tabBar flex capitalize">
        <button @click="tabOne" class="px-2 py-4 w-full" :class="tabOneActive ? 'bg-blue-1000 text-blue-50': 'text-blue-1000 bg-blue-200' ">
            <slot name="header1" />
        </button>
        <button @click="tabTwo" class="px-2 py-4 w-full" :class="!tabOneActive ? 'bg-blue-1000 text-blue-50': 'text-blue-1000 bg-blue-200'">
            <slot name="header2" />
        </button>
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
    methods: {
        tabOne(){
            this.tabOneActive = true;

        },
        tabTwo(){
            this.tabOneActive = false;
        }
    }
}
</script>