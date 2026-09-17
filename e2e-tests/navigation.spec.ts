import { test, expect } from "@playwright/test";

test("navega pelo menu mobile e confirma um contato sem envio real", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.addInitScript(() => localStorage.clear());
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Cuidado, acolhimento e tranquilidade em meio à natureza." })).toBeVisible();
  await expect(page.getByText("ATENDIMENTO 24 HORAS", { exact: true }).first()).toBeVisible();
  await page.getByRole("button", { name: "Recusar" }).click();
  await page.getByRole("link", { name: "Conheça o Espaço Village" }).click();
  await expect(page).toHaveURL(/\/a-clinica$/);
  await page.goBack();

  await page.getByRole("button", { name: "Abrir menu" }).click();
  await page.getByRole("navigation", { name: "Menu mobile" }).getByRole("link", { name: "Contato" }).click();
  await expect(page).toHaveURL(/\/contato$/);
  await expect(page.getByRole("heading", { name: "Estamos aqui para orientar você." })).toBeVisible();

  await page.getByRole("textbox", { name: "Nome" }).fill("Visitante do site");
  await page.getByRole("textbox", { name: "Telefone" }).fill("(21) 99999-0000");
  await page.getByRole("textbox", { name: "E-mail" }).fill("visitante@example.com");
  await page.getByRole("textbox", { name: "Assunto" }).fill("Informações");
  await page.getByRole("textbox", { name: "Mensagem" }).fill("Gostaria de falar com a equipe.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Enviar mensagem" }).click();
  await expect(page.getByRole("heading", { name: "Mensagem recebida localmente" })).toBeVisible();
  await expect(page.getByText(/não envia nem armazena dados/i)).toBeVisible();
});
