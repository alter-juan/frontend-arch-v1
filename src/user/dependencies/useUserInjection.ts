import { UserAuthorizer } from "../services/user.authorizer";
import { UserFetchService } from "../services/userFetch.query";
import { UserQueryRepository } from "../services/user.repository";
import { Service } from "../types";

export function useUserInjection(): Service {
  const role = ["admin"];
  const userAuthorizer = new UserAuthorizer(role);
  const userQuery: UserQueryRepository = new UserFetchService(userAuthorizer);

  return {
    userQuery,
  };
}
