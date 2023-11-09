const b1 = document.getElementById("l1");
const b2 = document.getElementById("l2");
const b3 = document.getElementById("l3");
const m = document.getElementById("message");
var b4 = 0;
var b5 = 0;
var f1 = false;
var f2 = false;
var basement = false;
var currentLocation = 0;
if (document.title == "Floor 1"){
    b4 = document.getElementById("l4");
    currentLocation = "entrance";
    f1 = true;
    
}
if (document.title == "Floor 2"){
    b5 = document.getElementById("l5");
    currentLocation = "floor2hallway";
    f2 = true;
}
if (document.title == "basement" ){
    currentLocation = basement
    basement = true;

}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function buttonClicked( innerHTML){
    if((innerHTML == "entrance") && f1){

        if(f2){
            window.location.replace("level-2-JS-projectd/lev.2-js-proj-v1.5d/filesd/htmld/floor1.html");
        }
        else{
            document.body.style.background ="url(level-2-JS-project/lev.2-js-proj-v1.5/assets/locations/base-locations/hallway.png)" ;
           
        }
        b1.innerHTML = "diningroom";
        b2.innerHTML = "bathroom";
        b3.innerHTML = "closet";
        b4.innerHTML = "floor2hallway";
        currentLocation = "entrance";
    }
    else if ((innerHTML == "diningroom") && f1){
        var result = getRandomInt(2);
        if(result = 0){
            m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
            document.body.style.background = "url(level-2-JS-project/lev.2-js-proj-v1.5/assets/locations/death-locations/diningroom-bad.png)";

        }
        else{
            m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
            document.body.style.background = "url(level-2-JS-project/lev.2-js-proj-v1.5/assets/locations/safe-locations/diningroom-good.png)";

        }
        
        b1.innerHTML = "none";
        b2.innerHTML = "none";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "diningroom";
    }
    else if((innerHTML == "bathroom") && f1){
        document.body.style.background ="url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/base-locationsd/bathroom.png)" ;
        b1.innerHTML = "messy room";
        b2.innerHTML = "entrance";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "bathroom";
    }
    else if ((innerHTML == "closet") && f1){
        var result = getRandomInt(2);
        if(result = 0){
            m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/death-locationsd/closet-bad.png)";

        }
        else{
            m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/safe-locationsd/closet-good.png)";

        }
        
        b1.innerHTML = "none";
        b2.innerHTML = "none";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "closet";
    }
    else if((innerHTML == "messy room") && f1){
        document.body.style.background ="url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/base-locationsd/messy-room.webp)" ;
        b1.innerHTML = "bathroom";
        b2.innerHTML = "trap door";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "messy room";
    }
    else if((innerHTML == "messy room") && f1){
        document.body.style.background ="url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/base-locationsd/messy-room.webp)" ;
        b1.innerHTML = "bathroom";
        b2.innerHTML = "basement";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "messy room";
    }
    else if((innerHTML == "floor2hallway")){
        window.location.replace("level-2-JS-projectd/lev.2-js-proj-v1.5d/filesd/htmld/floor2.html") ;
        b1.innerHTML = "entrance";
        b2.innerHTML = "attic";
        b3.innerHTML = "bedroom";
        b4.innerHTML = "spire";

        currentLocation = "floor2hallway";
    }
    else if ((innerHTML == "bedroom") && f2){
        var result = getRandomInt(2);
        if(result = 0){
            m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/death-locationsd/bedroom-bad.png)";

        }
        else{
            m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/safe-locationsd/bedroom-good.png)";

        }
        
        b1.innerHTML = "none";
        b2.innerHTML = "none";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "bedroom";
    }
    else if ((innerHTML == "spire") && f2){
        window.location.replace("level-2-JS-projectd/lev.2-js-proj-v1.5d/filesd/htmld/spire.html");
        var result = getRandomInt(2);
        if(result = 0){
            m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/death-locationsd/bedroom-bad.png)";

        }
        else{
            m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/safe-locationsd/bedroom-good.png)";

        }
        
        b1.innerHTML = "none";
        b2.innerHTML = "none";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "spire";
    }
    else if ((innerHTML == "attic") && f2){
        window.location.replace("level-2-JS-projectd/lev.2-js-proj-v1.5d/filesd/htmld/attic.html");
        var result = getRandomInt(2);
        if(result = 0){
            m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/safe-locationsd/attic-good.png)";

        }
        else{
            m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/safe-locationsd/attic-good.png)";

        }
        
        b1.innerHTML = "none";
        b2.innerHTML = "none";
        b3.innerHTML = "none";
        b4.innerHTML = "none";

        currentLocation = "attic";
    }
    else if((innerHTML == "basement")){
    
            if(f1){
                window.location.replace("level-2-JS-projectd/lev.2-js-proj-v1.5d/filesd/htmld/basement.html");
            }
            else{
                document.body.style.background ="url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/base-locationsd/basement1.png)" ;
               
            }
            b1.innerHTML = "basement2";
            b2.innerHTML = "basement3";
            b3.innerHTML = "basement4";
           
            currentLocation = "basement";
        }
    else if((innerHTML == "basement2") && basement){
            document.body.style.background ="url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/base-locationsd/basement2.png)" ;
            b1.innerHTML = "basement";
            b2.innerHTML = "basement4";
            b3.innerHTML = "basement3";
          
    
            currentLocation = "basement2";
    }
    else if((innerHTML == "basement3") && basement){
        document.body.style.background ="url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/base-locationsd/basement3.png)" ;
        b1.innerHTML = "basement";
        b2.innerHTML = "basement4";
        b3.innerHTML = "basement2";
      

        currentLocation = "basement3";
    }
    else if ((innerHTML == "basement4") && basement){
        var result = getRandomInt(2);
        if(result = 0){
            m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/safe-locationsd/basement4-good.png)";

        }
        else{
            m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
            document.body.style.background = "url(level-2-JS-projectd/lev.2-js-proj-v1.5d/assetsd/locationsd/safe-locationsd/basement4-good.png)";

        }
        currentLocation = "basement4";
    }


    
}