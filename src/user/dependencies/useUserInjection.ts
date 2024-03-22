import { UserAuthorizer } from "../services/User.authorizer";
import { UserFetchService } from "../services/UserFetch.query";
import { UserQueryRepository } from "../services/UserQuery.repository";
import { Service } from "../types";

export function useUserInjection(): Service {
  const role = ["admin"];
  const userAuthorizer = new UserAuthorizer(role);
  const userQuery: UserQueryRepository = new UserFetchService(userAuthorizer);

  return {
    userQuery,
  };
}
