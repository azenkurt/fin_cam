    var but=document.getElementById("but1");
    but.onclick=function(){
        document.getElementById("intro").style.left=-1500+"px";
        document.getElementById("intro").style.opacity=0;
        document.getElementById("game").style.left=50+"%";
        var backTime=setInterval(downTime,1000);
    }
    
    var alph=["А","Б","В","Г","Д","Е","Ё","Ж","З","І","Й","К","Л","М","Н","О","П","Р","С","Т","У","Ў","Ф","Х","Ц","Ч","Ш","Ь","Q","Ы","Э","Ю","Я"];
    var letters=document.getElementsByClassName("letter");
    var row=1;
    for (q=0;q<11;q++){
        letters[q].style.left=30+q*90+"px";
        letters[q].style.backgroundImage="url(./pics/smallLetter/"+alph[q]+".png)";         
    }
     for (q=11;q<23;q++){
        letters[q].style.left=40+(q-11)*80+"px";
        letters[q].style.backgroundImage="url(./pics/smallLetter/"+alph[q]+".png)";  
        letters[q].style.top=495+"px";       
    }
    for (q=23;q<letters.length;q++){
        letters[q].style.left=10+(q-22)*85+"px";
        letters[q].style.backgroundImage="url(./pics/smallLetter/"+alph[q]+".png)";  
        letters[q].style.top=590+"px";       
    }   
    var answLet=document.getElementsByClassName("answLet");
    var innerPics=document.getElementsByClassName("innerPic");
    
    for (q=0;q<answLet.length;q++){
        answLet[q].style.left=20+q*60+"px";        
    }
   
    
    var nowQuest=0;   
    var gameWords=getRand();
    var word=gameWords[nowQuest];   
    var points=0;
     
     
    var answer=[]; 
    var picBoard=document.getElementById("pic");
    picBoard.style.backgroundImage="url(./pics/"+word+".png)";
    setNewWord();  
    
    
    for (w=0;w<33;w++){
        letters[w].onclick=function(e){  
            
            var isTrueLett=0;          
            var clicked=alph[this.id.split('t')[1]];
           console.log(clicked);   
            this.style.opacity=0;            
            for (i=0;i<word.length;i++){                            
                if (word[i].toUpperCase()==clicked){
                    isTrueLett=1;
                    answer[i]=clicked;
                    answLet[i].style.backgroundColor="transparent";
                    innerPics[i].style.backgroundImage="url(./pics/smallLetter/"+alph[this.id.split('t')[1]]+".png)";
                    innerPics[i].style.top=0+"px";
                    var t=answer.join('');   
                                       
                    if (t==word){
                        nowQuest+=1;
                        setNewWord();                        
                    }
                }               
            }  
           if (isTrueLett==1){
               points+=20;               
           }        
           else {
               if (points>10){
                 points-=10;
               }
               if (points<0){points=0;}
           }
           var points0=Math.floor(points/1000);
           var points1=Math.floor((points-points0*1000)/100);
           var points2=Math.floor((points-points0*1000-points1*100)/10);
           var points3=points-points0*1000-points1*100-points2*10;
           document.getElementById("points0").style.backgroundPositionY=-69*points0+"px";
            document.getElementById("points1").style.backgroundPositionY=-69*points1+"px";
             document.getElementById("points2").style.backgroundPositionY=-69*points2+"px";
              document.getElementById("points3").style.backgroundPositionY=-69*points3+"px";
        }
    }
    
    function setNewWord(){   
        
        if (points>1550){
            ShowFinalScreen();
        }
        else{     
        word=gameWords[nowQuest];        
        picBoard.style.backgroundImage="url(./pics/"+word+".png)";
        answer=[];
        for (i=0;i<letters.length;i++){
            letters[i].style.opacity=1;
        }
        for (q=0;q<word.length;q++){
             
             answLet[q].style.opacity=1;
             answLet[q].style.backgroundColor="lightgray";
        }
        for (i=0;i<innerPics.length;i++){
            innerPics[i].style.top=-86+"px";
        }
        }
    }  
    function  getRand() {
        var q=0;
        var randWords=[];
        while (q<50){
            var tempWord=words[Math.floor(Math.random()*words.length)];
            isIn=0;
            for (i=0;i<q;i++){
                if (tempWord==randWords[i]){
                    isIn=1;
                }
            }
            if (isIn==0){
                randWords[q]=tempWord;
                q+=1;
            }
        }
        return randWords;
    }
    var maxTime=180;
    var timer=document.getElementById("timer");    
    timer.innerHTML="Застался часу:";
    function  downTime() {      
       maxTime-=1; 
       if (maxTime==-1){
          ShowFinalScreen();
       }
      var  xtime0=Math.floor(maxTime/100);
      var  xtime1=Math.floor((maxTime-xtime0*100)/10);
      var  xtime2=(maxTime-xtime0*100-xtime1*10);      
       
       document.getElementById("block0").style.backgroundPositionY=-69*xtime0+"px";
       document.getElementById("block1").style.backgroundPositionY=-69*xtime1+"px";
       document.getElementById("block2").style.backgroundPositionY=-69*xtime2+"px";
    }
    
    var resText=document.getElementById("resText");
    
    function  ShowFinalScreen() {
           document.getElementById("game").style.left=-150+"%";
           document.getElementById("finish").style.left=50+"%";
          
    }
    var GetMarkBut=document.getElementById("ResGet");
    GetMarkBut.onclick=function(){
        var ResPoint0=Math.floor(points/1000);
        var ResPoint1=Math.floor((points-ResPoint0*1000)/100);
        var ResPoint2=Math.floor((points-ResPoint0*1000-ResPoint1*100)/10);
        var ResPoint3=points-ResPoint0*1000-ResPoint1*100-ResPoint2*10;
        
        document.getElementById("ResPoints0").style.backgroundPositionY=-69*ResPoint0+"px";
        document.getElementById("ResPoints1").style.backgroundPositionY=-69*ResPoint1+"px";
        document.getElementById("ResPoints2").style.backgroundPositionY=-69*ResPoint2+"px";
        document.getElementById("ResPoints3").style.backgroundPositionY=-69*ResPoint3+"px";
        
        var Mark=4;
        if (points>=600){Mark=5;}
        if (points>=700){Mark=6;}
        if (points>=850){Mark=7;}
        if (points>=1000){Mark=8;}
        if (points>=1250){Mark=9;}
        if (points>=1550){Mark=10;}
        
        var Mark0=Math.floor(Mark/10);
        var Mark1=Mark-Mark0*10;
        document.getElementById("ResMark0").style.backgroundPositionY=-69*Mark0+"px";
        document.getElementById("ResMark1").style.backgroundPositionY=-69*Mark1+"px";
        }