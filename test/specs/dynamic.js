import { browser, expect } from '@wdio/globals';

describe('Click on Dynamic controls', () => {
    it('Dynamic', async () => {
        await browser.url('https://the-internet.herokuapp.com/');
        await $('//a[@href="/dynamic_controls"]').click();
        await $('//button[contains(text(), "Enable")]').click();
        const myInput = await $('//input[@type="text"]');
        await myInput.waitForEnabled();
        await myInput.setValue("TEXT !!!!!!!!!!!!!!!!!!!!")

        expect($('//p[@id="message"]')).toHaveText("It's enabled!");
    })
});
