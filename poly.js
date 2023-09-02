
class polygon{
    constructor(sides){
        this.sides=sides;
    }
    getPerimeter() {
        var Perimeter=0;
        this.sides.map((s)=>{
            Perimeter=s+Perimeter;
        })
        return Perimeter ;
    }}
class square extends polygon{
constructor(sideLength){
super([sideLength,sideLength,sideLength,sideLength])

this.length=sideLength
}
getArea(){
var Area=this.length**2;
return Area;
}
toString(){

    return `square with side length=${this.length} area=${this.getArea()}`;}

}

class rectangle extends polygon{
    constructor(width,hieght){
    super([width,width,hieght,hieght])

    this.width=width;
    this.hieght=hieght
    }
    getArea(){
    var Area=this.width*this.hieght
    return Area;
    }

    toString(){

        return `Rectangle with width=${this.width}, height=${this.hieght}, area=${this.getArea()}`;}
    
    
    
    }

    class circle extends polygon{
        constructor(radius){
        super([2*Math.PI*radius])

        this.radius=radius;
        }
        getArea(){
        var Area=Math.PI*(this.radius)**2;
        return Area;
        }
        
        toString(){

            return `circle with radius=${this.radius} area=${this.getArea()}`;}
        
        }


        class triangle extends polygon{
            constructor(side1,side2,side3){
            super([side1, side2, side3]);

            this.side1 = side1;
            this.side2 = side2;
            this.side3 = side3;
            }
            getArea(){

            var s = (this.side1+this.side2+this.side3)/ 2;
            var Area=Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
            return Area;
            }
            toString(){

                return `Triangle with sides ${this.side1}, ${this.side2}, ${this.side3}, area=${this.getArea()}`;
            
            }

            }


var rectangleIn = new rectangle(5, 10);
var squareIn = new square(5);
var circleIn = new circle(7);
var triangleIn = new triangle(3, 4, 5);

console.log(rectangleIn.toString());
console.log(squareIn.toString());
console.log(circleIn.toString());
console.log(triangleIn.toString());