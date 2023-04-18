describe("Header component", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should display the logo with the right dimension values", () => {
    cy.get("#main-header")
      .find(".entry-design.design-image figure a img")
      .should("have.attr", "alt", "Poco Electro")
      .and("have.attr", "height", "50")
  })

  it("should display the correct text for the search category dropdown", () => {
    cy.get("#main-header")
      .find(".entry-widget.widget-search .dropdown-toggle")
      .should("have.text", "All Categories")
  })

  it("should display the correct placeholder text for the search input", () => {
    cy.get("#main-header")
      .find('.entry-widget.widget-search input[name="search"]')
      .should("have.attr", "placeholder", "Search For Products")
  })
})
