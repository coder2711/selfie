var SpeechRecognition = window.webkitSpeechRecognition;

var Recognition = new SpeechRecognition() ;

function start(){
    document.getElementById("said").innerHTML="";
    Recognition.start();
}

Recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;
    document.getElementById("said").innerHTML=content;
    console.log(content);

    if(content== "take selfie"){
        console.log("taking selfie......");
        speak();
    }
}