function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({
      firstName: firstName,
      lastName: lastName,
    });
  });
}

function uploadPhoto(fileName) {
  return Promise.reject(Error(`${fileName} cannot be processed`));
}


function handleProfileSignup(firstName, lastName, fileName) {
    return Promise.all([signUpUser(firstName, lastName), uploadPhoto(fileName)]);

}


console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));