import { RecipePresenter } from "./presenter/recipe-presenter.js";
import { HeaderComponent } from "./view/header-component.js";

// Точка входа приложения
document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const header = document.getElementById("header");

    // Инициализация заголовка и презентера
    new HeaderComponent(header);
    new RecipePresenter(app);
});