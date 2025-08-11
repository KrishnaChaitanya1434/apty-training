document.getElementById('countButton').addEventListener('click', function() {
    const resultDisplay = document.getElementById('resultDisplay')
    resultDisplay.innerHTML = ''

    const parentElements = document.body.children

    Array.from(parentElements).forEach(parent => {
        const nestedElements = parent.querySelectorAll('*') 
        const nestedCount = nestedElements.length

        const result = document.createElement('div')
        result.textContent = `${parent.tagName} has ${nestedCount} nested elements.`
        resultDisplay.appendChild(result)
    })
})
