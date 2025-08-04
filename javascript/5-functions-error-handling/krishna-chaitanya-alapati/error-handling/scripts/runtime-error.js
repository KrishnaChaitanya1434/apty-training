const users = {
    "Seenu": { "address": { "city": "Hyderabad" } },
    "Ramu": { "address": { "city": "Mumbai" } },
    "Krishna": { "address": {"city": "Chennai"}}
}


function getCity() {
    const userName = document.getElementById('name').value.trim()
    const output = document.getElementById('output')

    try {
        const city = users[userName].address.city
        output.textContent = `City: ${city}`
    } catch (error) {
        output.textContent = `Error: User "${userName}" not found or data is missing.`
    }
}