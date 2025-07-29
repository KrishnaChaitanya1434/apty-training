const nameArray = [
  ['K     K', 'R R R R', 'II', 'S S S S', 'H     H', 'N       N', '   A   '],
  ['K   K  ', 'R     R', 'II', 'S      ', 'H     H', 'N N     N', ' A   A '],
  ['K K    ', 'R R R R', 'II', 'S S S S', 'H H H H', 'N   N   N', 'A A A A'],
  ['K   K  ', 'R   R  ', 'II', '      S', 'H     H', 'N     N N', 'A     A'],
  ['K     K', 'R     R', 'II', 'S S S S', 'H     H', 'N       N', 'A     A']
]
let finalName = ''

for (let row of nameArray) {
  for (let letter of row) {
    finalName += letter + '   '
  }
  finalName += '\n'
}
console.log(finalName)
