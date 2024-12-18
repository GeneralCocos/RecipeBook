export class LoaderComponent {
    constructor(container) {
        this.container = container;
        this.render();
    }

    render() {
        this.container.innerHTML = `<div class="loader">Loading...</div>`;
    }
}
