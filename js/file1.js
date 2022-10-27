const questions = [{
    'que' : 'Which of the following is a client-side language ?',
    'a' : 'JavaScript',
    'b' : 'Java',
    'c' : 'PHP',
    'd' : 'Go',
    'correct' : 'a'

},
{
    'que' : 'Angular was developed by which company ?',
    'a' : 'Facebook',
    'b' : 'Twitter',
    'c' : 'Google',
    'd' : 'Oracle',
    'correct' : 'c'
},
{
    'que' : 'The HyperText Markup Language (HTML) was invented in ',
    'a' : '40s',
    'b' : '60s',
    'c' : '70s',
    'd' : '90s',
    'correct' : 'd',
},
{
   'que' : 'in 2017 Java EE name was changed to ', 
   'a' : 'Jasmine EE',
   'b' : 'JSP EE',
   'c' : 'Jakarta EE',
   'd' : 'it was not changed',
   'correct' : 'c',
},

{
    'que' : 'Who created the C programming language ', 
    'a' : 'Tim Berners-Lee',
    'b' : 'Dennis Ritchie',
    'c' : 'Robin Milner',
    'd' : 'Robert Harper',
    'correct' : 'b',
 },

 {
 'que' : 'Which of the following is not a RDBMS ', 
    'a' : 'PostgreSQL',
    'b' : 'Oracle',
    'c' : 'MongoDB',
    'd' : 'MS SQL Server',
    'correct' : 'c',
 }

]

let index = 0;
let wrong = 0;
let right = 0;

question = document.getElementById('qu');
let numberOfQues = questions.length;
let answeredQues = new Map();
options = document.querySelectorAll('.op');
console.log(options)
const loadQues = () => {

    const data = questions[index];
    question.innerText = data.que;
     options[0].nextElementSibling.innerText = data.a;
     options[1].nextElementSibling.innerText = data.b;
     options[2].nextElementSibling.innerText = data.c;
     options[3].nextElementSibling.innerText = data.d;
}


const submit = () => {
    data = questions[index];
    
    options.forEach(
        (input) => {
       
            if(input.checked){
                ans = input.value
            }
        }
    )
    if(ans == data.correct){
        right++;
        
    }
      answeredQues.set(data,ans)
    index++;

    if(index!=numberOfQues){
        loadQues();
    }
    else{
        endQuiz();
    }
    
}

const endQuiz = () =>{
    let score = ((right / numberOfQues)*100).toFixed(2)
    console.log(right)
    document.getElementById('box').innerHTML = "<h2 class='score'>Your Score is "+ score+"%</h2><button class='answers' onclick='"+showAnswers()+"'>Show answers</button>"
}

const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false 
        }
    )
    loadQues();
}

const showAnswers = () =>{
    for (const ques of answeredQues.entries()) {
    }
      }


loadQues();