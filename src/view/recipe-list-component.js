import { RecipeApiService } from "../recipe-api-service.js";

export class RecipeListComponent {
    constructor(container, recipes) {
        this.container = container;
        this.recipes = recipes;
        this.render();
    }

    render() {
        this.container.innerHTML = this.recipes
            .map(
                (recipe) => `
                <div class="recipe-card">
                    <h2>${recipe.name}</h2>
                    <p>${recipe.description}</p>
                    <button onclick="window.dispatchEvent(new CustomEvent('editRecipe', { detail: ${JSON.stringify(
                        recipe
                    )} }))">Edit</button>
                    <button onclick="deleteRecipe(${recipe.id})">Delete</button>
                </div>
            `
            )
            .join("");

        window.deleteRecipe = async (id) => {
            await RecipeApiService.deleteRecipe(id);
            this.render();
        };
    }
}
