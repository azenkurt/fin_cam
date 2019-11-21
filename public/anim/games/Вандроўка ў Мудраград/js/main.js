var Main_StartBut=document.getElementById("Main_StartBut");
var game1_Pers=document.getElementById("game1_Pers");
var game2_Pers=document.getElementById("game2_Pers");
var game3_Pers=document.getElementById("game3_Pers");
var game4_Pers=document.getElementById("game4_Pers");
var game1_StartBut=document.getElementById("game1_StartBut");
var game2_StartBut=document.getElementById("game2_StartBut");
var game3_StartBut=document.getElementById("game3_StartBut");
var game4_StartBut=document.getElementById("game4_StartBut");
var finalGate=document.getElementById("finalGate");
var finalMessage=document.getElementById("finalMessage");
Main_StartBut.onclick=function(){
    Main_StartBut.style.opacity=0; 
    Main_StartBut.style.zIndex=-100;
    Main_StartBut.style.left=-1000+"px";  
    
    game1_Pers.style.zIndex=1;
    game1_Pers.style.opacity=1;
    
    game1_StartBut.style.opacity=1;
    game1_StartBut.style.zIndex=1;    
}
var mainWindow=document.getElementById("mainWindow");
finalGate.onclick=function(){
    GateUP();   
    this.style.backgroundRepeat="no-repeat";    
    finalMessage.style.left=50+"%";
}
function GateUP(){
    var finalGateY=0;
    setInterval(function(){
        finalGate.style.backgroundPositionY=-finalGateY+"px";
        finalGateY+=1;
        if (finalGate==179){
            
        }
    },10);
}