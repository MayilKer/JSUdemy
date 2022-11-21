"use strict";

class Rectangle{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }

    calcArea(){
        return this.height * this.width;
    }
}

const square = new Rectangle(10, 20);
const square2 = new Rectangle(20, 50);
console.log(square2.calcArea());
console.log(square.calcArea());


class ColoredRectangleWidthText extends Rectangle{
    constructor(height, width, text, bgColor){
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Text: ${this.text}, Color: ${this.bgColor}, ${this.height}, ${this.width}`);
    }
}

const div = new ColoredRectangleWidthText(25, 10, 'Hello', "Yellow");

div.showMyProps();
console.log(div.calcArea());

class Triangle{
    constructor(prop){
        this.height = prop.height;
    }

    calcArea(){
        return this.height * 0.5;
    }
}

const trio = new Triangle({
    height: 20
});

console.log(trio.calcArea());