const users = {
  Seenu: { address: { city: "Hyderabad" } },
  Ramu: { address: { city: "Mumbai" } },
  Krishna: { address: { city: "Chennai" } },
};

const default_city = "Pune";

document.getElementById("input").addEventListener("submit",function(event) {
  event.preventDefault();
  const userName = document.getElementById("name").value.trim();
  const resultElement = document.getElementById("output");
  let city;

  resultElement.textContent = "";

  try {
    city = users[userName].address.city;
    resultElement.textContent = `City: ${city}`;
  } catch (error) {
    resultElement.textContent = `Error: User "${userName}" not found or data is missing.`;
  } finally {
    if (!city) {
      resultElement.textContent += ` Default City: ${default_city}`;
    }
  }
});
