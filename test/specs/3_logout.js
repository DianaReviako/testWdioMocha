import { browser, expect } from '@wdio/globals';

describe('Login as correct user and logout', () => {
    it('Logout', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await expect($('//div[@class="example"]/h2')).toHaveText('Login Page');
        await $('//input[@id="username"]').setValue('tomsmith');
        await $('//input[@id="password"]').setValue('SuperSecretPassword!');
        await $('//button[@type="submit"]').click();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');

        const loggedText = (await $('//div[@id="flash"]').getText()).replace('\n×', '');
        expect(loggedText).toBe('You logged into a secure area!');

        await $('//a[@href="/logout"]').click();
        const logoutText = (await $('//div[@id="flash"]').getText()).replace('\n×', '');
        expect(logoutText).toBe('You logged out of the secure area!');
    })
});
