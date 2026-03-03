import { expect } from '@wdio/globals'

describe('UI Test Automation Playground', () => {
    it('Change button name', async () => {
        await browser.url('http://uitestingplayground.com/');
        await $('//a[text()="Text Input"]').click();
        await $('[id="newButtonName"]').setValue('New Button Name');
        await $('[id="updatingButton"]').click();

        await expect($('[id="updatingButton"]')).toHaveText('New Button Name');
    })
});
