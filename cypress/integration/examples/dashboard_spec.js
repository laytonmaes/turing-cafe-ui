describe("Dashboard User Flow", () => {
    beforeEach(() => {
        cy.fixture("get-res.json").then(res => {
            cy.intercept(
                "GET", 
                "http://localhost:3001/api/v1/reservations",
                res
                )
        })
        cy.visit("http://localhost:3000/")
    })

    it("displays a page with a form and four inputs", () => {
        cy.get("input").first()
        .should("have.value", "")
        .should("have.attr", "name").and("include", "name")
        cy.get("input").first().type("stuff")
        cy.get("input").first().should("have.value", "stuff")
        cy.get("input").eq(1)
        .should("have.value", "")
        .should("have.attr", "name").and("include", "date")
        cy.get("input").eq(2)
        .should("have.value", "")
        .should("have.attr", "name").and("include", "time")
        cy.get("input").eq(3)
        .should("have.value", "")
        .should("have.attr", "name").and("include", "number")
    })

    it("displays cards based on fetch", () => {
        cy.get(".card").should("have.length", 3)
        cy.get(".card h2").first().should("have.text", "Christie")
        cy.get(".card h3").first().should("have.text", "12/29")
        cy.get(".card h3").eq(1).should("have.text", "7:00")
        cy.get(".card h3").eq(2).should("have.text", "12")

        cy.get(".card h2").eq(1).should("have.text", "Leta")
        cy.get(".card h3").eq(3).should("have.text", "4/5")
        cy.get(".card h3").eq(4).should("have.text", "7:00")
        cy.get(".card h3").eq(5).should("have.text", "2")
    })

    it("should create and display a new card with input data", () => {
        cy.get("input").eq(0).type("Maxwell")
        cy.get("input").eq(1).type("11/14")
        cy.get("input").eq(2).type("9:00")
        cy.get("input").eq(3).type("6")

        cy.get("form button").click()

        cy.get(".card h2").eq(3).should("have.text", "Maxwell")
        cy.get(".card h3").eq(9).should("have.text", "11/14")
        cy.get(".card h3").eq(10).should("have.text", "9:00")
        cy.get(".card h3").eq(11).should("have.text", "6")
    })
})