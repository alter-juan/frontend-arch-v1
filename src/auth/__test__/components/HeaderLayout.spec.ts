import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/vue";

import HeaderLayout from "@/common/components/HeaderLayout.vue";

const mocks = vi.hoisted(() => ({
  useAuthStore: vi.fn(),
}));

vi.mock("@/auth/store/auth.store.ts", () => ({
  useAuthStore: mocks.useAuthStore,
}));

describe("[Component] Given HeaderLayout", () => {
  it("When the user is not logged in, Then it should render sign in button", () => {
    mocks.useAuthStore.mockReturnValueOnce({ isAuthenticated: false });
    render(HeaderLayout);

    const loginButton = screen.getByRole("button", { name: /sign in/i });

    expect(loginButton).toBeTruthy();
  });

  it("When the user is not logged in and clicks sign in button, Then it should call login service", async () => {
    const user = userEvent.setup();
    const loginSpy = vi.fn();
    mocks.useAuthStore.mockReturnValueOnce({
      isAuthenticated: false,
      login: loginSpy,
    });
    render(HeaderLayout);

    const loginButton = screen.getByRole("button", { name: /sign in/i });
    await user.click(loginButton);

    expect(loginSpy).toHaveBeenCalled();
  });

  it("When the user is logged in, Then it should render sign out button", () => {
    mocks.useAuthStore.mockReturnValueOnce({ isAuthenticated: true });
    render(HeaderLayout);

    const logoutButton = screen.getByRole("button", { name: /sign out/i });

    expect(logoutButton).toBeTruthy();
  });

  it("When the user is logged in and clicks sign out button, Then it should call logout service", async () => {
    const user = userEvent.setup();
    const logoutSpy = vi.fn();
    mocks.useAuthStore.mockReturnValueOnce({
      isAuthenticated: true,
      logout: logoutSpy,
    });
    render(HeaderLayout);

    const logoutButton = screen.getByRole("button", { name: /sign out/i });
    await user.click(logoutButton);

    expect(logoutSpy).toHaveBeenCalled();
  });
});
