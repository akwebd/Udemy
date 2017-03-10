//1 scope variables

    // let b = 2;

    // {
    //     let b = 3;
    //     console.log(b);//output 3
    // }
    // console.log(b);//output2

//2 constant scopping

    // const a = 5;

    //a = 3;//this will give an error as const was tried to change

    //if non primitive variable is used,
    //content of that variable can be changed even if it is a cont

//3 template literals

    // let a = "hello";
    // let b = "world";
    // console.log(`${a} ${b}`);

//4 spread operator

    // const a = [3, 4, 5];
    // console.log([1, 2, ...a, 6]);
    
    // function butter(...b) {
    //     let a = [1, 2, 3, ...b];
    //     return a;
    //     }

    // butter(4, 5, 6);

//5.1 destructuring assignments: array

    // let c = [1, 2];
    // let [a, b] = c;
    // console.log(a, b);

    // //it can also be used to split array
    // let d = [1, 2, 3, 4, 5];
    // let [e, ...f] = d;
    // console.log(e, f);

//5.2 destructuring assignments: objects

    // let wizard = { magical: true, power: 10 };
    // let { power, magical} = wizard;
    // //it gets value by key
    // console.log(power, magical);

    // let magical2, power2;

    // let ranger = { magical2: true, power2: 10 };
    // console.log(magical2, power2);
    // ({ magical2, power2 } = ranger);
    // //above without parentheses is a block
    // console.log(magical2, power2);
    
//6. Arrow functions

    // function blastoff(){
    //     console.log('3...2...1... blastoff!');
    // }
    
    // blastoff();

    // setTimeout(() => {
    //     console.log('3...2...1... blastoff!');
    // }, 1000);

    // const blastoff = () => {
    //     console.log('3...2...1... blastoff!');
    // }
    // blastoff();
    
    // //Arrow functions are anonymous by default
    // //Arrow functions don't create 'this' variable

    // this.a = 25;
    // let print = function(){
    //     this.a = 50;
    //     console.log('this.a', this.a);
    // }
    // print();

    // let arrowPrint = () => {
    //     console.log('this.a in arrowPrint', this.a);
    // }
    // arrowPrint();
//7. Map method
    // let points = [10, 20, 30];

    // points = points.map(point => point + 1);

    // console.log(points);
    
//8. Filter method

    
    // let isPassing = (grade) => {
    //     return grade >= 70;
    // }

    // let scores = [90, 85, 67, 71, 70, 50, 92];

    // let passing = scores.filter(isPassing);

    // console.log(passing);

    // let passing2 = scores.filter(score => score >= 70);

    // console.log(passing2);
    // let points = [10, 20, 30];

    // points = points.map(point => point + 1);

    // console.log(points);
    
//9.1 Modules: exporting variables

    // import { students, total } from './students';
    // console.log(students, total);
    
//9.2 Modules: exporting expressions and by default
    // import { multiply, add} from './calculator';    
    // //import multiply from './calculator';
    // //export default allows omitting curly braces but it can only be used on a single object or primitive
    // console.log(add, multiply);
        
//10 ES6 classes

    // class Entity{
    //     constructor(name, height){
    //         this.name = name;
    //         this.height = height;
    //     }

    //     greet(){
    //         console.log(`Hi I'm ${this.name} from middle earth`);
    //     }
    // }

    // let Merry = new Entity("Merry", 4.6);
    // Merry.greet();

//10.1 Inheritance in ES6 classes
    import Entity from './entity';
    class Hobbit extends Entity{
        constructor(name, height){
            super(name, height);//super will take constructor from parent
        }
        //methods simply override parent methods
        greet(){
            console.log(`Hello! I'm ${this.name} from the Shire!`);
        }
    }

    let Frodo = new Hobbit("Frodo Baggins", 4.5);
    Frodo.greet();




