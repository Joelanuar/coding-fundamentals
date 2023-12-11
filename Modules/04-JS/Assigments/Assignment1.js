function sum() {
    let result = 0;

    for (let i = 0; i < arguments.length; i++) {
        result = result + arguments[i];
    }

    console.log(result);
}

sum(1, 2, 3, 4);
sum(1, -2, 3, -4);
