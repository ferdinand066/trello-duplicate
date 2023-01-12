import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import AddBoardCard from "../../components/board/AddBoardCard.vue";
import BoardListItem from "../../components/board/BoardListItem.vue";
import Layout from "../../components/Layout.vue";
import BoardHandlers from "../../handlers/BoardHandlers";

export default {
  components: { Layout, AddBoardCard, BoardListItem },
  setup() {
    const route = useRoute();
    const { id } = route.params;

    const board = ref();
    const fetchData = async () => {
      const result = await BoardHandlers.getOneBoardById(id as string);
      console.log(result);
      board.value = result;
    };

    watch(
      { id },
      () => {
        if (id) fetchData();
      },
      { immediate: true }
    );

    return {
      board,
      fetchData
    };
  },
};
