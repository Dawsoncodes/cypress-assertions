describe("Header Tests", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Logo is visible and links to the homepage", () => {
    cy.get("#entry_217821 a").then(($logoLink) => {
      assert.strictEqual(
        $logoLink.attr("href"),
        "https://ecommerce-playground.lambdatest.io/index.php?route=common/home"
      )
      assert.strictEqual($logoLink.attr("title"), "Poco Electro")
    })

    cy.get("#entry_217821 img").then(($logoImg) => {
      assert.strictEqual($logoImg.attr("alt"), "Poco Electro")
    })
  })

  it("Search bar is visible and functional", () => {
    cy.get('#search input[type="text"]').then(($searchInput) => {
      assert.strictEqual(
        $searchInput.attr("placeholder"),
        "Search For Products"
      )
    })

    cy.get('#search button[type="submit"]').then(($searchBtn) => {
      assert.strictEqual($searchBtn.text().trim(), "Search")
    })
  })
})
