import { faker } from "@faker-js/faker"
import { UserQueryRepository } from "../user.repository"
import { User } from "../../models/entity";

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
}

const createFakeUserByName = (name: string): User => ({
  id: faker.number.int(),
  name: name,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  website: faker.internet.url(),
})
