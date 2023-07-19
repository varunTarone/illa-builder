import { test as setup } from "@playwright/test"

const authFile = "playwright/.auth/user.json"

setup("authenticate", async ({ page }) => {
  const API_URL = "https://cloud-api-test.illacloud.com"
  const postRequest = await fetch(`${API_URL}/supervisor/api/v1/auth/signin`, {
    method: "POST",
    body: JSON.stringify({
      email: "weichen@illasoft.com",
      password: "123456",
    }),
  })

  const token = postRequest.headers.get("Illa-Token")
  await page.goto(`/WWWWWTest/dashboard/apps?token=${token}`)

  await page.context().storageState({ path: authFile })
})
