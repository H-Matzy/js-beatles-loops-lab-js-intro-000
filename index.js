// add solution here
function theBeatlesPlay(musicians,instruments){
  var empty = []
  for (let i = 0, 1 = musicians.length; i < 1; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return empty
}
function theBeatlesPlay(musicians, instruments) {
  const arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return arr
}
