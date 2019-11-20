var game1_MainForm=document.getElementById("game1_MainForm");
var game1_isGameStart=0;

game1_StartBut.onclick=function(){
    game1_Pers.style.opacity=0;
    game1_Pers.style.zIndex=-100;

    game1_StartBut.style.zIndex=-100;
    game1_StartBut.style.opacity=0;
   
    game1_MainForm.style.opacity=1;
    game1_MainForm.style.zIndex=10;    
    
    game1_MainPic.style.backgroundImage="";    
    
    ame1_AnsLetter=[];
    game1_CurrentAnsArr=[];
    game1_getPoints=0;
    game1_isGameStart=1;
    game1_isLetter=0;       
    Game1_StartGame();
    Game1_ShowPoints();    
}

var game1_MainForm_OK=document.getElementById("game1_MainForm_OK");

game1_MainForm_OK.onclick=function(){
    game1_MainForm.style.opacity=0;
    game1_MainForm.style.zIndex=-100;

    game1_Pers.style.opacity=0;    
    game1_Pers.style.zIndex=-100;

    game2_Pers.style.zIndex=10;
    game2_Pers.style.opacity=1;

    game2_StartBut.style.zIndex=10;
    game2_StartBut.style.opacity=1;
    game1_MainForm_OK.style.left=-1000+"px";
    mainWindow.style.backgroundImage="url(pics/kingdom1.jpg)";
}

var game1_MainForm_BAD=document.getElementById("game1_MainForm_BAD");
game1_MainForm_BAD.onclick=function(){    

    console.log("BADDD");
    
    game1_MainForm.style.zIndex=-100;
    game1_MainForm.style.opacity=0;

    game1_Pers.style.zIndex=1;
    game1_Pers.style.opacity=1;
    
    game1_StartBut.style.opacity=1;
    game1_StartBut.style.zIndex=1;

    game1_MainForm_BAD.style.left=-2000+"px";    
}

var game1_GameWordArr=[];
/////////////////////////////////////////////////////
var game1_Alp=["А","Б","В","Г","Д","Е","Ё","Ж","З","І","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ў","Ф","Х","Ц","Ч","Ш","Ь","Q","Ы","Э","Ю","Я"];
var game1_AnsLetter=document.getElementsByClassName("game1_AnsLetter");
var game1_Let=document.getElementsByClassName("game1_Let");
var game1_Timer=document.getElementsByClassName("game1_Timer");
var game1_Point=document.getElementsByClassName("game1_Point");
var game1_nowWord=0;
var game1_Time=179;
var game1_getPoints=0;

Game1_StartGame();

////////////////////////////////////////////////////

function Game1_StartGame(){
    game1_Time=179;    
for (var i=0;i<10;i++){game1_AnsLetter[i].style.left=29+i*59+"px";}
for (var i=0;i<12;i++){
    game1_Let[i].style.left=97+i*63+"px";
    game1_Let[i].style.top=361+"px";
}
for (var i=12;i<23;i++){
    game1_Let[i].style.left=121+(i-12)*63+"px";
    game1_Let[i].style.top=460+"px";
}
for (var i=23;i<33;i++){
    game1_Let[i].style.left=160+(i-23)*63+"px";
    game1_Let[i].style.top=559+"px";
}
for (var i=0;i<33;i++){
    game1_Let[i].style.backgroundImage="url(pics/game1/pics/smallLetter/"+game1_Alp[i]+".png)";
}
for (var i=0;i<3;i++){game1_Timer[i].style.left=113+i*49+"px";}
for (var i=0;i<4;i++){
    game1_Point[i].style.left=315+i*49+"px";
}
game1_GameWordArr=[];
var game1_Num0=0;
while (game1_Num0<80){
    var tempNum=Math.floor(Math.random()*game1_words.length);
    var game1_tempWord=game1_words[tempNum];
    var game1_IsIn=0;
    for (var i=0;i<game1_GameWordArr.length;i++){
        if (game1_tempWord==game1_GameWordArr[i]){
           game1_IsIn=1;     
        }
    }
    if (game1_IsIn==0){
        game1_GameWordArr.push(game1_tempWord);
        game1_Num0+=1;
    }    
}
Game1_SetScreen();
}

setInterval(function(){         
         var  game1_xtime0=Math.floor(game1_Time/100);
         var  game1_xtime1=Math.floor((game1_Time-game1_xtime0*100)/10);
         var  game1_xtime2=(game1_Time-game1_xtime0*100-game1_xtime1*10);      
       
        document.getElementById("game1_Timer0").style.backgroundPositionY=-69*game1_xtime0+"px";
        document.getElementById("game1_Timer1").style.backgroundPositionY=-69*game1_xtime1+"px";
        document.getElementById("game1_Timer2").style.backgroundPositionY=-69*game1_xtime2+"px";
        if (game1_isGameStart==1){
            game1_Time-=1;        
        if (game1_Time==0){            
            game1_MainForm.style.opacity=0;            
            if (game1_getPoints>1550){
                  Game1_ShowFinalOK();                  
            }
            else {
                 game1_MainForm_BAD.style.zIndex=120;
                 game1_MainForm_BAD.style.opacity=1;
                 game1_MainForm_BAD.style.left=50+"%";
            }
            game1_isGameStart=0;
            }        
        }
    },1000);
///////////////////// game1_words -->word arr
function Game1_SetScreen(){           
    for (var i=0;i<game1_AnsLetter.length;i++){
        game1_AnsLetter[i].style.border="0px solid black";
        game1_AnsLetter[i].style.backgroundImage="";    
    }    
    for (var i=0;i<game1_Let.length;i++){
        game1_Let[i].style.opacity=1;
    }
    var game1_MainPic=document.getElementById("game1_MainPic");
    var game1_PlayedWord=game1_GameWordArr[game1_nowWord];
    game1_MainPic.style.backgroundImage="url(pics/game1/pics/"+game1_PlayedWord+".png)";
    for (var i=0;i<game1_PlayedWord.length;i++){
        game1_AnsLetter[i].style.border="1px solid black";
    }    
}
///////////////////////////////////
var game1_isLetter=0;
var game1_CurrentAnsArr=[];
var game1_isNeedNextWord=0;
for (var i=0;i<game1_Let.length;i++){    
    game1_Let[i].onclick=function(){ 
        game1_isLetter=0;      
        this.style.opacity=0;
        var w=game1_GameWordArr[game1_nowWord];       
        for (var r=0;r<w.length;r++){
            if (w[r]==this.getAttribute("name")){
            game1_isLetter=1;         
            game1_AnsLetter[r].style.backgroundImage=this.style.backgroundImage;          
            game1_CurrentAnsArr[r]=this.getAttribute("name");                  
            }        
        }  
        if (game1_isLetter==1){
           game1_getPoints+=20;
        }
         else {
             if (game1_getPoints>0){
              game1_getPoints-=10;      
             }  
        }      
        Game1_ShowPoints();   
        Game1_ChangeWord();             
    }
     
}
function Game1_ShowPoints(){
           var points0=Math.floor(game1_getPoints/1000);
           var points1=Math.floor((game1_getPoints-points0*1000)/100);
           var points2=Math.floor((game1_getPoints-points0*1000-points1*100)/10);
           var points3=game1_getPoints-points0*1000-points1*100-points2*10;          
           document.getElementById("game1_Point0").style.backgroundPositionY=-69*points0+"px";
           document.getElementById("game1_Point1").style.backgroundPositionY=-69*points1+"px";
           document.getElementById("game1_Point2").style.backgroundPositionY=-69*points2+"px";
           document.getElementById("game1_Point3").style.backgroundPositionY=-69*points3+"px";
}
function Game1_ChangeWord(){
    if (game1_CurrentAnsArr.join("")==game1_GameWordArr[game1_nowWord]){
        if (game1_getPoints<800){
            game1_nowWord+=1;
            game1_CurrentAnsArr=[];
            Game1_SetScreen();
        }
        else {
            game1_MainForm.style.opacity=0;
            Game1_ShowFinalOK();    
        }       
    }
}
function Game1_ShowFinalOK(){
    if (game1_isGameStart==1){
                  game1_MainForm_OK.style.zIndex=120;
                  game1_MainForm_OK.style.opacity=1;
                  game1_MainForm_OK.style.left=50+"%";
                  game1_isGameStart=0;
    }
}