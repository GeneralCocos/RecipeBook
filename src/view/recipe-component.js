export class RecipeComponent {
    constructor(container, recipe) {
        this.container = container;
        this.recipe = recipe;
        this.render();
    }

    render() {
        this.container.innerHTML += `
            <div class="recipe-card">
                <h2>${this.recipe.name}</h2>
                <p>${this.recipe.description}</p>
                <button onclick="window.dispatchEvent(new CustomEvent('editRecipe', { detail: ${JSON.stringify(
                    this.recipe
                )} }))">Edit</button>
                <button onclick="window.dispatchEvent(new CustomEvent('deleteRecipe', { detail: '${this.recipe.id}' }))">Delete</button>
            </div>
        `;
    }
}
