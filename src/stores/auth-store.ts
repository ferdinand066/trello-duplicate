import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () : { googleUser: any, id : string | null } => ({googleUser: null, id: null}),
    persist: true
})