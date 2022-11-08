const fs = require('fs');
// Function writeToFile
function writeToFile(fileName, content) {
    const name = fileName.toLowerCase().split(' ').join('_')
    fs.writeFile(`./dist/${name}.html`, content)
};
// Function that generates the Employee HTML file based on the answers 
function generateEmployeeHTML(data) {
    return `
    <div>
    <div class="item">
        <div class="item-header">
            <div>
                ${data.getName()}
            </div>
            <div>
                ${data.getRole()}
            </div>
        </div>

        <div class="item-content">
            <div>
                <div>ID:</div>
                <div>${data.getId()}</div>
            </div>
            <div>
                <div>Email:</div>
                <div>${data.getEmail()}</div>
            </div>
            <div>
                <div>Special ID:</div>
                <div>${data.officeNumber || data.getSchool?.() || data.getGitHub?.() || 'No Special Id'}</div>
            </div>
        </div>
    </div>
</div>
    `
}
// Function generateHTML content
function generateHTML(answers) {
    let results = '';
    const filteredAnswers = answers.filter((answer) => {
        return answer.id
    })
     for (let i = 0; i < filteredAnswers.length; i++) {
        const result = generateEmployeeHTML(filteredAnswers[i])
        results += result
    }
    return `<html>

    <head>
        <title>Team Profile Generator</title>
        <style>
            body {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 6px;
            }
    
            .item {
                border: 1px solid black;
                border-radius: 4px;
            }
    
            .item-header {
                background-color: rgb(67, 142, 148);
                padding: 20px;
            }
    
            .item-content {
                padding: 20px;
                border-top: 1px solid black;
                flex-direction: column;
            }
    
            .item-content div,
            .item-header div,
            .item-content {
                display: flex;
                gap: 6px;
            }
        </style>
    </head>
    
    <body>
    
    ${results}
    
    </body>
    
    </html>`
}
// TODO: Create a function to initialize app
function generateFile(answers) { 
    const content = generateHTML(answers)
    writeToFile('teamProfile', content)
    
}
module.exports = generateFile;