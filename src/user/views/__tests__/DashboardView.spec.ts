import { render } from "@testing-library/vue";
import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../dashboard/DashboardView.vue";

vi.mock('../../services/UserFetch.query');

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
