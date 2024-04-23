"use strict";

class Decoder {
    constructor(dom) {
        this.form = dom.form;
        this.message = dom.message;
        this.output = dom.output;

        const form = this.form;
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.parse();
        });
    }
    parse() {
        this.drawer();
    }
    drawer() {
        this.output.textContent = this.message.value;
    }
}
