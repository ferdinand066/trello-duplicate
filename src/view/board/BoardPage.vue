import { PlusIcon } from '@heroicons/vue/24/outline';

<template>
  <Layout v-if="board">
    <div
      class="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 flex-1 flex flex-col items-start overflow-auto"
    >
      <div class="flex flex-col gap-4 items-start">
        <div class="flex flex-col gap-4">
          <h2 v-if="board" class="text-3xl font-bold">{{ board.name }}</h2>
          <div class="flex flex-row gap-4 overflow-x-auto flex-1 items-stretch">
            <BoardListItem
              v-if="board?.board_lists"
              v-for="boardList in board.board_lists"
              :boardList="boardList"
            />
            <BoardListItem
              v-if="board?.board_lists"
              v-for="boardList in board.board_lists"
              :boardList="boardList"
            />
            <AddBoardCard :refetch="fetchData" />
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script src="./script.ts" lang="ts"></script>
