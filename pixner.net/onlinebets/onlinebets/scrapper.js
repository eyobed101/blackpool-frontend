const fs = require('fs');
const path = require('path');

const imagesFolderPath = 'assets/img/teams';
const outputFilePath = 'assets/img/logoNames.json';

function getFilesInFolder(folderPath) {
    try {
        const files = fs.readdirSync(folderPath);
        return files.filter(file => fs.statSync(path.join(folderPath, file)).isFile());
    } catch (error) {
        console.error('Error reading files:', error.message);
        return [];
    }
}

const imageFiles = getFilesInFolder(imagesFolderPath);
console.log('Image files:', imageFiles);

const imageNamesArray = imageFiles.map(file => path.parse(file).name);
console.log('Image names array:', imageNamesArray);

// Save the array to a JSON file
const jsonString = JSON.stringify(imageNamesArray, null, 2);
fs.writeFileSync(outputFilePath, jsonString);

console.log(`Image names saved to ${outputFilePath}`);
