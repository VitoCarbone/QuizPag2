const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  const question = document.getElementById("question");

  // Recupera un numero casuale compreso tra 0 e il numero di domande nell'array
  const randomIndex = Math.floor(Math.random() * questions.length);
  
  // Recupera la domanda casuale dall'array
  const randomQuestion = questions[randomIndex];
  
  // Recupera la risposta corretta e le risposte errate per la domanda casuale
  const correctAnswer = randomQuestion.correct_answer;
  const incorrectAnswers = randomQuestion.incorrect_answers;
  
  // Scegli a caso una delle risposte errate come prima opzione
  const first = incorrectAnswers[Math.floor(Math.random() * incorrectAnswers.length)];
  // Scegli a caso una delle risposte errate come seconda opzione, escludendo quella già scelta come prima opzione
  const second = incorrectAnswers.filter(answer => answer !== first)[Math.floor(Math.random() * (incorrectAnswers.length - 1))];
  // Scegli a caso una delle risposte errate come terza opzione, escludendo quelle già scelta come prima e seconda opzione
  const third = incorrectAnswers.filter(answer => answer !== first && answer !== second)[Math.floor(Math.random() * (incorrectAnswers.length - 2))];
  // La quarta opzione è la risposta corretta
  const fourth = correctAnswer;
  
  // Visualizza la domanda e le opzioni di risposta utilizzando i pulsanti radio
  question.innerHTML = `<h2>${randomQuestion.question}</h2>
    <ul class="option_group">
    <li class="option"><input type="radio" name="answer" value="${first}">${first}</li>
    <li class="option"><input type="radio" name="answer" value="${second}">${second}</li>
    <li class="option"><input type="radio" name="answer" value="${third}">${third}</li>
    <li class="option"><input type="radio" name="answer" value="${fourth}">${fourth}</li>
    </ul>`;
  
