
let z=Math.floor((Math.random()*20)+1);
function button1Click(){
    let x=Math.floor((Math.random()*6)+1);
    document.getElementById('dice1').innerHTML=x;
}
function button2Click(){
    let y=Math.floor((Math.random()*10)+1);
    document.getElementById('dice2').innerHTML=y;
}
function button3Click(){
    let z=Math.floor((Math.random()*20)+1);
    document.getElementById('dice3').innerHTML=z;
}
function buttonAllClick(){
    button1Click();
    button2Click();
    button3Click();
}

 