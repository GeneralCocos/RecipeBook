export class HeaderComponent {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <nav>
                <h1>Virtual Recipe Book</h1>
                <button id="add-recipe-btn">Add Recipe</button>
            </nav>
        `;

        document
            .getElementById("add-recipe-btn")
            .addEventListener("click", () => this.onAddRecipe());
    }

    onAddRecipe() {
        const event = new CustomEvent("addRecipe");
        window.dispatchEvent(event);
    }
}
