<template>
    <Navbar />
    <div class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue'
export default ({
    components: { Navbar }
})
</script>