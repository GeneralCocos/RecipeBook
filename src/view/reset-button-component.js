export class ResetButtonComponent {
    constructor(container, onReset) {
        this.container = container;
        this.onReset = onReset;
        this.render();
    }

    render() {
        this.container.innerHTML = `
            <button id="reset-btn">Reset</button>
        `;

        document.getElementById("reset-btn").addEventListener("click", this.onReset);
    }
}
