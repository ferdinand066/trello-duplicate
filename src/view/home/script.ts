import { ref, watch } from "vue";
import Layout from '../../components/Layout.vue';
import BoardCard from '../../components/board/BoardCard.vue';
import BoardHandlers from "../../handlers/BoardHandlers";
import { useAuthStore } from "../../stores/auth-store";
import { useBoardStore } from "../../stores/board-store";

export default ({
  components: { Layout, BoardCard },
  setup() {
    const authStore = useAuthStore();
    const boardStore = useBoardStore();
    
    watch(authStore, () => {
      if (authStore.id) boardStore.fetchBoards();
    }, { immediate: true});

    return {
      boardStore
    }
  }
})