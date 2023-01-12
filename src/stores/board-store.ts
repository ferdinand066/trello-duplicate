import { defineStore } from 'pinia';
import { Board } from '../types/board';

export const useBoardStore = defineStore('boards', {
    state: () : { activeBoards: Board[] | null, createdBoards: Board[] | null } => ({activeBoards: null, createdBoards: null})
})