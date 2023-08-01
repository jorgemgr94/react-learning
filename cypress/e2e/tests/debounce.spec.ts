describe('The Home Page', () => {
	it('successfully loads', () => {
		cy.visit('/debounce');
		cy.findByRole('heading', {
			name: /Books finder/i
		}).should('exist');
	});
});
