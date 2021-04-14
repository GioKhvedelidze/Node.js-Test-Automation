describe('Main Page', () => {
    it('Verify list items', () => {
        browser.url('/'); //Checking base URL

        const listExamples = $$("ul li"); //find multi Element

        expect(listExamples).toBeElementsArrayOfSize({gte: 1});
    });
});