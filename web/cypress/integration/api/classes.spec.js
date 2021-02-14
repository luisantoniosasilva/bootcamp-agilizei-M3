/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

context('Classes endpoint', () => {
  it('POST - Cadastrar um novo professor', () => {
    // Request URL: http://localhost:3333/classes
    // Request Method: POST
    // Status Code: 201 Created

    cy.api({
      method: 'POST',
      url: `${Cypress.config().apiUrl}/classes`,
      body: {
        "name": "Agilizei Prof",
        "avatar": "https://pickaface.net/gallery/avatar/unr_fake_190524_1549_9fgji7.png",
        "whatsapp": "71985698547",
        "bio": "Lorem Ipsum Lorem Ipsum",
        "subject": "Química",
        "cost": 1000,
        "schedule": [
          {
            "week_day": 0,
            "from": "08:00",
            "to": "09:00"
          }
        ]
      }
    }).then((response) => {
      expect(response.status)
        .to.eq(201) //Created

      expect(response.body.length)
        .to.eq(1)

      expect(response.body[0])
        .to.have.property('class_id')
        .to.be.a('number')
        .satisfy((totalValue) => {
          return totalValue >= 0
      })

      expect(response.body[0])
        .to.have.property('week_day')
        .to.be.a('number')
        .equal(0)

      expect(response.body[0])
        .to.have.property('from')
        .to.be.a('number')
        .equal(480)

      expect(response.body[0])
        .to.have.property('to')
        .to.be.a('number')
        .equal(540)
    })
  });
});