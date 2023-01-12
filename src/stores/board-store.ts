import { defineStore } from "pinia";
import { ref } from "vue";
import BoardHandlers from "../handlers/BoardHandlers";
import { Board } from "../types/board";

export const useBoardStore = defineStore("boards", () => {
  const activeBoards = ref<Board[] | null>(null);
  const createdBoards = ref<Board[] | null>(null);

  const reset = () => {
    activeBoards.value = null;
    createdBoards.value = null;
  };

  const fetchBoards = async () => {
    const boardResult = await Promise.all([
      BoardHandlers.getBoards(),
      BoardHandlers.getCreatedBoards(),
    ]);
    activeBoards.value = boardResult[0];
    createdBoards.value = boardResult[1];
  };

  return {
    activeBoards,
    createdBoards,
    reset,
    fetchBoards
  };
});
