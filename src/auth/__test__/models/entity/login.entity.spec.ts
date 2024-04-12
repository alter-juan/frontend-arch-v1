import { faker } from "@faker-js/faker";

import { EmailError } from "../../../../common/errors";
import {
  ensureLoginPayloadIsValid,
  LoginPayload,
} from "../../../models/entity";

describe("Given a login entity and ensurer to entity", () => {
  it("When email is undefined, Then the ensurer must triggered and email error", () => {
    const payload = {
      email: undefined,
      username: faker.internet.userName(),
      password: faker.internet.password(),
    } as unknown as LoginPayload;

    expect(() => ensureLoginPayloadIsValid(payload)).toThrowError(EmailError);
  });

  it("When email is wrong, Then the ensurer must triggered and email error", () => {
    const payload: LoginPayload = {
      email: "wrong",
      password: faker.internet.password(),
    };

    expect(() => ensureLoginPayloadIsValid(payload)).toThrowError(EmailError);
  });

  it('When email is fine, Then ensurer don"t trigger error', () => {
    const payload: LoginPayload = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    expect(() => ensureLoginPayloadIsValid(payload)).not.toThrowError();
  });

  it("When password is wrong, Then the ensurer must triggered and password error", () => {
    const payload: LoginPayload = {
      email: faker.internet.email(),
      password: "123",
    };

    expect(() => ensureLoginPayloadIsValid(payload)).toThrowError(
      "Password is invalid"
    );
  });

  it('When password is fine, Then ensurer don"t trigger error', () => {
    const payload: LoginPayload = {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };

    expect(() => ensureLoginPayloadIsValid(payload)).not.toThrowError();
  });
});
