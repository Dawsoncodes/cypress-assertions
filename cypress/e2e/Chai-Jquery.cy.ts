describe("Article Thumbnail", () => {
  beforeEach(() => {
    cy.visit("/index.php?route=extension/maza/blog/home")
  })

  it("displays the correct image", () => {
    cy.get(".article-thumb .image img")
      .first()
      .then(($image) => {
        expect($image).to.have.attr("width", "420")
      })
  })

  it("displays the correct title", () => {
    cy.get(".title")
      .first()
      .then(($title) => {
        expect($title).to.have.css("color", "rgb(0, 0, 0)")
      })
  })

  it("button should have correct height and width", () => {
    cy.get(".icon.svg-icon").then(($icon) => {
      expect($icon).to.have.attr("style", "width:20px;height:20px;")
    })
  })
})
