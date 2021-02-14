/// <reference types="cypress" />

import React from 'react'
import { mount } from '@cypress/react'
import { BrowserRouter as Router } from 'react-router-dom'
import Textarea from '../../src/components/Textarea'

context('Textarea component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Textarea/styles.css'
    it('deve ser renderizado com sucesso', () => {
        const name = "bio"
        const label = "Biografia"

        mount(
            <Router>
                <Textarea
                    name={name}
                    label={label}
                />
            </Router>,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        cy.get('.textarea-block [for=bio]').as('title')
        cy.get('.textarea-block #bio').as('textArea')

        cy.get('@title')
            .should('have.text', label)
            .should('have.css', 'color', 'rgb(106, 97, 128)')

        cy.get('@textArea')
            .should('have.css', 'resize', 'vertical')
    });
});