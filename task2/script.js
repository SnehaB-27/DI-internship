const questions = [
    {
        question: "What is the basic unit of life?",
        options: ["Tissue", "Cell", "Organ", "Organism"],
        answer: "Cell"
    },
    {
        question: "What is the process by which plants make their own food?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        answer: "Photosynthesis"
    },
    {
        question: "What organ is responsible for pumping blood throughout the body?",
        options: ["Brain", "Lungs", "Heart", "Liver"],
        answer: "Heart"
    },
    {
        question: "Which part of the cell contains the genetic material?",
        options: ["Cytoplasm", "Nucleus", "Ribosome", "Mitochondria"],
        answer: "Nucleus"
    },
    {
        question: "Which process occurs in the mitochondria?",
        options: ["Photosynthesis", "Cellular respiration", "Protein synthesis", "DNA replication"],
        answer: "Cellular respiration"
    },
    {
        question: "What is the primary function of red blood cells?",
        options: ["Fighting infections", "Clotting blood", "Transporting oxygen", "Digesting food"],
        answer: "Transporting oxygen"
    },
    {
        question: "Which of the following is a genetic disorder?",
        options: ["Asthma", "Down syndrome", "Diabetes", "Tuberculosis"],
        answer: "Down syndrome"
    },
    {
        question: "What is the largest organ in the human body?",
        options: ["Heart", "Skin", "Liver", "Brain"],
        answer: "Skin"
    },
    {
        question: "What type of bond holds the two strands of DNA together?",
        options: ["Ionic bond", "Hydrogen bond", "Covalent bond", "Metallic bond"],
        answer: "Hydrogen bond"
    },
    {
        question: "Which of the following is NOT a type of muscle tissue?",
        options: ["Cardiac", "Smooth", "Skeletal", "Nervous"],
        answer: "Nervous"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const finalFeedbackElement = document.getElementById('final-feedback');
const restartButton = document.getElementById('restart-button');
const startButton = document.getElementById('start-button');
const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');

startButton.addEventListener('click', () => {
    startContainer.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    startQuiz();
});

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultElement.classList.add('hidden');
    feedbackElement.innerText = ''; 
    nextButton.classList.remove('hidden');
    prevButton.classList.add('hidden'); 
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    optionsElement.innerHTML = ''; 

    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(button);
    });

    prevButton.classList.toggle('hidden', currentQuestionIndex === 0); 
}

function selectOption(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        feedbackElement.innerText = "Correct!";
        feedbackElement.style.color = "green";
        score++;
    } else {
        feedbackElement.innerText = `Wrong! The correct answer is ${currentQuestion.answer}.`;
        feedbackElement.style.color = "red";
    }
    document.querySelectorAll('#options button').forEach(button => button.disabled = true);
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showResult();
    }
});

prevButton.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
    }
});

function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    feedbackElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    prevButton.classList.add('hidden'); 
    resultElement.classList.remove('hidden');

    scoreElement.innerText = score;
    totalElement.innerText = questions.length;

    finalFeedbackElement.innerText = score >= 7 ? "Great job! You passed!" : "You lost! Try again!";
}

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    feedbackElement.innerText = '';

    startContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    resultElement.classList.add('hidden');

    questionElement.innerText = '';
    optionsElement.innerHTML = '';
    nextButton.classList.remove('hidden');
    prevButton.classList.add('hidden'); 
    showQuestion(); 
});

startContainer.classList.remove('hidden'); 
quizContainer.classList.add('hidden'); 
