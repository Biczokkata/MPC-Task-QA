import { test, expect } from '@playwright/test';

test('EPAM Client Work Navigation Test', async ({ page }) => {
    // Step 1: Navigate to EPAM website
    await page.goto('https://www.epam.com/');

    // Step 2: Click on Services
    await page.click('text=Services');

    // Step 3: Click on Explore Our Client Work
    await page.click('text=Explore Our Client Work');

    // Step 4: Validate that Client Work text is visible
    const clientWorkVisible = await page.isVisible('text=Client Work');
    expect(clientWorkVisible).toBe(true);
});
