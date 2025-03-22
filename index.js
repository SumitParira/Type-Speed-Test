const typing_ground  =document.querySelector('#textarea');
const btn = document.querySelector('#btn');
const score = document.querySelector('#score');
const show_sentence = document.querySelector('#showSentence');

let startTime,endTime,totalTimeTaken;

const sentences = [
    'The quick brown fox jumos over the lazy dog 1',
    'the quick brown fox jumps over the lazy dog 2',
    'The quicK briwN DOX HIMOS OBTS hd a fohq w3'
]

//step 5

const calculateTypingSpeed = (totalTimeTaken) => {
    let totalWords = typing_ground.value.trim();
    let actualWords = totalWords === '' ? 0 : totalWords.split(" ").length;


    if(actualWords !== 0){
        let typing_speed = (actualWords/totalTimeTaken)*60;
        typing_speed = Math.round(typing_speed);
        score.innerHTML = `Your typing speed is ${typing_speed} words per minute & you wrote ${actualWords} words & time taken ${totalTimeTaken} sec `;

    }else{
        score.innerHTML = "Your Typing speed is 0  words per minutes & time taken $(time_taken) sec";

    }
}

// step 4

const endTypingTest = () => {
    btn.innerText = "Start";

    let date = new Date();
    endTime = date.getTime();

    totalTimeTaken = (endTime - startTime)/1000;

    console.log(totalTimeTaken);

    calculateTypingSpeed(totalTimeTaken);

    show_sentence.innerHTML="";
    typing_ground.value="";
    

}


//step 3

const startTyping = () => {
    
    let randomNumber  = Math.floor(Math.random()*sentences.length);
    console.log(randomNumber);

    show_sentence.innerHTML=sentences[randomNumber];

    let date= new Date();
    startTime = date.getTime();

    btn.innerText= "Done";
    
}

btn.addEventListener('click',()=>{
    switch(btn.innerText.toLowerCase()){
        case "start":
            typing_ground.removeAttribute('disabled');
            startTyping();
            break;

        case "done":
            typing_ground.setAttribute('disabled',true);
            endTypingTest();
            break;

    }
});
