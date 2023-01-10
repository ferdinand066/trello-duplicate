<template>
    <Navbar />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import Navbar from './Navbar.vue'
export default ({
    components: { Navbar }
})
</script>