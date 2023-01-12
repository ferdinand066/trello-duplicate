<template>
  <Layout>
    <div class="flex flex-col gap-8">
      <section id="active-board" class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Active Board</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <BoardCard v-for="board in boardStore.activeBoards" :board="board" />
        </div>
      </section>

      <section id="created-board" class="flex flex-col gap-4">
        <h2 class="text-2xl font-bold">Created Board</h2>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <BoardCard v-for="board in boardStore.createdBoards" :board="board" />
        </div>
      </section>
    </div>
  </Layout>
</template>
<script src="./script.ts" lang="ts"></script>
