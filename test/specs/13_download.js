import { browser, expect } from '@wdio/globals';
import fs from 'fs';

describe('Steam', () => {
    it('Download installer of Stesm', async () => {
        await browser.url('https://store.steampowered.com/');
        await browser.maximizeWindow();
        await $('//a[contains(@href,"global-header") and contains(text(), "About")]').click();
        await $('//a[@class="about_install_steam_link"]').click();
        const isFileExists = fs.existsSync('C:\\Users\\d.revyako\\Projects\\testWdioMocha\\testDownload');
        expect(isFileExists).toBe(true);
    })
});