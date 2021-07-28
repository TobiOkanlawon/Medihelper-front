<template>
<div id="layout-container" class="h-full">
    <div id="sidebar-container" class="bg-blue-50 py-10 border-t border-black">
        <slot name="sidebar" />
    </div>
    <div id="content-container">
        <slot name="content" />
    </div>
</div>
</template>

<style scoped>
#layout-container {
    height: 100%;
    width: 100%;

    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 1fr;
}

#sidebar-container {
    grid-column: 1;
    grid-row: 1;
}

#content-container {
    grid-column: 2;
    grid-row: 1;

    justify-content: center;
    align-content: center;
}
</style>