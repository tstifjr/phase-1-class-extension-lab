// Your code here

class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        return this.array.reduce((tot, side) => tot + side)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            //check sides for valid length;
          if(((this.array[0]+this.array[1]) > this.array[2]) && ((this.array[0]+this.array[2]) > this.array[1]) && ((this.array[1]+this.array[2]) > this.array[0])){
            return true;
          }
          else return false;
        }
        else return false;
    }
}

class Square extends Polygon {
    get area(){
        return this.array[0] * this.array[1];
    }

    get isValid(){
        if(this.countSides === 4){
            //recursive check
           if (this.array[0] === this.array[1] && this.array[1] === this.array[2] && this.array[2] === this.array[3]){
            return true;
           }
           else return false;
        }
        else return false;
    }
}
let tri = new Triangle([1, 1, 3]);
console.log(tri.isValid)