// add solution here
function theBeatlesPlay(musicians,instruments){
  var empty = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    empty.push(`${musicians[i]} plays ${instruments[i]}`)
  }
return empty
}
