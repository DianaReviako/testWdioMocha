import { expect, browser } from '@wdio/globals';
import allureReporter from '@wdio/allure-reporter';

describe('Login as correct user', () => {
    it('Login with right password', async () => {
        const responsibleName = 'Diana Panda dadadada';
        allureReporter.addLabel('owner', responsibleName);


        allureReporter.addStep('Open the login page');
        await browser.url('https://the-internet.herokuapp.com/login');

        await expect($('//div[@class="example"]/h2')).toHaveText('Login Page');
        allureReporter.addStep('I fill in field with tomsmith');
        await $('//input[@id="username"]').setValue('tomsmith');
        allureReporter.addStep('I fill in field with password');
        await $('//input[@id="password"]').setValue('SuperSecretPassword!');
        allureReporter.addStep('I click the login button');
        await $('//button[@type="submit"]').click();

        await expect(browser).toHaveUrl('https://the-internet.herokuapp.com/secure');

        const text = (await $('//div[@id="flash"]').getText()).replace('\n×', '');
        allureReporter.addStep('I verify the login success message');
        expect(text).toBe('You logged into a secure area!');
    })
});
