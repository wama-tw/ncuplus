describe("home page", () => {
  it("click NCU+", () => {
    cy.visit("/");
    cy.contains("NCU+").click();

    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("click 登入", () => {
    cy.visit("/");
    cy.contains("登入").click();

    cy.url().should("contain", "/login");
  });

  it("cover background image change", () => {
    cy.visit("/");
    const prev = cy.get(".bg-cover").invoke("attr", "style");
    cy.wait(10000);

    expect(cy.get(".bg-cover").invoke("attr", "style")).to.not.eq(prev);
  });
});
