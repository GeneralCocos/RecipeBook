export const API_URL = "https://676269dd46efb37323747bd1.mockapi.io/recipe/recipe"; // Замените YOUR_API_URL на реальный URL вашего проекта в MockAPI

export const DEFAULT_RECIPE = {
    id: null,
    name: "",
    description: "",
    createdAt: new Date().toISOString()
};

export const ERROR_MESSAGES = {
    loadError: "Error loading recipes. Please try again later.",
    saveError: "Error saving the recipe. Please check your input.",
    deleteError: "Error deleting the recipe. Please try again later."
};

export const FIELD_LABELS = {
    name: "Recipe Name",
    description: "Description",
    createdAt: "Date Created"
};
