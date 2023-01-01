import { EditableProfileCard } from '../../src/features/editableProfileCard';
import { TestProvider } from '@/shared/lib/tests/componentRender/componentRender';

/* eslint-disable indent */
describe('EditableProfileCard.cy.ts', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/', { fixture: 'profile.json' });
        cy.mount(
            <TestProvider>
                <EditableProfileCard id="1" />
            </TestProvider>,
        );
    });
});
