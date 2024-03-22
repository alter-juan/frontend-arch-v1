import { inject, onMounted, readonly, ref } from "vue";
import type { UserQueryRepository } from "../../services/UserQuery.repository";
import { User } from "../../models/entity";

export function useDashboardController() {
  const { queryService } = inject("services") as {
    queryService: UserQueryRepository;
  };
  const users = ref<User[]>([]);
  const isLoading = ref(false);

  const getUsers = async () => {
    return await queryService.getUsers();
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
