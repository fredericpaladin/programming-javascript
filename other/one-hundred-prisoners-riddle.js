class Box {
    constructor(number, value) {
        this.number = number;
        this.value = value;
    }

    print() {
        console.log(`Box #${this.number} contains the number ${this.value}`);
    }
}

class Prison {
    constructor(length) {
        // Generate random numbers
        let random = [];
        while (random.length < length) {
            const r = Math.floor(Math.random() * length) + 1;
            if (random.indexOf(r) === -1)
                random.push(r);
        }

        // Create the boxes and assign the randon number in them
        this.boxes = [];
        for (let i = 0; i < length; i++) {
            this.boxes.push(new Box(i + 1, random[i]));
        }
    }

    showBoxes() {
        this.boxes.forEach((box) => {
            box.print();
        })
    }
}

module.exports = Prison;