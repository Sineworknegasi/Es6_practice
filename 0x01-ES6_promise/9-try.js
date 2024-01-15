function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push("Guardrail was processed");
  }

  return queue
}

console.log(
  guardrail(() => {
    return divideFunction(10, 2);
  })
);
console.log(
  guardrail(() => {
    return divideFunction(10, 0);
  })
);
