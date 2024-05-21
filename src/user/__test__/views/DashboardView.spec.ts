import { createRouter, createWebHistory } from "vue-router";
import { render } from "@testing-library/vue";

import DashboardView from "../../views/dashboard/DashboardView.vue";

vi.mock('../../services/userFetch.query.ts');


describe("[View] Given DashboardView", () => {

  // TODO: adjust the test
  it.skip("Then it should render title", () => {
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
