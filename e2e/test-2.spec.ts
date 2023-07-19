import { expect, test } from "@playwright/test"

test("test", async ({ page }) => {
  // Recording...
  await page.locator(".css-4vxcoi > svg").first().click()
  await page.locator(".css-1ppx7yw").click()
  await page.getByPlaceholder("Search").click()
  await page.getByPlaceholder("Search").fill("List")
  await page.getByText("Tutorial").click()
  await page.getByText("Fork").first().click()
  await page.getByRole("heading", { name: "Dashboard" }).click()
  await page.locator(".css-fzs4ty").first().click()
  await page
    .locator("div")
    .filter({ hasText: /^# DashboardString# DashboardCopyIcon$/ })
    .nth(1)
    .click()
  await page
    .locator("div:nth-child(4) > .css-env1z2 > .css-cr1ewl > .css-1eeklcd")
    .click()
  await page
    .locator(".css-5koe1h > .cm-editor > .cm-scroller > .cm-content")
    .fill("1231231234354656867978023423413123213123")
  await page
    .getByText(
      "Tooltip1231231234354656867978023423413123213123String123123123435465686797802342",
    )
    .click()
})
