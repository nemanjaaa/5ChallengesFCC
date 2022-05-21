function convertToRoman(num) {
    let stringNum = num.toString()
    let romanNumerals = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M",
        2000: "MM",
        3000: "MMM"
    }
    if (stringNum.length == 1 && romanNumerals.hasOwnProperty(stringNum)) {
        return romanNumerals[stringNum]
    } else if (stringNum.length == 2 && stringNum.endsWith("0") && romanNumerals.hasOwnProperty(stringNum)) {
        return romanNumerals[stringNum]
    } else if (stringNum.length == 2) {
        let newString = romanNumerals[stringNum[0] + 0] + romanNumerals[stringNum[1]]
        return newString
    } else if (stringNum.length == 3) {
        let newString = romanNumerals[stringNum[0] + 0 + 0] + (parseInt(stringNum[1]) > 0 ? romanNumerals[stringNum[1] + 0] : "") + (parseInt(stringNum[2]) > 0 ? romanNumerals[stringNum[2]] : "")
        return newString
    } else if (stringNum.length == 4) {
        let newString = romanNumerals[stringNum[0] + 0 + 0 + 0] + (parseInt(stringNum[1]) > 0 ? romanNumerals[stringNum[1] + 0 + 0] : "") + (parseInt(stringNum[2]) > 0 ? romanNumerals[stringNum[2] + 0] : "") + (parseInt(stringNum[3]) > 0 ? romanNumerals[stringNum[3]] : "")
        return newString
    }
   }
   
convertToRoman(144);