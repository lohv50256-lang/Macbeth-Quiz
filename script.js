document.addEventListener('DOMContentLoaded', () => {

    // 1. БАЗА ДАНИХ (Масив об'єктів)
    const questions = [
        {
            question: "Who wrote Macbeth?",
            answers: ["Henrik Ibsen", "Arthur Miller", "William Shakespeare", " Anton Chekhov"],
            correct: 2,
        },
         {
            question: "When was Macbeth written?",
            answers: ["1600", "1609", "1603", "1606"],
            correct: 3,
        },
         {
            question: "What is Macbeth's fatal flaw?",
            answers: ["Pride", "Ambition", "Greed", "Lust"],
            correct: 1,
        },
         {
            question: "What happens in act 1 scene 5?",
            answers: ["Witches are doing their prophecies", "Cergant goes to the King to tell the news about battle", "Lady Macbeth receives a letter", "Macbeth and Banquo become kings"],
            correct: 2,
        },
         {
            question: "How do witches speak in a way that is different to other nobles??",
            answers: ["Trochaic Tetrameter", "Iamic Pentameter", "Similies", "Unkown and stupid words"],
            correct: 0,
        },
        
        {
            question: "Who is Fleance",
            answers: ["Scottish noble", "Duncan's son", "Thane", "Banquo's son"],
            correct: 3,
        },
        
        {
            question: "How does Macbeth mirrors Lady Macbeth's manipulation while pressuring murderers to kill Banquo?",
            answers: ["Rewarding them with higher status", "Threathens to kill them and their families if they disobey", "Challenging their manhood", "Saying that Banquo is responsible for Duncan's death"],
            correct: 2,
        },
        
        {
            question: "What is Divine Right of Kings(not Being!!!)?",
            answers: ["Doctrine that monarchs receive their authority directly from God", "Beleive that Kings are peasants", "Law which allows a murder towards Kings", "Great Chain of Kings"],
            correct: 0,
        },
        
        {
            question: "What is similarities between Macbeth and witches?",
            answers: ["Macbeth is a meanie", "Speaks in rhyming couplets and uses same symantic field of words, such as 'fair' and 'foul'", "He is a murderer", "He practises witchcrafts"],
            correct: 1,
        },
        
        {
            question: "What is NOT a main theme in Macbeth?",
            answers: ["Deception", "Masculinity vs Femininity", "Hierarchy", "Appearance vs Reality"],
            correct: 2,
        },
        
        {
            question: "What sleep is a symbol of?",
            answers: ["Innocence", "Laziness", "Unstable mind", "Chaos"],
            correct: 0,
        },
        
          {
            question: "Where Kings are crowned?",
            answers: ["Scone Palace", "Inverness", "Tower of London", "Golden Globe"],
            correct: 0,
        },
        
        
        
    ];
    const startScreen = document.querySelector('#start-screen');
    const quizScreen = document.querySelector('#quiz-screen');
    const resultScreen = document.querySelector('#result-screen');
    const startBtn = document.querySelector('#start-btn');
    const restartBtn = document.querySelector('#restart-btn');
    const resultText = document.querySelector('.result-text');
    const questionText = document.querySelector('#question-text');
    const answersContainer = document.querySelector('#answers-container');

    let questionIndex = 0;
    let score = 0;
    let timer = 15; // Таймер на 15 секунд
    const timerDisplay = document.querySelector('#timer');
    let interval; // Змінна для зберігання інтервалу

    // Функція для відображення запитання
    function showQuestion(question) {

        clearInterval(interval); // Скидаємо таймер
        startTimer();

        answersContainer.innerHTML = '';
        questionText.innerText = question.question;
        for (let i = 0; i < question.answers.length; i++) {
            const button = document.createElement('button');
            button.innerText = question.answers[i];
            button.classList.add('answer-btn');
            button.addEventListener('click', () => checkAnswer(button, i));
            answersContainer.appendChild(button);

        }
    }
    showQuestion(questions[questionIndex]);
    // Завдання 5 - Функція для переходу до наступного запитання
    function nextQuestion() {
        questionIndex++;
        if (questionIndex < questions.length) {
            showQuestion(questions[questionIndex]);
        } else {
            showResult();
        }
    }
    // Завдання 4 - Перевірка відповіді
    function checkAnswer(button, i) {
        if (i == questions[questionIndex].correct) {
            score++;
            button.classList.add('correct');
        } else {
            button.classList.add('wrong');
        }
        // Відключення кнопок після вибору відповіді
        document.querySelectorAll('.answer-btn').forEach(btn => {
            btn.disabled = true;
        })
        // Таймер на 1 секунду
        setTimeout(nextQuestion, 1000);
    }


    // Завдання 7 - Відображення результату і статистики
    function showResult() {
        const accuracy = Math.round((score / questions.length) * 100);
        resultText.innerText = `Your result: ${score}/${questions.length} (${accuracy}%)`;
        quizScreen.classList.add('hide');
        resultScreen.classList.remove('hide');
        const finalScore = document.querySelector('#final-score');
        finalScore.innerText = score;
    }
    // Завдання 3 - Керування екранами (JS)
    function startGame() {
        startScreen.classList.add('hide');
        resultScreen.classList.add('hide');
        quizScreen.classList.remove('hide');
        questionIndex = 0;
        score = 0;
        showQuestion(questions[questionIndex]);
    }

    startBtn.addEventListener('click', startGame);


    // Завдання 6 - Таймер
    function startTimer() {
        timer = 20;
        timerDisplay.innerText = `Time: ${timer}`;
        interval = setInterval(() => {
            timer--;
            timerDisplay.innerText = `Time: ${timer}`;
            if (timer <= 0) {
                clearInterval(interval);
                nextQuestion();
            }
        }, 1000);
    }

    restartBtn.addEventListener('click', () => {
        startGame();
        resultScreen.classList.add('hide');
    });

});
