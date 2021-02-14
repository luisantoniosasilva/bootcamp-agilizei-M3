/// <reference types="cypress" />

import React from 'react'
import Input from '../../src/components/Input'
import { mount } from '@cypress/react'
import { BrowserRouter as Router } from 'react-router-dom'

context('Input component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Input/styles.css'
    it('deve ser renderizado com sucesso', () => {
        const name = "name"
        const label = "Nome Completo"

        // Renderizando o componente
        mount(
            <Router>
                <Input
                    name={name}
                    label={label}
                />
            </Router>,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        cy.get('.input-block [for=name]').as('title')
        cy.get('.input-block #name').as('inputArea')

        cy.get('@title')
            .should('have.text', label)

        cy.get('@inputArea')
            .should('not.be.disabled')
    });
});