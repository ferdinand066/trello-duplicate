import { useAuthStore } from "../stores/auth-store";

export const checkAuth = () => {
    const authStore = useAuthStore();
    const userId = authStore.id;
    if (!userId) throw new Error('Unauthorized!');

    return userId;
}