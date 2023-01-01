import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User } from '@/entitles/User';
import { selectByTestId } from 'cypress/helpers/selectByTestId';
import cypress from 'cypress';

export const login = (
    username: string = 'testuser',
    password: string = '123',
) => {
    return;
};

export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text);
    cy.getByTestId('AddCommentForm.Button').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
