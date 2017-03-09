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


