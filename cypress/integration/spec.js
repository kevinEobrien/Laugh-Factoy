describe("Laugh factory", () => {
  it("Displays properly", () => {
    cy.visit("localhost:8080");
    cy.get("h1").should("have.text", "Welcome to the Laugh Factory")
  });
  it("Includes blank form inputs", () => {
    cy.get("#nameinput").should("be.empty")
    cy.get("#topicInput").should("be.empty")
    cy.get("textarea").should("be.empty")
  });
  it("Inlcudes a chart", () => {
    cy.get("#bar-chart").should("to.exist")
  });
})
