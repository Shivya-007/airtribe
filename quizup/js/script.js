// Sample questions. DONT touch this data
const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');
let i=0, j=questions.length, marks=0;

function loadQuestion(i) {
    // Load the first question and load subsequent question from this function
    submitButton.hidden = false;
    nextButton.hidden = true;
    document.getElementById('question').innerHTML = questions[i].text;
    const quizOptions =  questions[i].options;
    let quizOps =  document.getElementById('answer-list');
    quizOps.innerHTML = '';
    quizOptions.forEach((option,index)=> {
       quizOps.innerHTML += `<li><input type="radio" name="answer" value=${index}> ${option}</input></li>` ;
    });
}

submitButton.addEventListener("click", () => {
    // Implement the logic when the user clicks on submit button. The answer selected by the user should be validated here with the correct option
    const myOption = document.querySelector('input[type="radio"][name="answer"]:checked');
    if(myOption == null){
        alert('Please select an answer!');
        return;
    }
    const answer = questions[i].correct;
    document.getElementsByName('answer').forEach((option,index)=>{
        if(index ==  answer){
            option.parentElement.style.backgroundColor = 'lightgreen';
        }
    });
    if(myOption.value == answer){
        marks++;
    }
    i++;
    submitButton.hidden = true;
    nextButton.hidden = false;
});

nextButton.addEventListener("click", () => {
    // Implement the logic for showing the next question in the questions array. Basic DOM manipulation methods are required here.
    // Also check for quiz completion here as well
    if(i<j){
        loadQuestion(i);
    }
    else{
        alert(`Quiz finished! Your score is: ${marks}/${j}`);
        marks=0;
        loadQuestion(i=0);
    }
});

// Load the first question on startup
loadQuestion(i);