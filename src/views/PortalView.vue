<template>
    <div>
        <SideBarLeft/>
        <div class="content">
            <router-view/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import SideBarLeft from '@/components/PortalComponents/SideBarLeft.vue';

</script>

<style scoped lang="scss">
    .content{
        margin-left: $sidebar-left-width;
        padding: 10px;
    }
</style>