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

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 1 second";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000)
}
camera = document.getElementById("camera");
webcam.set({
    width : 360,
    height : 250,
    image_format : 'jpeg',
    jpeg_quality : 100
})
