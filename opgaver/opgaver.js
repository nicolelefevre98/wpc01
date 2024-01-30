var user = {
    first_name: "John",
    last_name: "Smith",
    age: "38",
    department: "Software"
  };
  
  console.log('\n# OUTPUT EXAMPLE 01');
  console.log(JSON.stringify(user));
  console.log('\n# OUTPUT EXAMPLE 02');
  console.log(JSON.stringify(user, null, 2));
  console.log('\n# OUTPUT EXAMPLE 03');
  console.log(user);

  