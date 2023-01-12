<template>
    <router-link :to="link">
        <div class="border rounded-lg p-4 flex flex-col w-full justify-between h-44 cursor-pointer">
            <span class="font-medium text-lg italic">{{board.name}}</span>
            <div class="flex flex-col items-end">
                <span>by. {{ board.users.name }}</span>
                <span class="text-sm">Created at: {{ createdAt }}</span>
            </div>
        </div>
    </router-link>
</template>

<script lang="ts">
import { computed } from 'vue';
import moment from 'moment';

export default ({
    props: ['board', 'link'],
    setup(props){
        const createdAt = computed(() => moment(props.board.created_at).format('D MMM YYYY hh:mm A'));

        return {
            createdAt
        }
    }
})
</script>