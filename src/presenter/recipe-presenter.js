import { RecipeApiService } from "../recipe-api-service.js";
import { RecipeListComponent } from "../view/recipe-list-component.js";
import { FormAddRecipeComponent } from "../view/form-add-recipe-component.js";
import { LoaderComponent } from "../view/loader-component.js";
import { EmptyRecipeComponent } from "../view/empty-recipe-component.js";

export class RecipePresenter {
    constructor(container) {
        this.container = container;

        this.init();
        this.setupEventListeners();
    }

    // Инициализация
    async init() {
        this.renderLoader();

        try {
            const recipes = await RecipeApiService.getRecipes();
            this.renderRecipes(recipes);
        } catch (error) {
            console.error("Error loading recipes:", error);
            this.renderError();
        }
    }

    // Отображение списка рецептов
    renderRecipes(recipes) {
        this.container.innerHTML = ""; // Очищаем контейнер

        if (recipes.length === 0) {
            new EmptyRecipeComponent(this.container);
        } else {
            new RecipeListComponent(this.container, recipes);
        }
    }

    // Показать форму добавления/редактирования
    openForm(recipe = null) {
        const modalRoot = document.getElementById("modal-root");
        new FormAddRecipeComponent(modalRoot, recipe, this.reloadRecipes.bind(this));
    }

    // Обновить список рецептов
    async reloadRecipes() {
        this.renderLoader();
        try {
            const recipes = await RecipeApiService.getRecipes();
            this.renderRecipes(recipes);
        } catch (error) {
            console.error("Error reloading recipes:", error);
            this.renderError();
        }
    }

    // Удаление рецепта
    async deleteRecipe(id) {
        this.renderLoader();
        try {
            await RecipeApiService.deleteRecipe(id);
            this.reloadRecipes();
        } catch (error) {
            console.error("Error deleting recipe:", error);
            this.renderError();
        }
    }

    // Отобразить индикатор загрузки
    renderLoader() {
        this.container.innerHTML = "";
        new LoaderComponent(this.container);
    }

    // Отобразить сообщение об ошибке
    renderError() {
        this.container.innerHTML = `<h2 style="color: red;">Error loading recipes. Please try again later.</h2>`;
    }

    // Настроить слушатели событий
    setupEventListeners() {
        // Открыть форму добавления рецепта
        window.addEventListener("addRecipe", () => this.openForm());

        // Открыть форму редактирования рецепта
        window.addEventListener("editRecipe", (e) => this.openForm(e.detail));

        // Удалить рецепт
        window.addEventListener("deleteRecipe", (e) => this.deleteRecipe(e.detail));
    }
}
