const capitalize = (word)=>{ 
    let splitted = word.split('')
    let vowels = ['a', 'e', 'o', 'u', 'i']
    let caps = splitted.map(i => vowels.includes(i) ? i.toUpperCase() : i)
    return caps.join('')
  }
  