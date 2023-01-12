<template lang="">
    <div
    class="px-4 py-2 w-80 border rounded-lg flex flex-row gap-2 items-center cursor-pointer self-start shrink-0"
  >
    <h4 class="font-medium">{{ boardList.title }}</h4>
  </div>
</template>
<script lang="ts">
export default {
    props: ['boardList']
}
</script>