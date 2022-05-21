function rot13(str) {
    let arr = str.split("")
    let decoded = []
    for (let i of arr) {
        if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90 || i.charCodeAt() >= 97 && i.charCodeAt() <= 122 ) {
            if (i.charCodeAt() >= 78) {
                decoded.push(String.fromCharCode(i.charCodeAt() - 13))
            } else decoded.push(String.fromCharCode(i.charCodeAt() + 13))
        } else decoded.push(i)
    }
    return decoded.join("")
} 
rot13("SERR PBQR PNZC");