function makeArray<T>(item: T): T[] {
    return [item];
}

const numbers = makeArray(10);
console.log(numbers);



const names = makeArray("Ricardo")
console.log(names);