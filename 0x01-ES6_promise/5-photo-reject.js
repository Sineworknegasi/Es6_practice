function uploadPhoto(fileName) {
    return Promise.reject(Error(`${fileName} cannot be processed`))
  }

console.log(uploadPhoto('guillaume.jpg'));
