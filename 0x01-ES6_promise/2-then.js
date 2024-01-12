function handleResponseFromAPI(promise) {
  return promise
    .then((value) => obj)
    .catch((response) => new Error("error"))
    .finally((value) => console.log("Got a response from the API "));
}


const promise = Promise.resolve();
handleResponseFromAPI(promise);