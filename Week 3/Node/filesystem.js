const fs = require('fs');

// Read File
fs.readFile('example.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(`File content: ${data}`);
})

// Write File
const content = "This is a new file!";

fs.writeFile('output.txt', content, 'utf-8', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Data written to file successfully!');
})

// Check if Files/Directories exist
const filePath = 'example.txt';

if (fs.existsSync(filePath)) {
    console.log('File is existing!');
} else {
    console.log('File is not existing!');
}

// Create Directories (folders)
// fs.mkdir('new_directory', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log('Directory created successfully!');
// })

// List files in a directory
const directoryPath = 'new_directory';

fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Files in the directory:', files);
})

// Remove file
fs.unlink('output.txt', (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('File removed!');
})

// Remove directories (empty)
// fs.rmdir('new_directory', (err) => {
//     if (err) {
//         console.error(err);
//         return;
//     }

//     console.log('Folder removed!');
// })

// Remove directories and contained files
fs.rmSync('new_directory', {recursive: true, force: true}, (err) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Folder and files are removed!');
})