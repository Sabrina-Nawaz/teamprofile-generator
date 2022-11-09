const fs = require('fs');
// Function writeToFile
function writeToFile(fileName, content) {
    const name = fileName.toLowerCase().split(' ').join('_')
    fs.writeFile(`./dist/${name}.html`, content, () => {})
};
// Function that generates the Employee HTML file based on the answers 
function generateEmployeeHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Team Profile</title>
    </head>
    <body>
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
</body>
</html>
    `
}
// Function generateHTML content based off of filtered answers
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
    <title>Team Profile</title>
        <style>
            body {
                display: flex;
                flex-direction: column;
                align-items: center;
            } 

            #results {
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
    <h1>Team Profile</h1>
    <div id="results">
    ${results}
    </div>
    
    </body>
    
    </html>`
}
// TODO: Create a function to initialize app
function generateFile(answers) { 
    const content = generateHTML(answers)
    writeToFile('teamProfile', content)
    
}
module.exports = generateFile;