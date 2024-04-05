import { useRouter } from "vue-router";
import { faker } from "@faker-js/faker";
import { createTestingPinia } from '@pinia/testing'
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/vue";

import LoginView from "../../../views/login/LoginView.vue";

vi.mock('vue-router', () => ({
    useRouter: vi.fn().mockReturnValue({
        push: vi.fn(),
    }),
}));

vi.mock('../../../services/authRest.command.ts');

describe('Given a view to login', () =>{
    beforeEach(() => {
        vi.clearAllMocks();
    });

    describe('When user is on login page', () => {
        it('Then user must see a title', () => {
            // Arrange
            render(LoginView, { global: { plugins: [createTestingPinia()]}});
            
            // Act
            const title = screen.getByRole("heading", {
                name: /Sign in/i,
            });

            // Assert
            expect(title).toBeTruthy();
        });

        it('Then user must see a form with email, password and submit button', () => {
            // Arrange
            render(LoginView);
            
            // Act
            const emailInput = screen.getByLabelText(/Email/i);
            const passwordInput = screen.getByLabelText(/Password/i);
            const usernameInput = screen.getByLabelText(/Username/i);
            const submitButton = screen.getByRole("button", { name: /Sign in/i });

            // Assert

            expect(emailInput).toBeTruthy();
            expect(passwordInput).toBeTruthy();
            expect(usernameInput).toBeTruthy();
            expect(submitButton).toBeTruthy();
        });
    });

    describe('When user fills the form and submits', () => {
        it('Then user must see a message that login was successful', async () => {
            // Arrange
            const user = userEvent.setup();
            render(LoginView, { global: { plugins: [createTestingPinia()]}});

            const emailInput = screen.getByLabelText(/Email/i);
            const passwordInput = screen.getByLabelText(/Password/i);
            const usernameInput = screen.getByLabelText(/Username/i);
            const submitButton = screen.getByRole("button", { name: /Sign in/i });

            // Act
            await user.type(emailInput, faker.internet.email());
            await user.type(usernameInput, faker.internet.userName());
            await user.type(passwordInput, faker.internet.password());

            await user.click(submitButton);

            // Assert
            expect(useRouter().push).toHaveBeenCalledWith("/");
        });
    });
});