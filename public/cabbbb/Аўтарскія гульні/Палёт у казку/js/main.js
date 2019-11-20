var introScreen=document.getElementById("intro");
var foneScreen=document.getElementById("fones");
var gameScreen=document.getElementById("game");


//part0 - startGame and select backFone
var StartBut=document.getElementById("startBut");

var smallFones=document.getElementsByClassName("smallFon");

StartBut.onclick=function () {
    introScreen.style.left=-150+"%";
    foneScreen.style.left=50+"%";
}

for (var i=0;i<smallFones.length;i++){
    smallFones[i].style.backgroundImage="url(./pics/fonSmall/"+smallFones[i].id+".png)";
}

smallFones[0].style.left=100+"px";smallFones[0].style.top=50+"px";
smallFones[1].style.left=250+"px";smallFones[1].style.top=50+"px";
smallFones[2].style.left=400+"px";smallFones[2].style.top=50+"px";
smallFones[3].style.left=550+"px";smallFones[3].style.top=50+"px";
smallFones[4].style.left=700+"px";smallFones[4].style.top=50+"px";
smallFones[5].style.left=850+"px";smallFones[5].style.top=50+"px";

smallFones[6].style.left=100+"px";smallFones[6].style.top=150+"px";
smallFones[7].style.left=250+"px";smallFones[7].style.top=150+"px";
smallFones[8].style.left=400+"px";smallFones[8].style.top=150+"px";
smallFones[9].style.left=550+"px";smallFones[9].style.top=150+"px";
smallFones[10].style.left=700+"px";smallFones[10].style.top=150+"px";
smallFones[11].style.left=850+"px";smallFones[11].style.top=150+"px";

smallFones[12].style.left=100+"px";smallFones[12].style.top=250+"px";
smallFones[13].style.left=250+"px";smallFones[13].style.top=250+"px";
smallFones[14].style.left=400+"px";smallFones[14].style.top=250+"px";
smallFones[15].style.left=550+"px";smallFones[15].style.top=250+"px";
smallFones[16].style.left=700+"px";smallFones[16].style.top=250+"px";
smallFones[17].style.left=850+"px";smallFones[17].style.top=250+"px";

smallFones[18].style.left=100+"px";smallFones[18].style.top=350+"px";
smallFones[19].style.left=250+"px";smallFones[19].style.top=350+"px";
smallFones[20].style.left=400+"px";smallFones[20].style.top=350+"px";
smallFones[21].style.left=550+"px";smallFones[21].style.top=350+"px";
smallFones[22].style.left=700+"px";smallFones[22].style.top=350+"px";
smallFones[23].style.left=850+"px";smallFones[23].style.top=350+"px";

smallFones[24].style.left=100+"px";smallFones[24].style.top=450+"px";
smallFones[25].style.left=250+"px";smallFones[25].style.top=450+"px";
smallFones[26].style.left=400+"px";smallFones[26].style.top=450+"px";
smallFones[27].style.left=550+"px";smallFones[27].style.top=450+"px";
smallFones[28].style.left=700+"px";smallFones[28].style.top=450+"px";
smallFones[29].style.left=850+"px";smallFones[29].style.top=450+"px";


for (var i=0;i<smallFones.length;i++){
    smallFones[i].onclick=function () {
        gameScreen.style.backgroundImage="url(./pics/fon/"+this.id+".png)";
        foneScreen.style.left=-150+"%";
        gameScreen.style.left=50+"%";
    }
}
//part1-main game logic

var searchText=document.getElementById("searchingText");
var searchBut=document.getElementById("searchBut");

var ImageTemp=new Image();
document.getElementById("intro").appendChild(ImageTemp);   
 
searchBut.onclick=function(){
    if (ActivePic.length>0){
    var isFind=0;
    for (i=0;i<words.length;i++){
        if (words[i]==searchText.value.replace(' ','_').toUpperCase()){
            isFind=1;
            break;
        }
    }
    if (isFind==1){        
        ImageTemp.src="./pics/"+searchText.value.replace(' ','_').toUpperCase()+".png"; 
         ImageTemp.onload=function(){
            createPic(searchText.value.replace(' ','_').toUpperCase()); 
        }           
     }    
    } 
    else {
        searchBut.style.opacity=0;
        searchText.style.opacity=0;                
        smileCaller.style.left=850+"px";
    }
}
var ActivePic=[document.getElementById("pica0"),document.getElementById("pica1"),document.getElementById("pica2"),document.getElementById("pica3"),document.getElementById("pica4"),document.getElementById("pica5"),document.getElementById("pica6"),document.getElementById("pica7"),document.getElementById("pica8"),document.getElementById("pica9")];
var ShowedPic=[];

var createPic=function(picName){  
    var pica=ActivePic[0];  
    gameScreen.appendChild(pica);
    pica.style.width=ImageTemp.offsetWidth+"px";
    pica.style.height=ImageTemp.offsetHeight+"px";
    pica.style.opacity=1;
    pica.style.left=50+"%";
    pica.style.top=50+"%";
    pica.style.scale=1;
    pica.style.backgroundImage="url(./pics/"+picName+".png)";
    pica.style.marginLeft=-1*ImageTemp.offsetWidth/2+"px";
    pica.style.marginTop=-1*ImageTemp.offsetHeight/2+"px";  
    qqqqqqqqqqq=ActivePic.shift();    
    ShowedPic.push(pica);    
    pica.style.zIndex=maxZIndex;
    maxZIndex+=1;    
}
//dragging pica
var clickedElement=1;
var maxZIndex=50;

document.getElementById("pica0").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica1").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica2").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica3").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica4").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica5").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica6").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica7").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica8").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}
document.getElementById("pica9").onmousedown=function(){clickedElement=this;this.style.zIndex=maxZIndex;maxZIndex+=1;}

window.onmousemove=function(e){
    if (clickedElement!=1){      
        clickedElement.style.left=e.pageX-gameScreen.offsetLeft+"px";
        clickedElement.style.top=e.pageY-gameScreen.offsetTop+"px";       
    }    
}
window.onmouseup=function(e){        
    if ((e.pageX-gameScreen.offsetLeft>950)&&(e.pageY-gameScreen.offsetTop<50)){
        clickedElement.style.opacity=0;        
        for (i=0;i<ShowedPic.length;i++){
            if (ShowedPic[i]==clickedElement){
                qqqq=ShowedPic.splice(i,1);
                break;
            }
        }
        ActivePic.push(clickedElement);       
    }    
    clickedElement=1;   
}


var scale=1
document.getElementById("pica0").onmousewheel=function(e){
    if (e.deltaY>0){if (pic0scale<2){pic0scale+=0.05;}}
    else { if (pic0scale>0.2){pic0scale-=0.05;}}
    document.getElementById("pica0").style.transform="scale("+pic0scale+") rotate("+pic0deg+"deg)";
}
document.getElementById("pica1").onmousewheel=function(e){
     if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica1").style.transform="scale("+scale+")  rotate("+pic1deg+"deg)";
}
document.getElementById("pica2").onmousewheel=function(e){
    if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica2").style.transform="scale("+scale+")  rotate("+pic2deg+"deg)";
}
document.getElementById("pica3").onmousewheel=function(e){
     if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica3").style.transform="scale("+scale+")  rotate("+pic3deg+"deg)";
}
document.getElementById("pica4").onmousewheel=function(e){
     if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica4").style.transform="scale("+scale+")  rotate("+pic4deg+"deg)";
}
document.getElementById("pica5").onmousewheel=function(e){
   if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica5").style.transform="scale("+scale+")  rotate("+pic5deg+"deg)";
}
document.getElementById("pica6").onmousewheel=function(e){
    if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica6").style.transform="scale("+scale+")  rotate("+pic6deg+"deg)";
}
document.getElementById("pica7").onmousewheel=function(e){
   if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica7").style.transform="scale("+scale+")  rotate("+pic7deg+"deg)";
}
document.getElementById("pica8").onmousewheel=function(e){
    if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica8").style.transform="scale("+scale+")  rotate("+pic8deg+"deg)";
}
document.getElementById("pica9").onmousewheel=function(e){
   if (e.deltaY>0){if (scale<2){scale+=0.05;}}
    else { if (scale>0.2){scale-=0.05;}}
    document.getElementById("pica9").style.transform="scale("+scale+")  rotate("+pic9deg+"deg)";
}
var pic0deg=0;
var pic0scale=1;

var pic1deg=0;
var pic1scale=1;

var pic2deg=0;
var pic2scale=1;

var pic3deg=0;
var pic3scale=1;

var pic4deg=0;
var pic4scale=1;

var pic5deg=0;
var pic5scale=1;

var pic6deg=0;
var pic6scale=1;

var pic7deg=0;
var pic7scale=1;

var pic8deg=0;
var pic8scale=1;

var pic9deg=0;
var pic9scale=1;
document.oncontextmenu=function(){return false;}
document.getElementById("pica0").oncontextmenu=function(e){
    pic0deg+=20;
    document.getElementById("pica0").style.webkitTransform="rotate("+pic0deg+"deg) scale("+pic0scale+")";
}
document.getElementById("pica1").oncontextmenu=function(e){
    pic1deg+=20;
    document.getElementById("pica1").style.webkitTransform="rotate("+pic1deg+"deg) scale("+pic1scale+")";
}
document.getElementById("pica2").oncontextmenu=function(e){
    pic2deg+=20;
    document.getElementById("pica2").style.webkitTransform="rotate("+pic2deg+"deg) scale("+pic2scale+")";
}
document.getElementById("pica3").oncontextmenu=function(e){
    pic3deg+=20;
    document.getElementById("pica3").style.webkitTransform="rotate("+pic3deg+"deg) scale("+pic3scale+")";
}
document.getElementById("pica4").oncontextmenu=function(e){
    pic4deg+=20;
    document.getElementById("pica4").style.webkitTransform="rotate("+pic4deg+"deg) scale("+pic4scale+")";
}
document.getElementById("pica5").oncontextmenu=function(e){
    pic5deg+=20;
    document.getElementById("pica5").style.webkitTransform="rotate("+pic5deg+"deg) scale("+pic5scale+")";
}
document.getElementById("pica6").oncontextmenu=function(e){
    pic6deg+=20;
    document.getElementById("pica6").style.webkitTransform="rotate("+pic6deg+"deg) scale("+pic6scale+")";
}
document.getElementById("pica7").oncontextmenu=function(e){
    pic7deg+=20;
    document.getElementById("pica7").style.webkitTransform="rotate("+pic7deg+"deg) scale("+pic7scale+")";
}
document.getElementById("pica8").oncontextmenu=function(e){
    pic8deg+=20;
    document.getElementById("pica8").style.webkitTransform="rotate("+pic8deg+"deg) scale("+pic8scale+")";
}
document.getElementById("pica9").oncontextmenu=function(e){
    pic9deg+=20;
    document.getElementById("pica9").style.webkitTransform="rotate("+pic9deg+"deg) scale("+pic9scale+")";
}
var vocaber=document.getElementById('vacaber');
var vocaberDiv=document.getElementById('vocab');


vocaber.onclick=function(){
    vocaberDiv.style.left=50+'%';
}

var translater=document.getElementById('translate');
var translaterRu=document.getElementById('vocabRu');
var translaterBy=document.getElementById('vocabBy');

var isTranslated=0;
translater.onclick=function(){
   
    if (isTranslated==0){
        var xx=translaterRu.value.toUpperCase();    
         
        for (var i=0;i<bel.length;i++){
            if (xx==bel[i]){
                console.log(xx) ;  
                translaterBy.value=words[i].toLowerCase();
                translater.value='Закрыць!';
                isTranslated=1;
                break;                
            }
        }
    }
    else {
      vocaberDiv.style.left=150+'%';
      translater.value='Перакласці';
      translaterBy.value='';
      translaterRu.value=''; 
      isTranslated=0;       
    }
}
var vocabMid=document.getElementById('vocabMid');
vocabMid.onclick=function () {
      vocaberDiv.style.left=150+'%';
      translater.value='Перакласці';
      translaterBy.value='';
      translaterRu.value=''; 
      isTranslated=0;  
}

var smileCaller=document.getElementById('smile0');
smileCaller.onclick=function () {
    document.getElementById('smileDiv').style.top=470+'px';
}
document.getElementById('smile1').onclick=function () {smileCaller.style.backgroundImage='url(./pics/smiles/q1.gif)';document.getElementById('smileDiv').style.top=101+"%";}
document.getElementById('smile2').onclick=function () {smileCaller.style.backgroundImage='url(./pics/smiles/q2.gif)';document.getElementById('smileDiv').style.top=101+"%";}
document.getElementById('smile3').onclick=function () {smileCaller.style.backgroundImage='url(./pics/smiles/q3.gif)';document.getElementById('smileDiv').style.top=101+"%";}
document.getElementById('smile4').onclick=function () {smileCaller.style.backgroundImage='url(./pics/smiles/q4.gif)';document.getElementById('smileDiv').style.top=101+"%";}
document.getElementById('smile5').onclick=function () {smileCaller.style.backgroundImage='url(./pics/smiles/q5.gif)';document.getElementById('smileDiv').style.top=101+"%";}
document.getElementById('smile6').onclick=function () {smileCaller.style.backgroundImage='url(./pics/smiles/q6.gif)';document.getElementById('smileDiv').style.top=101+"%";}
document.getElementById('smile7').onclick=function () {smileCaller.style.backgroundImage='url(./pics/smiles/q7.gif)';document.getElementById('smileDiv').style.top=101+"%";}
