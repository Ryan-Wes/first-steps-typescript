import { paginationPerPage, Customer } from "./customer";

interface SpecialCustomer extends Customer {
    cuoponQuantidy: number
}

const specialCustomer: SpecialCustomer = {
    cuoponQuantidy: 10,
    name: "Maria",
    age: 32
}