export class EmptyRecipeComponent {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <div class="empty-state" style="text-align: center; margin: 2rem;">
                <h2>No Recipes Found</h2>
                <p>Add a new recipe to get started!</p>
            </div>
        `;
    }
}
