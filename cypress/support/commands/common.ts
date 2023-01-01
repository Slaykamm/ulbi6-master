import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User } from '@/entitles/User'
import { selectByTestId } from 'cypress/helpers/selectByTestId';
import cypress from 'cypress';

export const login = (username: string = 'testuser', password: string = '123') => {
    cy.log('bo111dy',)
    console.log('bo111dy',)
    return cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {

        window.localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(body));

        return body;
    });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId))
}

declare global {
    namespace Cypress {
        interface Chainable {
            login(email?: string, password?: string): Chainable<User>
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}