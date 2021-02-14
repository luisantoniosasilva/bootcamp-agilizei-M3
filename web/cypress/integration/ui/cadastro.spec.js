/// <reference types="cypress" />

import cadastro from './pages/cadastro'

context('Dar aulas', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Cadastro de novo professor com sucesso', () => {
        // ACESSAR PÁGINA DE CADASTRO
        cadastro.acessarPagina()

        // REALIZAR CADASTRO
        cadastro.preencherFormulario()
        cadastro.submeterCadastro()

        // ASSERTIVAS
        cadastro.validarRedirecionamentoAposCadastro()
        cadastro.validarAlertDeCadastro()
    })
});