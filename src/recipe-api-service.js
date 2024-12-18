import { API_URL } from "./const.js";

export const RecipeApiService = {
    async getRecipes() {
        const response = await fetch(API_URL);
        return response.json();
    },

    async addRecipe(recipe) {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe),
        });
        return response.json();
    },

    async updateRecipe(id, recipe) {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(recipe),
        });
        return response.json();
    },

    async deleteRecipe(id) {
        await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    },
};
