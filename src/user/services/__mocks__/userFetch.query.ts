import { faker } from "@faker-js/faker";

import { User } from "../../models/entity";
import { UserQueryRepository } from "../user.repository";

export class UserFetchService implements UserQueryRepository {
  getUsers() {
    return Promise.resolve(
      [
        createFakeUserByName('Leanne Graham'),
        createFakeUserByName('Ervin Howell'),
        createFakeUserByName('Clementine Bauch'),
      ]
    )
  }

  getUser(): Promise<User> {
    throw new Error("Method not implemented.");
  }

  getUserSocialMedia(id:string): Promise<Partial<User>> {
    return Promise.resolve(
      {
       id,
       email: faker.internet.email(),
      }
    );
  }
}

const createFakeUserByName = (name: string): User => ({
  id: faker.number.int().toString(),
  name: name,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  website: faker.internet.url(),
})
