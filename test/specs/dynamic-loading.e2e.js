describe('Dynamic Loading Page', () => {
    it('wait for the hiddent element to show', () => {
        const btnStart = $("#start button");
        const textFinish = $("#finish h4");
        const elLoading = $("#loading");

        browser.url('/dynamic_loading/1');
        
        btnStart.click();

        elLoading.waitForDisplayed();

        elLoading.waitForDisplayed({reverse: true});

        expect(textFinish.getText()).toEqual("Hello World!");
    });
});