function countChar(text) {
    return text.length;
}

function countCharNoSpaces(text) {
    return text.replace(/\s/g, '').length;
}

function countWords(text) {
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

module.exports = {
    countChar,
    countCharNoSpaces,
    countWords,
    countSpaces,
    countSentences,
    countPara
};
