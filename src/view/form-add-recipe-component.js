import { RecipeApiService } from "../recipe-api-service.js";

export class FormAddRecipeComponent {
    constructor(container, recipe, onSave) {
        this.container = container;
        this.recipe = recipe || { name: "", description: "" };
        this.onSave = onSave;

        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="modal">
                <form id="recipe-form">
                    <label>Name:</label>
                    <input type="text" id="recipe-name" value="${this.recipe.name}" required />

                    <label>Description:</label>
                    <textarea id="recipe-description" required>${this.recipe.description}</textarea>

                    <button type="submit">Save</button>
                </form>
            </div>
        `;

        document
            .getElementById("recipe-form")
            .addEventListener("submit", (e) => this.handleSubmit(e));
    }

    async handleSubmit(e) {
        e.preventDefault();

        const name = document.getElementById("recipe-name").value;
        const description = document.getElementById("recipe-description").value;

        if (this.recipe.id) {
            await RecipeApiService.updateRecipe(this.recipe.id, { name, description });
        } else {
            await RecipeApiService.addRecipe({ name, description });
        }

        this.onSave();
        this.container.innerHTML = "";
    }
}
