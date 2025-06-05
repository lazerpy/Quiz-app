
const questions = [
        
   {    
        question : " Who is the best gk in efootball?",
        answers: [
 { text: "Victer bia", correct : false},
 { text: "Picform", correct : false},
{ text: "schemical", correct : true},
 { text: "p.check", correct : false}
        ]  
   },
      {    
        question : "what is highest level in efootball ?",
        answers: [
 { text: "world champion", correct : true},
 { text: "division 1", correct : false},
 { text: "Rank 1 in division", correct : false},
 { text: "Rank 1 in local tournaments", correct : false},
 
        ]  
   },
   
{    
        question : " what is best formation ever in efootball ?",
        answers: [
 { text: "4222", correct : false},
 { text: "4132", correct : false},
 { text: "4312", correct : false},
 { text: "541", correct : true},
 
        ]  
   },
   
   {    
        question : " who is the best efootabll player in world?",
        answers: [
 { text: "messi", correct : false},
 { text: "Yamakuji", correct : false},
 { text: "remato", correct : true},
 { text: "Mo barre", correct : false},
 
        ]  
   },
   
   {    
        question : " who is the best CF in efootball ?",
        answers: [
 { text: "Messi", correct : false},
 { text: "Eto", correct : false},
 { text: "Rumminage", correct : true},
 { text: "Mo barre", correct : false},
 
        ]  
   }
   ,
   {
        question: " who is the best RB in efootball ?",
        answers: [
                { text: "Thuram", correct: true },
                { text: "arnold", correct: false },
                { text: "Cafu", correct: false },
                { text: "Mo barre", correct: false },
                
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
        questionEl.innerHTML = `you scored ${score} out of ${questions.length}!`
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