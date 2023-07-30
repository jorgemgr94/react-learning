describe('The Home Page', () => {
	it('successfully loads', () => {
		cy.visit('/');
		cy.findByRole('heading', {
			name: /Vite [+] React/i
		}).should('exist');
	});
});
