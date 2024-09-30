function print() {
    console.log.apply(console, arguments)
}

// function pow(x, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= x
//     }

//     return result;
// }

function pow(x, n) {
    if (n==1) {
        return x;
    } else {
        return x * pow(x, n-1)
    }
}
print( pow(6, 3) )


// Example
let company = {
    sales: [
        {
            name: 'John',
            salary: 2000
        },
        {
            name: 'Farhad',
            salary: 3000
        }
    ],
    development: {
        sites: [
            {
                name: 'Pete',
                salary: 4000
            },
            {
                name: 'Nissan',
                salary: 2400
            }
        ],
        internals: [
            {
                name: 'Johir',
                salary: 3000
            },
            {
                name: 'Sunny',
                salary: 3400
            }
        ]
    }
}

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((prev, current)=> prev + current.salary, 0);
    } else {
        let sum = 0;
        for (let subdep of Object.values(department)) {
            sum += sumSalaries(subdep)
        }
        return sum;
    }
}

print( sumSalaries(company) )