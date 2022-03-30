// student score

var score = prompt("please enter your score","");

if (score==null){
    alert("please enter your score")
}else{
    score=parseInt(score);

if (isNaN(score)){
    alert("please enter a number")
}else if (score<=60){
    console.log(`your score is ${score}`);
    alert('F fail');
}else if (score<=65.5){
    console.log(`your score is ${score}`);
    alert('C- pass');
}else if (score<=70){
    console.log(`your score is ${score}`);
    alert('C pass');
}else if (score<=80){
    console.log(`your score is ${score}`);
    alert('B pass');67
}else if (score<=90){
    console.log(`your score is ${score}`);
    alert('b+ pass');
}else if (score<=100){
    console.log(`your score is ${score}`);
    alert(' pass');
}

}