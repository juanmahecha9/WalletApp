const test = (control) => {
  let object = {
    message: "Esta funcioon testea que se reciban los datos con un req.body",
    data: control,
  };
  console.log("");
  console.log("************");
  console.log(object);
  console.log("************");
};

module.exports =  test;