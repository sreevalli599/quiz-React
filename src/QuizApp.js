import React,{useState} from "react";
import './QuizApp.css';

function QuizApp(){
const[current,setCurrent]=useState(0);
const[score,setScore]=useState(0);
const[over,setOver]=useState(false);
const questions=[
    {
        questionText:"Number of primitive data types in Java are?",
        answerOptions:[
            {answerText:'6',isCorrect:false},
            {answerText:'7',isCorrect:false},
            {answerText:'8',isCorrect:true},
            {answerText:'9',isCorrect:false},
        ]
    },
    {
      questionText:"When an array is passed to a method, what does the method receive",
    answerOptions:[
        {answerText:'The Refernce of the array',isCorrect:true},
        {answerText:'A copy of the array',isCorrect:false},
        {answerText:'Length of the array',isCorrect:false},
        {answerText:'copy of the first element',isCorrect:false},
    ]
},  {
    questionText:"Arrays in java are",
  answerOptions:[
      {answerText:'Object References',isCorrect:false},
      {answerText:'objects',isCorrect:true},
      {answerText:'primitive data type',isCorrect:false},
      {answerText:'None',isCorrect:false},
  ]
}, {
    questionText:"When is the object created with new keyword?",
  answerOptions:[
      {answerText:'At RunTime',isCorrect:true},
      {answerText:'At CompileTime',isCorrect:false},
      {answerText:'Depends on the code',isCorrect:false},
      {answerText:'None',isCorrect:false},
  ]
},
]
const prevquestionHandler=()=>{
    if(current!==0){
    setCurrent(current-1);
    }
}
const nextquestionHandler=()=>{
    if(current+1<questions.length){
    setCurrent(current+1);
    }else{
        setOver(true);
    }
}
const handleclick=(isCorrect)=>{
    nextquestionHandler();
if(isCorrect==true){
    setScore(score+1);
}
}
return(
    <div>
        {over?<div><h1>you have scored {score} out of {questions.length}</h1></div>:
     <div>
        <div>
     <h1>{questions[current].questionText}</h1>
     </div>
     <div className='AnswerSection'>
     {questions[current].answerOptions.map(answer=>
        <button className='Options'
        onClick={()=>{handleclick(answer.isCorrect)}}>{answer.answerText}</button>
        )}
        </div>
        <span >
     <button onClick={prevquestionHandler}>previous</button>
     <button onClick={nextquestionHandler}>next</button>
     </span>
     </div>}
    </div>
);
}
export default QuizApp;