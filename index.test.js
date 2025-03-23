const { countChar, countCharNoSpaces, countWords, countSpaces, countSentences, countPara, countEmojis } = require('./index');

test('countChar should return the correct number of characters', () => {
    expect(countChar('Hello World')).toBe(11);
    expect(countChar('')).toBe(0);
    expect(countChar('12345')).toBe(5);
});

test('countCharNoSpaces should return the correct number of characters excluding spaces', () => {
    expect(countCharNoSpaces('Hello World')).toBe(10);
    expect(countCharNoSpaces('')).toBe(0);
    expect(countCharNoSpaces('123 45')).toBe(5);
});

test('countWords should return the correct number of words', () => {
    expect(countWords('Hello World')).toBe(2);
    expect(countWords('')).toBe(0);
    expect(countWords('One two three')).toBe(3);
    expect(countWords('One two    three')).toBe(3);
});

test('countSpaces should return the correct number of spaces', () => {
    expect(countSpaces('Hello World')).toBe(1);
    expect(countSpaces('')).toBe(0);
    expect(countSpaces('One two three')).toBe(2);
});

test('countSentences should return the correct number of sentences', () => {
    expect(countSentences('Hello World. How are you?')).toBe(2);
    expect(countSentences('')).toBe(0);
    expect(countSentences('This is one sentence. This is another!')).toBe(2);
});

test('countPara should return the correct number of paragraphs', () => {
    expect(countPara('Hello World\n\nHow are you?')).toBe(2);
    expect(countPara('')).toBe(1);
    expect(countPara('Paragraph one.\n\nParagraph two.\n\nParagraph three.')).toBe(3);
});

test('countEmojis should return the correct number of emojis', () => {
    expect(countEmojis('Hello 😊')).toBe(1);
    expect(countEmojis('')).toBe(0);
    expect(countEmojis('😊😊😊')).toBe(3);
    expect(countEmojis('Hello 😊😊😊🔥🔥')).toBe(5);
});