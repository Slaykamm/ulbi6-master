/* eslint-disable indent */
let profileId = '';

describe('Пол-ль заходит на ЭФ профиль', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      profileId = data.id;
      cy.visit(`/profile/${data.id}`);
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });
  it('успешная загрузка профиля', () => {
    cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
  });
  it('и редактирует профиль', () => {
    const newName = 'new';
    const newLastname = 'lastname2';
    cy.updateProfile(newName, newLastname);
    // cy.getByTestId('ProfileCard.firstname').should('have.value', newName);
    // cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
  });
});
