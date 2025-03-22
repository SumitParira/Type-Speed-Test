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

const startTyping = () => {
    
    let randomNumber  = Math.floor(Math.random());
    console.log(randomNumber);
    
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
