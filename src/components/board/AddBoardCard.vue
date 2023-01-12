<template lang="">
  <div
    v-if="!open"
    @click="open = !open"
    class="px-4 py-2 w-80 border rounded-lg flex flex-row gap-2 items-center shadow cursor-pointer self-start shrink-0"
  >
    <PlusIcon class="w-5 h-5 text-gray-800" />
    <span>Add Another List</span>
  </div>
  <form
    v-else
    class="p-2 w-80 border rounded-lg flex flex-col gap-1 self-start shrink-0"
    @submit.prevent="handleAddBoardList"
  >
    <input
      v-model="state.title"
      type="text"
      name="title"
      id="title"
      class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
      placeholder="Enter list title..."
    />
    <div class="flex flex-row gap-2 items-center">
      <button
        type="submit"
        class="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add list
      </button>
      <XMarkIcon
        @click="open = !open"
        class="w-5 h-5 text-gray-800 cursor-pointer"
      />
    </div>
  </form>
</template>
<script lang="ts">
import { ref, reactive } from "vue";
import { PlusIcon, XMarkIcon } from "@heroicons/vue/24/solid";
import { required } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import { useRoute } from "vue-router";
import BoardListHandlers from "../../handlers/BoardListHandlers";

export default {
  components: { PlusIcon, XMarkIcon },
  props: ['refetch'],
  setup(props) {
    const route = useRoute();
    const open = ref(false);

    const state = reactive({
      title: "",
    });

    const rules = {
      title: { required },
    };

    const v$ = useVuelidate(rules, state);

    const handleAddBoardList = async () => {
      const isFormCorrect = await v$.value.$validate();

      if (!isFormCorrect) return;
      const result = await BoardListHandlers.createBoardList(
        state,
        route.params.id as string
      );
      if (!result) return;

      open.value = false;
      await props.refetch();
    };

    return {
      open,
      handleAddBoardList,
      state
    };
  },
};
</script>
<style lang=""></style>
