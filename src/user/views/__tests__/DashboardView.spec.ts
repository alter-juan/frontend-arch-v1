import { render } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import { faker } from '@faker-js/faker';
import { User } from "../../models/entity";
import { UserQueryRepository } from "../../services/UserQuery.repository";
import DashboardView from "../dashboard/DashboardView.vue";


const createFakeUserByName = (name: string): User => ({
  id: faker.number.int(),
  name: name,
  username: faker.internet.userName(),
  email: faker.internet.email(),
  phone: faker.phone.number(),
  website: faker.internet.url(),
})

const mocks = vi.hoisted(() => ({
  getUsers: vi.fn(() => 
    Promise.resolve(
      [
        createFakeUserByName('Leanne Graham'),
        createFakeUserByName('Ervin Howell'),
        createFakeUserByName('Clementine Bauch'),
      ]
    )
  ),
}))

vi.mock('../../services/UserFetch.query', () => ({
  UserFetchService: class implements UserQueryRepository {
    async getUsers() {
      return mocks.getUsers()
    }
    getUser(): Promise<User> {
      throw new Error("Method not implemented.");
    }
  }
}));

describe("[View] Given DashboardView", () => {

  it("Then it should render title", () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {path: '/', component: {}},
      ],
    })
    const { findByText } = render(DashboardView, {
      global: {
        plugins: [router],
      }
    });

    const nameA = findByText(/Leanne Graham/i);
    const nameB = findByText(/Ervin Howell/i);
    const nameC = findByText(/Clementine Bauch/i);
    
    expect(nameA).toBeTruthy();
    expect(nameB).toBeTruthy();
    expect(nameC).toBeTruthy();
  })
})
