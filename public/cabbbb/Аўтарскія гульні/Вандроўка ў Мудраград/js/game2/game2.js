var game2_MainForm=document.getElementById("game2_MainForm");

game2_StartBut.onclick=function(){
    game2_Pers.style.opacity=0;
    game2_Pers.style.zIndex=-100;

    game2_StartBut.style.zIndex=-100;
    game2_StartBut.style.opacity=0;
   
    game2_MainForm.style.opacity=1;
    game2_MainForm.style.zIndex=10;    
}

var game2_MainForm_OK=document.getElementById("game2_MainForm_OK");
var game2_MainForm_BAD=document.getElementById("game2_MainForm_BAD");
var game2_port=document.getElementsByClassName("game2_port");
var game2_AnswPort=document.getElementsByClassName("game2_AnswPort");
var game2_FullAutArr=["Ф.Скарына","Я.Колас","У.Караткевіч","Е.Полацкая","В.Быкаў","І.Шамякін","І.Мележ","Я.Купала","К.Крапіва","П.Броўка","Р.Барадулін","М.Багдановіч","А.Куляшоў","А.Пашкевіч"];
var game2_GameAutArr=[];
var game2_Num0=0;
var game2_NowAnswPort=0;
var game2_SelectedPort=0;

game2_MainForm_OK.onclick=function(){
    game2_MainForm.style.opacity=0;
    game2_MainForm.style.zIndex=-100;

    game2_Pers.style.opacity=0;    
    game2_Pers.style.zIndex=-100;

    game3_Pers.style.zIndex=10;
    game3_Pers.style.opacity=1;

    game3_StartBut.style.zIndex=10;
    game3_StartBut.style.opacity=1;
    
    mainWindow.style.backgroundImage="url(pics/kingdom2.jpg)";    

    game2_MainForm_OK.style.left=-150+"%";  
}
    for (var i=0;i<7;i++){
        game2_port[i].style.top=89+"px";
        game2_port[i].style.left=15+i*132+"px";
        game2_port[i].style.backgroundImage='url(pics/game2/p/q'+i+'.png)';
    }
    for (var i=7;i<14;i++){
        game2_port[i].style.top=245+"px";
        game2_port[i].style.left=15+(i-7)*132+"px";
        game2_port[i].style.backgroundImage='url(pics/game2/p/q'+i+'.png)';
    }

    for (var i=0;i<5;i++){
        game2_AnswPort[i].style.left=65+i*167+"px";    
    }
                                                                                                                                                                                                                               
while (game2_Num0<5){
    var game2_TempNum=Math.floor(Math.random()*13);
    var game2_IsIn=0;
    for (var i=0;i<game2_GameAutArr.length;i++){
        if(game2_GameAutArr[i]==game2_FullAutArr[game2_TempNum]){
            game2_IsIn=1;
        }        
    }
    if (game2_IsIn==0){
        game2_GameAutArr.push(game2_FullAutArr[game2_TempNum]);        
        game2_AnswPort[game2_Num0].innerHTML=game2_FullAutArr[game2_TempNum];
        game2_Num0+=1;
    }
}

for (var i=0;i<14;i++){
    game2_port[i].onclick=function(){
       if(game2_SelectedPort==0){
       game2_SelectedPort=this;
       this.style.border="2px solid red";}
       else {
           game2_SelectedPort.style.border="0px";
           game2_SelectedPort=this;
           this.style.border="2px solid red";}
           }
     }
for (var i=0;i<5;i++){
    game2_AnswPort[i].onclick=function(){
    if (game2_SelectedPort!=0){
            if (this.style.backgroundImage.length==0){
            this.style.backgroundImage=game2_SelectedPort.style.backgroundImage;
            game2_SelectedPort.style.border="0px";
            game2_SelectedPort.style.opacity=0;
            game2_SelectedPort.style.zIndex=-100;     
            game2_SelectedPort.style.left=-400+"";
            game2_SelectedPort=0;
            game2_NowAnswPort+=1;            
        }
    }
        if(game2_NowAnswPort==5){       
        for (var i=0;i<14;i++){
            game2_port[i].style.opacity=0;      
            game2_port[i].style.zIndex=-100;    
            game2_port[i].style.left=-400+"px";  
            Game2_Check();
        }
    }
    }  
}    
var game2_Rights=[0,0,0,0,0];
var game2_RezMessage=document.getElementById("game2_RezMessage");
var game2_IsWon=0;
function Game2_Check(){
    for (var i=0;i<5;i++){
        var game2_qqq=game2_AnswPort[i].style.backgroundImage.split('q')[1];
        var game2_www=game2_qqq.split('.')[0];
        if (game2_FullAutArr[game2_www]==game2_AnswPort[i].innerHTML){
            game2_Rights[i]=1;
            game2_AnswPort[i].style.boxShadow="0 0 0 5px lightgreen";    
        }
        else {
            game2_AnswPort[i].style.boxShadow="0 0 0 5px red";    
        }
    }   
    var game2_RezSum=game2_Rights[0]+game2_Rights[1]+game2_Rights[2]+game2_Rights[3]+game2_Rights[4];
    
    if (game2_RezSum==4){
        game2_RezMessage.innerHTML="Ты нядрэнна выканаў царскі загад. Можаш ісці далей!";
        game2_RezMessage.style.zIndex=111;
        game2_MainForm_OK.style.opacity=1;
        game2_MainForm_OK.style.zIndex=110;  
        game2_MainForm_OK.style.left=790+"px";  
        game2_MainForm_OK.style.backgroundImage="url(pics/game2/good.png)";
    }
    if (game2_RezSum==5){
        game2_RezMessage.innerHTML="Ты выдатна выканаў царскі загад!";
        game2_RezMessage.style.zIndex=111;
        game2_MainForm_OK.style.opacity=1;
        game2_MainForm_OK.style.zIndex=110;  
        game2_MainForm_OK.style.left=790+"px";  
        game2_MainForm_OK.style.backgroundImage="url(pics/game2/best.png)";
    }
    if (game2_RezSum<4){
        game2_RezMessage.innerHTML="Ты не выканаў царскі загад. Ты не ведаеш 'сваіх герояў'...";
        game2_MainForm_BAD.style.opacity=1;
        game2_MainForm_BAD.style.zIndex=110;  
        game2_MainForm_BAD.style.left=720+"px";     
    }

}
function Game2_SetPosition(){
    for (var i=0;i<7;i++){       
        game2_port[i].style.left=15+i*132+"px";       
    }
    for (var i=7;i<14;i++){       
        game2_port[i].style.left=15+(i-7)*132+"px";      
    }
    for (var i=0;i<5;i++){
        game2_AnswPort[i].style.left=65+i*167+"px";    
    }
}

game2_MainForm_BAD.onclick=function(){
    game2_MainForm.style.opacity=0;
    game2_MainForm.style.zIndex=-100;
    game2_MainForm_OK.style.left=-150+"%";
    game2_MainForm_BAD.style.left=-150+"%";

    for (var i=0;i<7;i++){
        game2_port[i].style.top=89+"px";
        game2_port[i].style.left=15+i*132+"px";
        game2_port[i].style.backgroundImage='url(pics/game2/p/q'+i+'.png)';        
    }
    for (var i=7;i<14;i++){
        game2_port[i].style.top=245+"px";
        game2_port[i].style.left=15+(i-7)*132+"px";
        game2_port[i].style.backgroundImage='url(pics/game2/p/q'+i+'.png)';
    }
    for (var i=0;i<5;i++){
        game2_AnswPort[i].style.left=65+i*167+"px";    
        game2_AnswPort[i].style.backgroundImage="";
        game2_AnswPort[i].style.boxShadow="";
    }
    for (var i=0;i<14;i++){
        game2_port[i].style.opacity=1;   
    }
    game2_Pers.style.opacity=1;    
    game2_Pers.style.zIndex=100;

    game2_StartBut.style.zIndex=10;
    game2_StartBut.style.opacity=1;
    
    game2_MainForm_BAD.style.left=-150+"%";  
    game2_RezMessage.innerHTML="";
    game2_Rights=[0,0,0,0,0];
    game2_RezSum=0;
    game2_NowAnswPort=0;
    game2_GameAutArr=[];
    game2_Num0=0;
    while (game2_Num0<5){
    var game2_TempNum=Math.floor(Math.random()*13);
    var game2_IsIn=0;
    for (var i=0;i<game2_GameAutArr.length;i++){
        if(game2_GameAutArr[i]==game2_FullAutArr[game2_TempNum]){
            game2_IsIn=1;
        }        
    }
    if (game2_IsIn==0){
        game2_GameAutArr.push(game2_FullAutArr[game2_TempNum]);        
        game2_AnswPort[game2_Num0].innerHTML=game2_FullAutArr[game2_TempNum];
        game2_Num0+=1;
    }
} 
}