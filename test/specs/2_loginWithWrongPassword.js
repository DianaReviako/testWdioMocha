import { browser, expect } from '@wdio/globals'

describe('Login as correct user', () => {
    it('Login with wrong password', async () => {
        await browser.url('https://the-internet.herokuapp.com/login');

        await expect($('//div[@class="example"]/h2')).toHaveText('Login Page');
        await $('//input[@id="username"]').setValue('tomsmith');
        await $('//input[@id="password"]').setValue('WrongPassword!');
        await $('//button[@type="submit"]').click();
        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/login');
        const text = (await $('//div[@id="flash"]').getText()).replace('\n×', '');

        expect(text).toHaveText('Your password is invalid!');
    })
});