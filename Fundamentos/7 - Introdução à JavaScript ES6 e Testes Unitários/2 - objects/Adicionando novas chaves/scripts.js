const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

function objectNew(a, b, c) {
  a[b] = c;
}
objectNew(customer, 'lastName', 'Matias');

console.log(customer)