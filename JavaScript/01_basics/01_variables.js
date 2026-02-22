const accountId = 123456789;
let email = "prithvi@nawadiya.com";
var password = "123456";
accountCity = "Surat";

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

let accountState;

console.log(email);

email = "prithvi_nawadiya.com";
password = "123456789";
accountCity = "bangaluru";

console.table([accountId, email, password, accountCity, accountState])