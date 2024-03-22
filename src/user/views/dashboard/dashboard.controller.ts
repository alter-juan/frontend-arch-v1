import { onMounted, readonly, ref } from "vue";
import { User } from "../../models/entity";
import { useUserInjection } from "../../dependencies/useUserInjection";

export function useDashboardController() {
  const { userQuery } = useUserInjection();
  
  const users = ref<User[]>([]);
  const isLoading = ref(false);

  const getUsers = async () => {
    return await userQuery.getUsers();
  };

  onMounted(async () => {
    try {
      isLoading.value = true;
      users.value = await getUsers();
    } finally {
      isLoading.value = false;
    }
  });

  return {
    users: readonly(users),
    isLoading: readonly(isLoading),
  };
}
