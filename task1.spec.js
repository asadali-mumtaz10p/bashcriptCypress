/// <reference types="cypress"/>

const { exec } = require('child_process');


it('should open the following file',() => {


    cy.exec('bash ./cypress/fixtures/test1.sh', {failOnNonZeroExit: false}).then((result) =>
    (error, stdout, stderr) => {
        cy.log(stdout);
        cy.log(stderr);
        if (error !== null) {
            cy.log(`exec error: ${error}`);

        }
    })

})
