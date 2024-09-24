//bit-wise operator
//read ,write ,execute
//00000100
//00000010
//00000001

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission;
console.log(myPermission);

let message = (myPermission & readPermission) ? 'yes' : 'no';