describe('The Home Page', () => {
	it('successfully loads', () => {
		cy.visit('/debounce');
		cy.findByRole('heading', {
			name: /Start Wars character finder/i
		}).should('exist');
	});
});
