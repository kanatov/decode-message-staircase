"use strict";

class Decoder {
    constructor(dom) {
        this.form = dom.form;
        this.message = dom.message;
        this.output = dom.output;

        const form = this.form;
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.decode(this.message.value);
        });
    }
    decode(message) {
        const stringsArr = message.split(/\r\n|\r|\n/);
        const dict = [];
        stringsArr.forEach(element => {
            const index = parseInt(element);
            if (index) {
                const word = element.split(/\s/)[1];
                if (word)
                    dict[index - 1] = word;
            }
        });

        let str = "";
        let tier, i;
        tier = i = 1;
        while (true) {
            if (dict[i - 1])
                str += dict[i - 1];
            tier++;
            i += tier;
            if (i <= dict.length)
                str += " ";
            else
                break;
        }

        this.showAnswer(str);
    }
    showAnswer(str) {
        this.output.textContent = str;
    }
}
