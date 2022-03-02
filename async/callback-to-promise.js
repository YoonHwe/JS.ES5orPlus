//Callback Hell example
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(id === 'yoonhwe' && password === 'gj987456' ||
                id === 'superuser' && password === 'superuser'){
                    resolve(id);
                }
                else{
                    reject(new Error('Not found'));
                }
            }, 2000);
        })
        
    }
    getRoles(user){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(user === 'yoonhwe'){
                    resolve({
                        name: 'yoonhwe', role: 'admin'
                    });
                }
                else{
                    reject(new Error('No Access'));
                }
            }, 1000);
        })
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(error => console.log(error));
// userStorage.loginUser(
//     id,
//     password,
//     user => {
//         userStorage.getRoles(
//             user, 
//             userWithRole => {
//                 alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
//             },
//             error => {
//                 console.log(error);
//             }
//         );
//     },
//     error => {
//         console.log(error);
//     }
// )