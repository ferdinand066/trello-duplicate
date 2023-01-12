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
    
    const fetchData = async () => {
      const result = await Promise.all([BoardHandlers.getBoards(), BoardHandlers.getCreatedBoards()]);
      boardStore.activeBoards = result[0];
      boardStore.createdBoards = result[1];
    }
    
    watch(authStore, () => {
      if (authStore.id) fetchData();
    }, { immediate: true});

    return {
      boardStore
    }
  }
})