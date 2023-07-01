import React,{useState} from "react";
import './QuizApp.css';

function QuizApp(){
const[current,setCurrent]=useState(0);
const[score,setScore]=useState(0);
const[over,setOver]=useState(false);
const questions=[
    {
        questionText:"what  is capital of India",
        answerOptions:[
            {answerText:'Delhi',isCorrect:true},
            {answerText:'karachi',isCorrect:false},
            {answerText:'Mumbai',isCorrect:false},
            {answerText:'Bangalore',isCorrect:false},
        ]
    },
    {
      questionText:"what  is capital of mumbai",
    answerOptions:[
        {answerText:'Delhi',isCorrect:false},
        {answerText:'karachi',isCorrect:true},
        {answerText:'Mumbai',isCorrect:false},
        {answerText:'Bangalore',isCorrect:false},
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