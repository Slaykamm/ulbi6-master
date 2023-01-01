import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { User } from '@/entitles/User';
import { selectByTestId } from 'cypress/helpers/selectByTestId';
import cypress from 'cypress';

export const updateProfile = (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'asdasd' },
        body: {
            id: '4',
            first: 'test',
            lastname: 'testlast',
            age: '101',
            currency: 'RUB',
            countrt: 'Russian Federation',
            city: 'Saint-Petersburg',
            username: 'test user',
            avatar: 'https://www.pngmart.com/files/12/Hello-Summer-Word-Transparent-Background.png',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstname: string, lastname: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
