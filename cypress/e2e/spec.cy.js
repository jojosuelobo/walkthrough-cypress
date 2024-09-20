/* 
Escreva um teste em Cypress que registre no console todas as opções dentro 
da lista suspensa de comandos e também seus hrefs válidos em https://example.cypress.io/. 
Além disso, verifique a existência de "Viewport" e "Network Requests".
*/

describe('desafio 1', () => {

  it('registra no console opções da lista', () => {

    cy.visit('https://example.cypress.io')

    cy.get('.dropdown-toggle').click();

    const optionsList = [];

    cy.get('.dropdown-menu li a').each(($el) => {
      const text = $el.text();
      const href = $el.attr('href');

      optionsList.push(`Opção: ${text}, Href: ${href}`);

    }).then(() => {

      for (let i = 0; i < optionsList.length; i++) {
        cy.log(optionsList[i]);
      }
      
    });
  })

  it('verifica a existência de Viewport e Network Requests', () => {
    cy.visit('https://example.cypress.io')

    cy.get('.dropdown-toggle').click();

    cy.get('.dropdown-menu li a').contains('Viewport').should('exist');
    cy.get('.dropdown-menu li a').contains('Network Requests').should('exist');
  });
})