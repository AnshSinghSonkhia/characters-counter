function countChar(text) {
    return text.length;
}

function countCharNoSpaces(text) {
    return text.replace(/\s/g, '').length;
}

function countWords(text) {
    if (text.trim() === '') {
        return 0;
    }
    const words = text.trim().split(/\s+/);
    return words.length;
}



function countSpaces(text) {
    return text.split(' ').length - 1;
}

function countSentences(text) {
    return (text.match(/[.!?]+/g) || []).length;
}

function countPara(text) {
    return (text.trim().split(/\n\s*\n/)).length;
}

function countEmojis(text) {
    const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F1E6}-\u{1F1FF}]/gu;
    return (text.match(emojiRegex) || []).length;
}

// Exporting functions as named exports:
module.exports.countChar = countChar;
module.exports.countCharNoSpaces = countCharNoSpaces;
module.exports.countWords = countWords;
module.exports.countSpaces = countSpaces;
module.exports.countSentences = countSentences;
module.exports.countPara = countPara;
module.exports.countEmojis = countEmojis;