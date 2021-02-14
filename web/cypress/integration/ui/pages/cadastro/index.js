/// <reference types="cypress" />

const el = require('./elements').ELEMENTS
var Chance = require('chance')
var chance = new Chance()

class Cadastro {
    acessarPagina() {
        cy.get(el.link_darAulas).click()
    }

    preencherFormulario() {
        cy.get(el.input_name).type(chance.name())
        cy.get(el.input_avatar).type(
            chance.avatar(
                { protocol: 'https' }
            )
        )
        cy.get(el.input_whatsapp).type(chance.phone())
        cy.get(el.textArea_bio).type("Bio")

        cy.get(el.select_subject).select("Matemática")
        cy.get(el.input_cost).type(
            chance.integer(
                { min: 1, max: 999 }
            )
        )

        cy.get(el.select_weekDay).select("3")
        cy.get(el.input_timeFrom).type('08:00')
        cy.get(el.input_timeTO).type('23:00')
    }

    submeterCadastro() {
        cy.get(el.buttom_submit).click()
    }

    validarRedirecionamentoAposCadastro() {
        cy.url().should('eq', Cypress.config().baseUrl + '/')
    }

    validarAlertDeCadastro() {
        cy.on('window:alert', (str) => {
            expect(str).to.equal("Cadastro realizado com sucesso!")
        })
    }

} export default new Cadastro();