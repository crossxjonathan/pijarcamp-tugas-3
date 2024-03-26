const palindrome = text => {
    let palindrom = text.split('').reverse().join('');

    if(text === palindrom) {
        return ("palindrome");
    } else {
        return ("bukan palindrome");
    }
};

console.log(palindrome('malam'));

// ======================================================================================

const reverseWords = senteces => {
    if(typeof senteces === "string") {
        const result = senteces.split(" ").reverse().join(" ");
        console.log(result);
    } else {
        console.log("cek kembali parameter pertama");
    }
};

reverseWords("Saya belajar JavaScript");
