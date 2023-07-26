function hasMoreVowels(word){
    let vowels = 'aeiou';
    return [...word].filter(elem => vowels.indexOf(elem.toLowerCase()) > -1).length >= 2;
}

console.log(hasMoreVowels('yes'))
console.log(hasMoreVowels('eloo'))
console.log(hasMoreVowels('DevMountain'))

