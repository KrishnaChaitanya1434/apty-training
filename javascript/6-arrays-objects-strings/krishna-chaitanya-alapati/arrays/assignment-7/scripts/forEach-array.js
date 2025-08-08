function introduceUsers() {
  const input = document.getElementById("userInput").value;
  let users;

  try {
    users = JSON.parse(input);
  } catch (e) {
    document.getElementById("result").innerText =
      "Invalid JSON format. Please provide a valid array of user objects.";
    return;
  }

  if (!Array.isArray(users)) {
    document.getElementById("result").innerText =
      "Please provide an array of user objects.";
    return;
  }

  let output = "";
  users.forEach((user) => {
    if (user.name && user.age) {
      const message = `${user.name} is ${user.age} years old.\n`;
      output += message;
    } else {
      output += "Invalid user object: Missing name or age.";
    }
  });

  document.getElementById("result").innerText = output;
}
