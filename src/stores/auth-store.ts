import { defineStore } from "pinia";
import { ref } from "vue";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const googleUser = ref(null);
    const id = ref<string | null>(null);

    const reset = () => {
        id.value = null;
        googleUser.value = null;
    }

    return {
        googleUser,
        id,
        reset
    }
  },
  { persist: true }
);
