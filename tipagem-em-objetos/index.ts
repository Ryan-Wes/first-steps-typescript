type Custumer =  {
    name: string;
    age: number;
}

function showCostumerInfo(custumer: Custumer) {
    console.log(`O nome do cliente é: ${custumer.name}`);
    console.log(`A idade do cliente é: ${custumer.age}`);  
}