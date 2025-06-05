
const questions = [
        
   {    
        question : " Who is the best Lb in efootball?",
        answers: [
 { text: "Maldink", correct : false},
 { text: "Carlos", correct : false},
{ text: "Mo barre", correct : true},
 { text: "costarcuta", correct : false}
        ]  
   },
      {    
        question : "Who is best player in the group chat ?",
        answers: [
 { text: "Fitax", correct : true},
 { text: "Aweys", correct : false},
 { text: "Mascud", correct : false},
 { text: "Vidic", correct : false},
 
        ]  
   },
   
{    
        question : " who is worst player in the group chat ?",
        answers: [
 { text: "C.raxman", correct : false},
 { text: "Aweys", correct : false},
 { text: "Cuseeb", correct : false},
 { text: "Mascud", correct : true},
 
        ]  
   },
   
   {    
        question : " Is suqaxolaha country ?",
        answers: [
 { text: "Yes", correct : true},
 { text: "Yes", correct : true},
 { text: "Yes", correct : true},
 { text: "No", correct : false},
 
        ]  
   },
   
   {    
        question : " Which one is the best playstyle ?",
        answers: [
 { text: "Long ball counter", correct : false},
 { text: "Long ball", correct : false},
 { text: "Quick counter", correct : true},
 { text: "Position game", correct : false},
 
        ]  
   }
   ,
   {
        question: " which one is the scariest play stile  ?",
        answers: [
                { text: "Tiki taka", correct: true },
                { text: "clear ball", correct: false },
                { text: "Croas style", correct: false },
                { text: "Daf miriq", correct: false },
                
        ]
},
   {
        question: " which player has the highest speed  ?",
        answers: [
                { text: "Eto", correct: false },
                { text: "davies", correct: true },
                { text: "Lukaku", correct: false },
                { text: "Mbappe", correct: false },
                
        ]
},
   {
           question: " which one is the best game skill  ?",
           answers: [
                   { text: "Phenomenal finishing", correct: false },
                   { text: "Blitz curler", correct: false },
                   { text: "Bullet header", correct: false },
                   { text: "Rocket shoot", correct: true },
                   
           ]
   },
      {
           question: " what was the best season in efootball   ?",
           answers: [
                   { text: "Pes 21", correct: true },
                   { text: "efootball 2025", correct: false },
                   { text: "pes 2017", correct: false },
                   { text: "efootball 2026", correct: false },
                   
           ]
   },
      {
           question: " which one is the best additional skill in pes  ?",
           answers: [
                   { text: "Heading", correct: false },
                   { text: "Super-sub", correct: false },
                   { text: "double touch", correct: true },
                   { text: "One touch pass", correct: false },
                   
           ]
   }

        
];

const questionEl = document.getElementById('question');
const answerBtns = document.getElementById('answer-btn');
const nextBtn = document.getElementById('next');

let questionIndex = 0;
let score = 0;

function startQuiz() {
        questionIndex = 0;
        score = 0;
        nextBtn.innerHTML = 'Next';
      
        showQue();
}

function showQue(){
        reset()
        let  cQ = questions[questionIndex] ;
        qNo = questionIndex + 1;
        questionEl.innerHTML = qNo + '.' + cQ.question;
      
      
   cQ.answers.forEach(answer  => {
           let button = document.createElement('button');
           button.classList.add('btn');
           button.innerHTML = answer.text;
           answerBtns.appendChild(button);
           if(answer.correct){
                button.dataset.correct = answer.correct
                ;
              
           }
           button.addEventListener('click', select)
           
           
    })
       
}
function reset(){
          nextBtn.style.display ='none'
          while(answerBtns.firstChild){
                  answerBtns.removeChild(answerBtns.firstChild)
          }
}


function select(e){
        let selctBtn = e.target;
        let isCorret = selctBtn.dataset.correct === 'true';
        
        if(isCorret){
                selctBtn.classList.add('correct');
                  score++;
        }
        else{
                selctBtn.classList.add('incorrect');
        }
        Array.from(answerBtns.children).forEach(button => {
                if(button.dataset.correct === 'true'){
                   button.classList.add('correct')     
                }
                
                button.disabled = true;
                
                nextBtn.style.display = 'block';
                
        })
        
        
        
}
function next(){
        questionIndex++;
        if(questionIndex < questions.length){
                showQue()
        } else{
                scoreText();
        }
}

function scoreText(){
        reset();
        questionEl.innerHTML = `you scored ${score} out of ${questions.length} what a performance!`
        nextBtn.innerHTML = 'Play Again ';
        nextBtn.style.display = "block";
        
}
nextBtn.addEventListener("click", () => {
        if( questionIndex < questions.length){
                next()
        }
        else{
                showQue()
        }
})


startQuiz();