class yukatechHomePage {
    elements = {
        findButton: (options) => cy.get(`p:contains("${options}")`),

    };

    clickButton(options) {
        this.elements.findButton(options).click();
    }

    getTimerValue(option) {
        // timer should be 25:00 minus the option
        const expectedTime = 25 * 60 - option;
        const minutes = Math.floor(expectedTime / 60);
        const seconds = expectedTime % 60;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
        const expectedTimeDisplay = `${minutes}:${formattedSeconds}`;

        console.log('expectedTimeDisplay' + expectedTimeDisplay);
        cy.get('.time-display').should('contain', expectedTimeDisplay);

    }

}

module.exports = {
    yukatechHomePage
}
