const add = (a,b) => a+b;

test('add 2 numbers', () => {
  const result = add(3,4);
  if(result !==7) {
    throw new Error(`added ${result}". Expected 7`)
  }
});