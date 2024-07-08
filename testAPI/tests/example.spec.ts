import { test, expect, request, Locator } from '@playwright/test';
import tags from '../test-data/tags.json'

test.beforeEach(async({page}) => {
  // await page.route("*/**/api/tags", async route => {
  //   await route.fulfill({
  //     body: JSON.stringify(tags)
  //   })
  // })

  // await page.route('*/**/api/articles*', async route => {
  //   const response = await route.fetch()
  //   const responseBody = await response.json()
  //   responseBody.articles[0].title = "This is test title"
  //   responseBody.articles[0].description = "This is test description"

  //   await route.fulfill({
  //     body: JSON.stringify(responseBody)
  //   })
  // })

  await page.goto("https://conduit.bondaracademy.com/")
})

test.skip('has title', async ({ page }) => {
  await expect(page.locator(".navbar-brand")).toHaveText("conduit")
  await page.waitForLoadState('networkidle')
  await expect(page.locator('.article-preview h1').first()).toContainText("This is test title")
  await expect(page.locator('.article-preview p').first()).toContainText("This is test description")
  // await page.screenshot({path: "screenshot.png"})
});

test.skip('delete article', async({page, request}) => {
  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {"user":{"email":"pwapitest@email.com","password":"Welcome@123"}}
  })

  const responseBody = await response.json()
  const assessToken = responseBody.user.token

  const articleresponse = await request.post('https://conduit-api.bondaracademy.com/api/articles/', {
    data: {"article":{"title":"This is article title","description":"This is Article summary","body":"This is Article body","tagList":["tag1"]},
    }, headers: {
      Authorization: `Token ${assessToken}`
    }
  })
  
  expect(articleresponse.status()).toEqual(201)

  await page.getByText('This is article title').click()
  // await page.getByRole('button').first().click()
  await page.locator('.btn-outline-danger').first().click()

  // const title: Locator = page.locator('.article-preview h1').first()
  // await page.waitForLoadState('networkidle')
  // await expect(title).not.toContainText('This is article title')
  // await expect(page.locator('')).not.toContainText('some text');
  await expect(page.locator('.article-preview h1').first()).not.toContainText('This is article title')
})

test('Create Article', async({page, request}) => {
  await page.getByText('New Article').click()
  await page.getByPlaceholder('Article Title').fill('Playwright is Awesome')
  await page.getByPlaceholder('What\'s this article about?').fill('Automation using JavaScript TypeScript')
  await page.getByPlaceholder('Write your article (in markdown)').fill('Automation is easy')
  await page.getByRole('button', {name: 'Publish Article'}).click()
  // await page.waitForLoadState('networkidle')

  const articleResponse = await page.waitForResponse('https://conduit-api.bondaracademy.com/api/articles/')
  const articleResponseBody = await articleResponse.json()
  // console.log(articleResponseBody);
  const slugId = articleResponseBody.article.slug

  await expect(page.locator('.article-page h1')).toContainText('Playwright is Awesome')



  await page.getByText('Home').click()
  await expect(page.locator('.article-preview h1').first()).toContainText('Playwright is Awesome')

  const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
    data: {"user":{"email":"pwapitest@email.com","password":"Welcome@123"}}
  })

  const responseBody = await response.json()
  const assessToken = responseBody.user.token

  const deleteresponse = await request.delete(`https://conduit-api.bondaracademy.com/api/articles/${slugId}`, {
    headers: {
      Authorization: `Token ${assessToken}`
  }
  })

  expect(deleteresponse.status()).toEqual(204)
})

test('Mock custom tags on Home page', async({page}) => {
  await page.route("*/**/api/tags", async route => {
    await route.fulfill({
      body: JSON.stringify(tags)
    })
  })
  await page.waitForLoadState('networkidle')
  await page.screenshot({path: 'tags.png'})

  await page.locator('.article-preview h1').first().click()
  await page.locator('a[href*="bondaracademy"]').first().click()
  await expect(page).toHaveTitle('Bondar Academy. Advance your QA career. Playwright Online Course.')
})