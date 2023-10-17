const data = [
    {
        id: 1,
        question : "which of these fish is actually a fish?",
        answers:[
            { answer: "swordfish", isCorrect: true},
            { answer: "jellyfish", isCorrect: false},
            { answer: "starfish", isCorrect: false}
        ],
    },


    {
        id: 2,
        question : "A flutter is a group of:",
        answers:[
            { answer: "bees", isCorrect: false},
            { answer: "penguine", isCorrect: false},
            { answer: "butterflies", isCorrect: true}
        ],
    },  
    
    
    {
        id: 1,
        question : "A group of which animals is referred to a wake",
        answers:[
            { answer: "bats", isCorrect: false},
            { answer: "vultures", isCorrect: true},
            { answer: "ants", isCorrect: false}
        ],
    }
];

const gameScreen = document.querySelector(".game");
const resultScreen = document.querySelector(".result");
const question = document.querySelector(".question");
const answersContainer = document.querySelector(".answers");
const submit = document.querySelector(".submit");
const play = document.querySelector(".play");


let qIndex = 0;
let correctCount = 0;
let wrongCount = 0;
let total = 0;
let selectedAnswer;


const playAgain = () =>{
     qIndex = 0;
     correctCount = 0;
     wrongCount = 0;
     total = 0;

    showQuestion(qIndex);
}

play.addEventListener("click", () => {
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain();
})

const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";

    resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`;
    resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`;
    resultScreen.querySelector(".score").textContent = `score: ${(correctCount-wrongCount)*10}`;
};


const showQuestion = (qNumber) =>{
    if(qIndex === data.length) return showResult();

    selectedAnswer = null; //at every question answer will be reset
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) => 
        `<div class="ans">
            <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
            <label for=${index}>${item.answer}</label>
        </div> `
    ).join("");

    selectAnswer();
};

const selectAnswer = () =>{
    answersContainer.querySelectorAll("input").forEach(el =>{
        el.addEventListener("click", (e) =>{
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = () =>{
    submit.addEventListener("click", () =>{
        if(selectedAnswer !== null){
            selectedAnswer === "true" ? correctCount++ : wrongCount++ ;
            qIndex++;
            showQuestion(qIndex);
        }else alert("select an answer!");
        
    });
};

showQuestion(qIndex);

submitAnswer();
