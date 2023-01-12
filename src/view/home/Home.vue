<template>
  <Layout>
    <div
      class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-1 flex flex-col items-start overflow-auto"
    >
      <div
        v-if="
          boardStore?.activeBoards?.length || boardStore?.createdBoards?.length
        "
        class="flex flex-col gap-8"
      >
        <section id="active-board">
          <div
            v-if="boardStore?.activeBoards?.length > 0"
            class="flex flex-col gap-4"
          >
            <h2 class="text-2xl font-bold">Active Board</h2>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <BoardCard
                v-for="board in boardStore.activeBoards"
                :board="board"
                :link="'/board/' + board.id"
              />
            </div>
          </div>
          <div v-else>No Active Board!</div>
        </section>

        <section id="created-board">
          <div
            v-if="boardStore?.createdBoards?.length > 0"
            class="flex flex-col gap-4"
          >
            <h2 class="text-2xl font-bold">Created Board</h2>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <BoardCard
                v-for="board in boardStore.createdBoards"
                :board="board"
                :link="'/board/' + board.id"
              />
            </div>
          </div>
          <div v-else>No Created Board!</div>
        </section>
      </div>
      <div v-else>Please login to show your data!</div>
    </div>
  </Layout>
</template>
<script src="./script.ts" lang="ts"></script>
