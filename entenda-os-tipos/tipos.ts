// TIPOS DE PRIMITIVOS

let idades: number[] = [12, 22, 39];
let nomes: string[] = ['Roberto', 'Ricardo', 'Raphael'];

let idade: Array<number> = [12, 22, 39]

let obj: any = {x:0};


// TIPOS DE OBJETOS

function imprimirCoordenadas(pt: {x: number; y: number}) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);    
}

imprimirCoordenadas({ x: 3, y: 7 });

// let obj: {x: number; y: number} = { x: 3, y: 7};