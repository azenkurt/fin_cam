var game3_MainForm=document.getElementById("game3_MainForm");

game3_StartBut.onclick=function(){
    game3_Pers.style.opacity=0;
    game3_Pers.style.zIndex=-100;

    game3_StartBut.style.zIndex=-100;
    game3_StartBut.style.opacity=0;
   
    game3_MainForm.style.opacity=1;
    game3_MainForm.style.zIndex=10;    
    game3_MainForm.style.left=50+"%";
    Game3_Start();
}

var game3_MainForm_OK=document.getElementById("game3_MainForm_OK");
var game3_MainForm_BAD=document.getElementById("game3_MainForm_BAD");

game3_MainForm_OK.onclick=function(){    
    game3_MainForm.style.opacity=0;
    game3_MainForm.style.zIndex=-100; 

    game3_MainForm_OK.style.opacity=0;
    game3_MainForm_OK.style.zIndex=-100;

    game4_Pers.style.zIndex=10;
    game4_Pers.style.opacity=1;
    
    //mainWindow.style.backgroundImage="url(pics/finalGate.png)";
    //finalGate.style.left=502+"px";    
}
game3_MainForm_BAD.onclick=function(){
    game3_MainForm.style.opacity=0;
    game3_MainForm.style.zIndex=-100;  

    game3_Pers.style.opacity=1;
    game3_Pers.style.zIndex=10;

    game3_StartBut.style.zIndex=10;
    game3_StartBut.style.opacity=1;
   
    game3_MainForm_BAD.style.opacity=0;
    game3_MainForm_BAD.style.zIndex=-100;
}

var game3_GUI=document.getElementsByClassName("game3_GUI");

for (var i=0;i<4;i++){
    game3_GUI[i].style.left=62+i*194+"px";
}

var game3_balls=document.getElementsByClassName("game3_balls");
for (var i=0;i<10;i++){
    game3_balls[i].style.left=95+i*87+"px";
}

var game3_RightAnswerCount=0;

game3_GUI[0].onclick=function(){game3_GUI_click(0)};
game3_GUI[1].onclick=function(){game3_GUI_click(1)};
game3_GUI[2].onclick=function(){game3_GUI_click(2)};
game3_GUI[3].onclick=function(){game3_GUI_click(3)};

var game3_emo=document.getElementById("game3_emo");

function game3_GUI_click(t){
    if (game3_NowWordIndex==9){       
        game3_EndGame();
    }
    else {
        if (t==game3_AnswArr[game3_NowWordIndex]){
            game3_RightAnswerCount+=1;     
            game3_balls[game3_NowWordIndex].style.backgroundImage='url(pics/game3/shield.png)';       
                game3_NowWordIndex+=1;
                game3_MainWord.innerHTML=game3_WordArr[game3_NowWordIndex];                         
        }
        else {                      
              game3_balls[game3_NowWordIndex].style.backgroundImage='url(pics/game3/axe.png)';         
                game3_NowWordIndex+=1;
                game3_MainWord.innerHTML=game3_WordArr[game3_NowWordIndex];                     
        }
    }
    if (game3_RightAnswerCount>4){
        game3_emo.style.left=-170+"px";
        game3_emo.style.width=176+"px";
        game3_emo.style.height=300+"px";
        game3_emo.style.backgroundImage='url(pics/game3/pic2.png)';
    }
    if (game3_RightAnswerCount>7){
        game3_emo.style.top=320+"px";
        game3_emo.style.width=300+"px";
        game3_emo.style.backgroundImage='url(pics/game3/pic1.png)';
    }
}    

function game3_EndGame(){
    game3_MainForm.style.left=-1000+"px";
    if(game3_RightAnswerCount>=6){      
        game3_MainForm_OK.style.zIndex=10;
        game3_MainForm_OK.style.opacity=1;        
    }
    else {
        game3_MainForm_BAD.style.zIndex=10;
        game3_MainForm_BAD.style.opacity=1;       
    }
}



var game3_words=[];
for (var i=0;i<4;i++){game3_words[i]=[]};
game3_words[0][0]='высокі';
game3_words[0][1]='разумны';
game3_words[0][2]='прыгожы';
game3_words[0][3]='зялёны';
game3_words[0][4]='сіні';
game3_words[0][5]='ружовы';
game3_words[0][6]='чырвоны';
game3_words[0][7]='белы';
game3_words[0][8]='глыбокі';
game3_words[0][9]='шаноўны';
game3_words[0][10]='паважаны';
game3_words[0][11]='далёкі';
game3_words[0][12]='блізкі';
game3_words[0][13]='малы';
game3_words[0][14]='нізкі';
game3_words[0][15]='чорны';
game3_words[0][16]='страшэнны'; 
game3_words[0][17]='пачварны';
game3_words[0][18]='прывабны';
game3_words[0][19]='лёгкі';
game3_words[0][20]='мяккі';
game3_words[0][21]='цяжкі';
game3_words[0][22]='школьны';
game3_words[0][23]='бацькоўскі';
game3_words[0][24]='дзіцячы';
game3_words[0][25]='матулін';
game3_words[0][26]='жорсткі';
game3_words[0][27]='смелы';
game3_words[0][28]='адважны';
game3_words[0][29]='труслівы'; 
game3_words[0][30]='ганебны'; 
game3_words[0][31]='прыкры';
game3_words[0][32]='непрыемны';
game3_words[0][33]='мужны';
//назоуник
game3_words[1][0]='дом';
game3_words[1][1]='сцяна';
game3_words[1][2]='дзеці';
game3_words[1][3]='настаўнік';
game3_words[1][4]='школа';
game3_words[1][5]='машына'; 
game3_words[1][6]='вучні';
game3_words[1][7]='дошка';
game3_words[1][8]='настаўніцкая'; 
game3_words[1][9]='камп’ютар'; 
game3_words[1][10]='барацьба'; 
game3_words[1][11]='дзядзька'; 
game3_words[1][12]='снег';
game3_words[1][13]='сняжынка';
game3_words[1][14]='плот';
game3_words[1][15]='сурвэтка';
game3_words[1][16]='кажан';
game3_words[1][17]='кавун';
game3_words[1][18]='гарбуз';
game3_words[1][19]='вусень';
game3_words[1][20]='слімак';
game3_words[1][21]='абрус'; 
game3_words[1][22]='гасціннасць';
game3_words[1][23]='шчасце';
game3_words[1][24]='бяда';
game3_words[1][25]='любоў';
game3_words[1][26]='каханне';
game3_words[1][27]='недавер';
game3_words[1][28]='бусел';
game3_words[1][29]='шпак';
game3_words[1][30]='лыжы'; 
game3_words[1][31]='бігудзі';
game3_words[1][32]='кансервы';
game3_words[1][33]='нож';
game3_words[1][34]='відэлец';
game3_words[1][35]='сукенка';
game3_words[1][36]='штаны'; 
game3_words[1][37]='восень'; 
game3_words[1][38]='канікулы';
game3_words[1][39]='пяцёрка';		
//дзеяслоу	
game3_words[2][0]='хадзіць';
game3_words[2][1]='пісаць';
game3_words[2][2]='чытаць';
game3_words[2][3]='ляжаць';
game3_words[2][4]='глядзець';
game3_words[2][5]='хварэць';
game3_words[2][6]='гаварыць';
game3_words[2][7]='любіць';
game3_words[2][8]='кахаць';
game3_words[2][9]='адказваць';
game3_words[2][10]='маляваць';
game3_words[2][11]='ненавідзець';
game3_words[2][12]='маўчаць';
game3_words[2][13]='скакаць';
game3_words[2][14]='спаць';
game3_words[2][15]='працаваць';
game3_words[2][16]='ехаць';
game3_words[2][17]='стаяць';
game3_words[2][18]='падкрэсліваць';
game3_words[2][19]='часаць';
game3_words[2][20]='бубніць';
game3_words[2][21]='спяваць';
game3_words[2][22]='набіраць';
game3_words[2][23]='карміць';
game3_words[2][24]='кашляць';
game3_words[2][25]='выздараўліваць';
game3_words[2][26]='радавацца';
game3_words[2][27]='будаваць';
game3_words[2][28]='думаць';
game3_words[2][29]='старацца';
game3_words[2][30]='працягваць';
game3_words[2][31]='імкнуцца';
game3_words[2][32]='лятаць';
game3_words[2][33]='шаптаць';
game3_words[2][34]='крычаць';
game3_words[2][35]='гуляць';	
//займенник
game3_words[3][0]='я';
game3_words[3][1]='нас';
game3_words[3][2]='мы';
game3_words[3][3]='нехта';
game3_words[3][4]='хтосьці';
game3_words[3][5]='сябе';
game3_words[3][6]='вы';
game3_words[3][7]='ніхто';
game3_words[3][8]='нішто';
game3_words[3][9]='нешта';
game3_words[3][10]='увесь';
game3_words[3][11]='ты';
game3_words[3][12]='яны';
game3_words[3][13]='сам';
game3_words[3][14]='усякі';
game3_words[3][15]='мой';
game3_words[3][16]='твой';
game3_words[3][17]='іншы';
game3_words[3][18]='кожны';
game3_words[3][19]='ваш';

var game3_MainWord=document.getElementById("game3_MainWord");

var game3_NowWordIndex=0;
var game3_WordArr=[];
var game3_AnswArr=[];

function Game3_Start(){   
    for (var i=0;i<10;i++){
        game3_balls[i].style.backgroundImage="";
    }
    game3_NowWordIndex=0;
    game3_RightAnswerCount=0;
    game3_WordArr=[];
    game3_AnswArr=[];
    var game3_i=0;
        while (game3_i<10){
            var game3_Num0=Math.floor(Math.random()*4);
            var game3_Num1=Math.floor(Math.random()*game3_words[game3_Num0].length);
            var game3_IsIn=0;
            for (var i=0;i<game3_WordArr.length;i++){
                if(game3_WordArr[i]==game3_words[game3_Num0][game3_Num1]){
                    game3_IsIn=1;
                }    
            }
            if (game3_IsIn==0){
                game3_WordArr.push(game3_words[game3_Num0][game3_Num1]);
                game3_AnswArr.push(game3_Num0);
                game3_i+=1;
            }
        }        
     game3_MainWord.innerHTML=game3_WordArr[game3_NowWordIndex];
}


