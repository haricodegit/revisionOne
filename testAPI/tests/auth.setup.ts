import { test as setup } from '@playwright/test';
import user from '../.auth/user.json'
import fs from 'fs'

const authFile = '.auth/user.json'

setup('authentication' ,async({request}) => {
//   await page.goto("https://conduit.bondaracademy.com/")
//   await page.getByText('Sign in').click()
//   await page.getByRole('textbox', {name: 'Email'}).fill('pwapitest@email.com')
//   await page.getByRole('textbox', {name: 'Password'}).fill('Welcome@123')
//   await page.getByRole('button').click()
//   await page.waitForResponse('https://conduit-api.bondaracademy.com/api/tags')

//   await page.context().storageState({path: authFile})

    const response = await request.post('https://conduit-api.bondaracademy.com/api/users/login', {
        data: {"user":{"email":"pwapitest@email.com","password":"Welcome@123"}}
    })

    const responseBody = await response.json()
    const assessToken = responseBody.user.token

    user.origins[0].localStorage[0].value = assessToken
    fs.writeFileSync(authFile, JSON.stringify(user))

    process.env['ACCESS_TOKEN'] = assessToken
})