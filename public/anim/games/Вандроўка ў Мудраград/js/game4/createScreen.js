var fraz=document.getElementsByClassName("game4_senses");
var sens=document.getElementsByClassName("game4_frazes");
var pics=document.getElementsByClassName("game4_pics");
var answersPics=document.getElementsByClassName("game4_answerPoints");
var but=document.getElementById("game4_answerBut");

but.style.backgroundImage="url(pics/game4/pics/next.png)";

for (let i=0;i<10;i++){answersPics[i].style.left=50+80*i+"px";answersPics[i].style.backgroundImage="url(pics/game4/pics/none.png)";};

let NowQuest=0;
let NowSelectedFraz=0;
let NowSelectedSens=0;
let selectedLeftRight=[0,0];
let answFraz="";
let answSens="";
let RightPoint=0;
let isSecond=0;

var screen=document.getElementById("game4_mainScreen");

game4_Pers.onclick=()=>{
    game4_Pers.style.opacity=0;
    game4_Pers.style.zIndex=-100;

    screen.style.left=50+"%";
}


function MakeScreen(nowTaskNumber){
    pics[0].style.backgroundImage="url(pics/game4/pics/pics_"+IndexArr[nowTaskNumber]+"_0.png)";
    pics[1].style.backgroundImage="url(pics/game4/pics/pics_"+IndexArr[nowTaskNumber]+"_1.png)";

    for (let i=0;i<4;i++){fraz[i].innerHTML=RandPicsArr[nowTaskNumber][0][i];};
    for (let i=0;i<4;i++){sens[i].innerHTML=RandPicsArr[nowTaskNumber][1][i];};
    
    for (let i=0;i<4;i++){
        sens[i].style.top=400+i*50+"px";
        fraz[i].style.top=400+i*50+"px";
        
    }
    for (let i=0;i<4;i++){
        fraz[i].onclick=()=>{
        if (NowSelectedFraz!=0){NowSelectedFraz.style.border="0px solid white";} 
        NowSelectedFraz=fraz[i]; 
        NowSelectedFraz.style.border="1px solid black";
        selectedLeftRight[0]=1;
        if (selectedLeftRight[0]+selectedLeftRight[1]==2){but.style.opacity=1;}
        answFraz=(NowSelectedFraz.innerHTML);     
        }
    }
    for (let i=0;i<4;i++){
        sens[i].onclick=()=>{
        if (NowSelectedSens!=0){NowSelectedSens.style.border="0px solid white";} 
        NowSelectedSens=sens[i];
        NowSelectedSens.style.border="1px solid black";
        answSens=(NowSelectedSens.innerHTML);
        selectedLeftRight[1]=1;  
        if (selectedLeftRight[0]+selectedLeftRight[1]==2){but.style.opacity=1;} 
        }
    }
}
MakeScreen(NowQuest);

var game4_OK_Screen=document.getElementById("game4_OK");
var game4_BAD_Screen=document.getElementById("game4_BAD");

but.onclick=()=>{ 
    if (selectedLeftRight[0]+selectedLeftRight[1]==2){

        let levelRightPoint=0;
        if (answFraz==PicsArr[IndexArr[NowQuest]][2]){levelRightPoint+=3;}
        if (answSens==PicsArr[IndexArr[NowQuest]][3]){levelRightPoint+=7;}
   
           

        if (levelRightPoint==0){answersPics[NowQuest].style.backgroundImage="url(pics/game4/pics/false.png)";}
        if (levelRightPoint==10){answersPics[NowQuest].style.backgroundImage="url(pics/game4/pics/true.png)";}        

        answersPics[NowQuest].style.opacity=1;
        RightPoint+=levelRightPoint;
        levelRightPoint=0;

        selectedLeftRight[0]=0;
        selectedLeftRight[1]=0;
        answFraz="";
        answSens="";
        NowSelectedFraz.style.border="0px solid black";
        NowSelectedFraz=0;
        NowSelectedSens.style.border="0px solid black";
        NowSelectedSens=0;
        but.style.opacity=0;
      
        if (NowQuest<9){
        NowQuest+=1;       
        MakeScreen(NowQuest);
        }
        else {           
            NowQuest=0;             
            NowSelectedFraz=0;
            NowSelectedSens=0;
            selectedLeftRight[0]=0;
            selectedLeftRight[1]=0;
            answFraz="";
            answSens="";
            
             pics[0].style.backgroundImage=null;
             pics[1].style.backgroundImage=null;

            for (let i=0;i<4;i++){fraz[i].innerHTML=""};
            for (let i=0;i<4;i++){sens[i].innerHTML=""};
            document.getElementById("game4_mainScreen").style.left=-1000+"px";
            document.getElementById("game4_rezScreen").style.opacity=1;      
            document.getElementById("game4_rezScreen").style.left=50+"%";           
            document.getElementById("circle").className="progress-circle progress-"+RightPoint+"";            
            document.getElementById("circle-text").innerHTML=RightPoint;
             
            if (RightPoint>70){
                game4_OK_Screen.style.left=250+"px";                
            }
            else {
                game4_BAD_Screen.style.top=-10+"px";                               
            }
            RightPoint=0;
        }
    }    
}

game4_OK_Screen.onclick=()=>{
    game4_OK_Screen.style.left=-10000+"px";
    screen.style.left=-150+"%";
    mainWindow.style.backgroundImage="url(pics/finalGate.png)";
    finalGate.style.left=502+"px";
    document.getElementById("game4_rezScreen").style.left=-200+"%";
    document.getElementById("game4_answerBar").style.left=-200+"%";
}
game4_BAD_Screen.onclick=()=>{
    game4_BAD_Screen.style.top=5000+"px";
    for (let i=0;i<10;i++){answersPics[i].style.left=50+80*i+"px";
                           answersPics[i].style.backgroundImage="url(pics/game4/pics/none.png)";
                           answersPics[i].style.opacity=0;};
    document.getElementById("game4_rezScreen").style.opacity=0;  
    document.getElementById("game4_rezScreen").style.left=-150+"%";                        
    document.getElementById("game4_mainScreen").style.left=50+"%";

    RandPicsArr=[];
    NowRanArrIndex=0;
    IndexArr=[];
    while (NowRanArrIndex<10){
        let RandIndex=Math.floor(Math.random()*26);
        let isFind=0;
        for (let j=0;j<IndexArr.length;j++){
            if (IndexArr[j]==RandIndex){
                isFind=1;
                break;
            }
        }
        if (isFind==0){IndexArr[NowRanArrIndex]=RandIndex;                    
                        NowRanArrIndex+=1;};
    }
    for (let i=0;i<10;i++){
        RandPicsArr[i]=PicsArr[IndexArr[i]];
        shuffle(RandPicsArr[i][0]);
        shuffle(RandPicsArr[i][1]);
    }    
    isSecond=1;    
    MakeScreen(NowQuest);
 }