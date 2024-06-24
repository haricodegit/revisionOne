import { test, expect } from '@playwright/test';
import tags from '../test-data/tags.json'

test.beforeEach(async({page}) => {
  await page.route("*/**/api/tags", async route => {
    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })

  await page.route('*/**/api/articles*', async route => {
    const response = await route.fetch()
    const responseBody = await response.json()
    responseBody.articles[0].title = "This is test title"
    responseBody.articles[0].description = "This is test description"

    await route.fulfill({
      body: JSON.stringify(responseBody)
    })
  })

  await page.goto("https://conduit.bondaracademy.com/")
})

test('has title', async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit")
  await page.waitForLoadState('networkidle')
  await expect(page.locator('.article-preview h1').first()).toContainText("This is test title")
  await expect(page.locator('.article-preview p').first()).toContainText("This is test description")
  await page.screenshot({path: "screenshot.png"})
});