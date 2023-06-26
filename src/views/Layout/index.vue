<template>
        <LayoutNav />  
        <LayoutHeader /> 
        <router-view></router-view>
        <LayoutFooter />
        <LayoutFixed />
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFixed from './LayoutFixed.vue';
</script>

<style lang="scss" scoped>

</style>