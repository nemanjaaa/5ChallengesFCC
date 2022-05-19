function palindrome(str) {
    let word = []
    word = str.split(/[^a-z0-9]+/gi)
    console.log(word)
    let palindrome = []
    for (let i = word.length -1 ; i >= 0 ; i--) {
        for (let j = word[i].length -1 ; j >= 0 ; j--) {
            palindrome.push(word[i][j])
        }

    }
    word = word.join("").toLowerCase();
    palindrome = palindrome.join("").toLowerCase();
    if (word == palindrome) return true; else return false
  }
  
  console.log(palindrome("A man, a plan, a canal. Panama"));