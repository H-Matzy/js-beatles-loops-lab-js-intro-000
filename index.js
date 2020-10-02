// add solution here
function theBeatlesPlay(mus,ins){
  var empty = []
  for (let i = 0, 1 = mus.length; i < 1; i++) {
    empty.push(''${mus[i]} plays ${ins[i]}'')
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
