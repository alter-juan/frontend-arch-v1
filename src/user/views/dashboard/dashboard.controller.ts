import { onMounted, readonly, ref } from "vue";

import { useUserInjection } from "../../dependencies/useUserInjection";
import { User } from "../../models/entity";

export function useDashboardController() {
  const { userQuery } = useUserInjection();
  
  const users = ref<User[]>([]);
  const user = ref<Partial<User>>();
  const isLoading = ref(false);

  const getUsers = async () => {
    return await userQuery.getUsers();
  };

  const getUser = async () => {
    const userIdStorage = sessionStorage.getItem('userId');
     if (!userIdStorage) throw new Error('User not found');    
    return await userQuery.getUserSocialMedia(userIdStorage);
  };

  onMounted(async () => {
    try {
      isLoading.value = true;
      user.value = await getUser();
    } finally {
      isLoading.value = false;
    }
  });

  return {
    users: readonly(users),
    user,
    isLoading: readonly(isLoading),
  };
}
