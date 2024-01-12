function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: "photo-profile-1",
  });
}

function createUser() {
  return Promise.resolve({
    firstName: "Guillaume",
    lastName: "Salva",
  });
}

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
  .then((value) => console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`))
  .catch(() => console.log('Signup system offline'))
  }
  

handleProfileSignup();
