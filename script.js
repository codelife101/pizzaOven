console.log("hello");

function submit(){
        var x = document.forms["imageQuestion"]["answer"].value;
    if (x.length < 1) {
      alert("dont tell me you blinked, enter an answer");   
    } 
    else if (x.toLowerCase() =="mojo jojo"){
        $(".question").css("display","none");
    } else{
        alert("nup wrong answer, try again uce");
    }
}

function nextChllenge(){
    $(".keyCode").css("display","none");
    $(".challengeContent").css("display","block");
}