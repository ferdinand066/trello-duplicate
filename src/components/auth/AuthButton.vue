<template>
    <GoogleLogin :callback="callback" />
  </template>
<script lang="ts">
import { ref } from "vue"
import { decodeCredential, googleAuthCodeLogin, GoogleLogin, googleOneTap, googleTokenLogin } from "vue3-google-login";
import UserHandlers from "../../handlers/UserHandlers";
import { useAuthStore } from '../../stores/auth-store';

export default ({
    setup() {
        const user = ref();
        const authStore = useAuthStore();
        const callback = async (response: any) => {
            console.log(response);
            
            const userData = decodeCredential(response.credential);
            user.value = userData;
            const result = await UserHandlers.createUser({email: user.value.email, name: user.value.name});
            authStore.id = result.id;
            authStore.googleUser = userData;
        };
        return {
            user,
            callback
        };
    },
    components: { GoogleLogin }
})
</script>