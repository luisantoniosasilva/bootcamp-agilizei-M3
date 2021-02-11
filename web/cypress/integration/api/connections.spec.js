/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Connections endpoint', () => {
    it('GET - Obter total de conexões realizadas', () => {
        // http://localhost:3333/connections
        // GET
        // Status Code: 200 OK
        cy.api({
            method: 'GET',
            url: `${Cypress.config().apiUrl}/connections`
        }).then((response) => {
            // STATUS
            expect(response.status).to.eq(200)

            // DURAÇÃO
            expect(response.duration).lessThan(20)
            expect(response.duration).lt(20) //similar a lessThan

            // RESPOSTA
            expect(response.body)
                .to.have.property('total')
                .to.be.a('number')
                .greaterThan(5)

            expect(response.body.total)
                .an('number')
                .satisfy((totalValue) => {
                    return totalValue >= 5
                })

            // Content-Type: application/json; charset=utf-8
            expect(response.headers)
                .to.have.property('content-type')
                .an('string')
                .equal('application/json; charset=utf-8')
        })
    });
});