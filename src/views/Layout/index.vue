<template>
    <LayoutFixed />
    <LayoutNavVue />
    <LayoutHeaderVue />
    <LayoutFooter />
    <router-view />
</template>

<script setup>
import LayoutFixed from './components/LayoutFixed.vue';
import LayoutHeaderVue from './components/LayoutHeader.vue';
import LayoutNavVue from './components/LayoutNav.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<style></style>
