class UserAccount {
    constructor(name, age, balance, suspended) {
        this.name = name;
        this.age = age;
        this.balance = balance;
        this.suspended = suspended;
    }
}


const users = [
    new UserAccount("Alice", 30, 10, false),
    new UserAccount("Bob", 19, 15, false),
    new UserAccount("Charlie", 35, 20, false),
    new UserAccount("Eve", 17, -30, true),
    new UserAccount("David", 28, 50, true),
]


const filterUsers = users.filter(user => user.age > 18 && !user.suspended && user.balance > 0);
console.log(filterUsers);

const sumBalance = filterUsers.reduce((accumulator, user) => accumulator + user.balance, 0);
console.log(sumBalance); // Output: 45


const sortedUsers = users.sort((a, b) => a.balance - b.balance);
// console.log(sortedUsers); // Output: 
// [
//     UserAccount { name: 'Eve', age: 17, balance: -30, suspended: true },
//     UserAccount { name: 'Alice', age: 30, balance: 10, suspended: false },
//     UserAccount { name: 'Bob', age: 19, balance: 15, suspended: false },
//     UserAccount {
//       name: 'Charlie',
//       age: 35,
//       balance: 20,
//       suspended: false
//     },
//     UserAccount { name: 'David', age: 28, balance: 50, suspended: true }
//   ]