import { MaybeRef, onMounted, readonly, ref, unref } from "vue";

import { useUserInjection } from "../../dependencies/useUserInjection";
import { User } from "../../models/entity";

export function useUserDetailController(id: MaybeRef<string>) {
    const { userQuery } = useUserInjection();

    const user = ref<User>()
    const isLoading = ref(false);

    onMounted(async () => {
        try {
            isLoading.value = true;
            user.value = await userQuery.getUser(unref(id));
        } catch (error) {
            console.warn(error);
        } finally {
            isLoading.value = false;
        }
    })

    return {
        user: readonly(user),
        isLoading: readonly(isLoading)
    };
}