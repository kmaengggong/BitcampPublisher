const emp = {
    empName: `빡빡이`,
    age: 29,
    hireDate: `2014-01-01`,
    birthDay: `1995-12-31` 
}

//const empName = emp.empName;
//const age = emp[`age`];
//console.log(empName, age);

const {empName, age, ...others} = emp;
console.log(empName, age, others);