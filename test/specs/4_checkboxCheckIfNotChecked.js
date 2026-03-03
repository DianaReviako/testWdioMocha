import { browser, expect } from '@wdio/globals';

describe('Checkbox', () => {
    it('Check if not checked', async () => {
        await browser.url('https://the-internet.herokuapp.com/');

        await expect($('//div[@id="content"]//h2')).toHaveText('Available Examples');
        await $('//a[@href="/checkboxes"]').click();

        const firstCheckbox = await $('//input[@type="checkbox"][1]');
        const secondCheckbox = await $('//input[@type="checkbox"][2]');

        if (!(await firstCheckbox.isSelected())) {
            await firstCheckbox.click();
        }

        if (await secondCheckbox.isSelected()) {
            await secondCheckbox.click();
        }

        expect(await firstCheckbox.isSelected()).toBe(true);
        await expect(firstCheckbox).toBeSelected();
        expect(await secondCheckbox.isSelected()).toBe(false);
    })
});