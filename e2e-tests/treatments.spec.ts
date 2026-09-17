import { test, expect } from "@playwright/test";

test("apresenta tratamentos e navega para dependência química", async ({ page }) => {
  await page.addInitScript(() => localStorage.clear());
  await page.goto("/tratamentos");

  await expect(page.getByRole("button", { name: "Recusar" })).toBeVisible();
  await page.getByRole("button", { name: "Recusar" }).click();
  await expect(page.getByRole("heading", { name: "Tratamentos", exact: true })).toBeVisible();
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.getByText("Tratamentos individualizados para cada etapa da recuperação", { exact: true })).toBeVisible();

  await page.getByRole("link", { name: "Conheça os tratamentos" }).click();
  await expect(page.locator("#principais-tratamentos")).toBeVisible();
  await expect(page.getByRole("heading", { name: "Tratamentos especializados para diferentes necessidades" })).toBeVisible();
  const dependencyCard = page.getByRole("article").filter({ has: page.getByRole("heading", { name: "Dependência Química", exact: true }) });
  await expect(dependencyCard).toBeVisible();
  await expect(page.getByRole("link", { name: "Fale com nossa equipe" }).first()).toHaveAttribute("href", "https://wa.me/5521990716245");

  await dependencyCard.getByRole("link", { name: "Conheça o tratamento", exact: true }).click();
  await expect(page).toHaveURL(/\/tratamentos\/dependencia-quimica$/);
  await expect(page.getByRole("heading", { name: "Dependência Química", exact: true }).first()).toBeVisible();
});
