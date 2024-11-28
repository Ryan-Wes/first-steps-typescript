// type TCustomer = {
//     name: string;
//     age: number;
// }

interface ICustomer {
    name: string;
    age: number;
}

interface IAdress {
    street: string;
}

interface ICustomerProfile extends ICustomer, IAdress {}

const newProfile: ICustomerProfile = {
    name: "Ricardo",
    age: 35,
    street: "Rua XYZ"
}




type TCustomer = {
    name: string;
    age: number;
}

type TAdress = {
    street: string;
}

type TCustomerProfile = TCustomer & TAdress;

const newProfile2: TCustomerProfile = {
    name: "Ricardo",
    age: 35,
    street: "Rua XYZ"
}