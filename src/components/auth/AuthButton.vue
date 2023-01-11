<template lang="">
    <div>
        {{ user }}
    </div>
    <GoogleLogin :callback="callback" />
</template>
<script src="./index.ts" lang="ts"></script>