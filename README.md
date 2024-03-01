# characters-counter

<code><img height="30" src="https://img.shields.io/badge/NPM-111111?style=for-the-badge&logo=npm&logoColor=#c63635"></code>
<code><img height="30" src="https://img.shields.io/badge/JavaScript-111111?style=for-the-badge&logo=javascript&logoColor=F7DF1E"></code>


# Installation

```shell
npm i characters-counter
```

# Usage

Use by calling functions:
- `countChar` -> Counts total characters (including spaces).
- `countCharNoSpaces` -> Counts total characters (excluding spaces).
- `countWords` -> Counts total words.
- `countSpaces` -> Counts total spaces.
- `countSentences` -> Counts total Sentences.
- `countPara` -> Counts total Paragraphs.


```js
const charCount = require('characters-counter');

const inputText = `
    This is a dummy lorem-ipsum text:

    NEW DELHI: Ireland on Friday created history, claiming their first-ever Test win against Afghanistan in Abu Dhabi
    
    The maiden Test win for Ireland came in their 8th game in the traditional format.
    
    Captain Andy Balbirnie led from the front with an undefeated 58 as Ireland won the one-off Test by 6 wickets in the final session on the third day, successfully chasing down a modest target of 111.
`;

console.log("Total characters:", charCount.countChar(inputText));
console.log("Total characters (excluding spaces):", charCount.countCharNoSpaces(inputText));
console.log("Total words:", charCount.countWords(inputText));
console.log("Total spaces:", charCount.countSpaces(inputText));
console.log("Total sentences:", charCount.countSentences(inputText));
console.log("Total paragraphs:", charCount.countPara(inputText));
```

<!--
## Using with HTML user text-input fields.

- Example HTML file:

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Statistics</title>
</head>
<body>
    <h1>Text Statistics</h1>
    <textarea id="textInput" rows="10" cols="50" placeholder="Enter your text here..."></textarea>
    <br>
    <button id="calculateBtn">Calculate Statistics</button>
    <div id="statisticsResult"></div>

    <script src="script.js"></script>
</body>
</html>
```

- Your JavaScript File `script.js`:

```js
const charCount = require('characters-counter');

document.getElementById('calculateBtn').addEventListener('click', () => {
    const inputText = document.getElementById('textInput').value;
    const statisticsResult = document.getElementById('statisticsResult');

    const totalCharacters = charCount.countChar(inputText);
    const totalCharactersNoSpaces = charCount.countCharNoSpaces(inputText);
    const totalWords = charCount.countWords(inputText);
    const totalSpaces = charCount.countSpaces(inputText);
    const totalSentences = charCount.countSentences(inputText);
    const totalParagraphs = charCount.countPara(inputText);

    statisticsResult.innerHTML = `
        <p>Total characters: ${totalCharacters}</p>
        <p>Total characters (excluding spaces): ${totalCharactersNoSpaces}</p>
        <p>Total words: ${totalWords}</p>
        <p>Total spaces: ${totalSpaces}</p>
        <p>Total sentences: ${totalSentences}</p>
        <p>Total paragraphs: ${totalParagraphs}</p>
    `;
});
```

-->
