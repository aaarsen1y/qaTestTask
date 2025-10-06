import { faker } from '@faker-js/faker';

export const userData = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email({provider: "google.com"}),
    mobileNumber: '1234567890',
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
}