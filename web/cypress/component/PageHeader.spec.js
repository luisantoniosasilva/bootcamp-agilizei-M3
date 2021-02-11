/// <reference types="cypress" />

import React from 'react'
import PageHeader from '../../src/components/PageHeader'
import { mount } from '@cypress/react'
import { BrowserRouter as Router } from 'react-router-dom'

context('PageHeader component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/PageHeader/styles.css'
    it('deve ser renderizado com sucesso', () => {
        const title = "Que incrível que você quer dar aulas."
        const description = "O primeiro passo é preencher esse formulário de inscrição."

        // Renderizando o componente
        mount(
            <Router>
                <PageHeader
                    title={title}
                    description={description}
                />
            </Router>,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        // Mapeamento de elementos
        cy.get('strong').as('title')
        cy.get('p').as('description')
        cy.get('.page-header').as('header')

        // Assertivas
        cy.get('@title').should('have.text', title)
        cy.get('@description').should('have.text', description)
        cy.get('@header').then(($elemento) => {
            cy.log($elemento.css('background-color'))
            expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
        })

        // find e children
        // cy.get('.page-header').as('header')
        // cy.get('@header').find('strong').as('title')
        // cy.get('@header').children('p').as('description')

        // cy.get('@title').should('have.text', title)
        // cy.get('@description').should('have.text', description)

        // cy.get('@header').then(($elemento) => {
        //     cy.log($elemento.css('background-color'))
        //     expect($elemento.css('background-color')).to.be.equal('rgb(130, 87, 229)')
        // })
    });
});