import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import { yukatechHomePage } from '../../../pages/yukaTechHomePage'


const homePage = new yukatechHomePage();


Given("Navigate Yukatech timer page", () => {

  cy.navigateToUrl('/');

});

When("user click the {string} button", (options) => {

  homePage.clickButton(options);

});


And("user check the timer is 25:00", () => {

  cy.get('[class=\'time-display\']').should('contain', '25:00');

})
  When("timer start to count down {string} seconds", (options) => {
    const timer = options * 1000
    cy.wait(timer);

  });

  Then("Check timer countdown and check if time is correct {string} seconds", (option) => {

    homePage.getTimerValue(option);

  })


