import { faker } from "@faker-js/faker";

export class UserFactory {
  constructor() {}

  newMockJwt() {
    return {
      id: +faker.random.numeric(3),
      email: faker.internet.email(),
      name: faker.name.firstName(),
    };
  }

  newMockUser({} = {}) {
    let id = +faker.random.numeric(3);
    let email = faker.internet.email();
    let name = faker.name.firstName();
    let password = faker.random.alphaNumeric(5);

    return {
      id,
      email,
      name,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    };
  }
}
