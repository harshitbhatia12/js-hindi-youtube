const accountId = 144553
let accountEmail = "harshit@gmail .com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

/* accountId = 2 not allowed */

accountEmail = "har@gmail.com"
accountPassword = "52175"
accountCity = "Hisar"

/* Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])