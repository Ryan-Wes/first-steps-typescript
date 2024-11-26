// enum gender {
//     M = 'Masculino',
//     F = 'Feminino'
// }

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
}

const ok = StatusCodes.OK; //200
const indexOk = StatusCodes['OK']; //200
const stringBadRequest = StatusCodes [400]; //BadRequest