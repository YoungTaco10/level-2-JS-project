document.addEventListener("DOMContentLoaded", function () {
    console.log("3");
    console.log("2");
        b1 = document.getElementById("l1");
        b2 = document.getElementById("l2");
        b3 = document.getElementById("l3");
        m = document.getElementById("Message");
        b4 = 0;
        b5 = 0;
        f1 = false;
        f2 = false;
        basement = false;
        currentLocation = 0;
        if (document.title === "Floor 1"){
            b4 = document.getElementById("l4");
            b5 = document.getElementById("l5");
            currentLocation = "entrance";
            f1 = true;
            console.log("made it to floor 1");
        }
        if (document.title === "Floor 2"){
            b4 = document.getElementById("l4");
            b5 = document.getElementById("l5");
            currentLocation = "floor2hallway";
            f2 = true;
        }
        if (document.title === "Basement" ){
            currentLocation = basement
            var result = getRandomInt(2);
            if(result === 0){
                m.innerHTML = "ZOMBIES IN THE BASEMENT UH OH UH OH UH OH UH OH";
                document.body.style.background = "url(../../assets/locations/death-locations/basement-bad.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            else{
                m.innerHTML = "The trap door closes behind you, at least you survived the night";
                document.body.style.background = "url(../../assets/locations/safe-locations/basement6-good.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
        }
        if (document.title === "Attic" ){
            var result = getRandomInt(2);
            if(result === 0){
                m.innerHTML = "You look at the green man and you know he will defeat you in battle, UH OH, this is bad.";
                document.body.style.background = "url(../../assets/locations/death-locations/attic-bad.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            else{
                m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
                document.body.style.background = "url(../../assets/locations/safe-locations/attic-good.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            currentLocation="attic";
        }
        if (document.title === "Spire" ){
            var result = getRandomInt(2);
            if(result === 0){
                m.innerHTML = "DRAKEULAAAAA";
                document.body.style.background = "url(../../assets/locations/death-locations/spire-bad.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            else{
                m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
                document.body.style.background = "url(../../assets/locations/safe-locations/spire-good.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            currentLocation="spire";
        }
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }


    function buttonClicked(innerHTML){
        console.log("1");
        if ((innerHTML === "Dining Room") && f1){
            var result = getRandomInt(2);
            if(result === 0){
                m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
                document.body.style.background = "url(../../assets/locations/death-locations/diningroom-bad.png)";
                document.body.style.webkitBackgroundSize = "cover";
        document.body.style.mozBackgroundSize = "cover";
        document.body.style.oBackgroundSize = "cover";
        document.body.style.backgroundSize = "cover";
            }
            else{
                m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
                document.body.style.background = "url(../../assets/locations/safe-locations/diningroom-good.png)";
                document.body.style.webkitBackgroundSize = "cover";
        document.body.style.mozBackgroundSize = "cover";
        document.body.style.oBackgroundSize = "cover";
        document.body.style.backgroundSize = "cover";
            }
            
            b1.innerHTML = "none";
            b2.innerHTML = "none";
            b3.innerHTML = "none";
            b4.innerHTML = "none";

            currentLocation = "diningroom";
        }
        else if ((innerHTML === "Entrance") && f1){
            window.location.replace("../html/floor1.html");
        }
        else if((innerHTML === "Bathroom") && f1){
            document.body.style.background ="url(../../assets/locations/base-locations/bathroom.png)" ;
            document.body.style.webkitBackgroundSize = "cover";
        document.body.style.mozBackgroundSize = "cover";
        document.body.style.oBackgroundSize = "cover";
        document.body.style.backgroundSize = "cover";
            b1.innerHTML = "Messy Room";
            b2.innerHTML = "Entrance";
            b3.innerHTML = "none";
            b4.innerHTML = "none";
            m.innerHTML = "You are in a bathroom, there seems to be a crack to another room in the wall.";
            currentLocation = "bathroom";
        }
        else if ((innerHTML === "Closet") && f1){
            var result = getRandomInt(2);
            if(result === 0){
                m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
                document.body.style.background = "url(../../assets/locations/death-locations/closet-bad.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            else{
                m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
                document.body.style.background = "url(../../assets/locations/safe-locations/closet-good.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            
            b1.innerHTML = "none";
            b2.innerHTML = "none";
            b3.innerHTML = "none";
            b4.innerHTML = "none";

            currentLocation = "closet";
        }
        else if((innerHTML === "Messy Room") && f1){
            document.body.style.background ="url(../../assets/locations/base-locations/messy-room.webp)" ;
            document.body.style.webkitBackgroundSize = "cover";
        document.body.style.mozBackgroundSize = "cover";
        document.body.style.oBackgroundSize = "cover";
        document.body.style.backgroundSize = "cover";
            b1.innerHTML = "Bathroom";
            b2.innerHTML = "Trap Door";
            b3.innerHTML = "none";
            b4.innerHTML = "none";
            m.innerHTML = "Messy messy room, is that a trapdoor?";
            currentLocation = "messy room";
        }

        else if ((innerHTML === "Master Bedroom") && f2){
            console.log("MBMB");
            var result = getRandomInt(2);
            if(result === 0){
                m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
                document.body.style.background = "url(../../assets/locations/death-locations/bedroom-bad.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            else{
                m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
                document.body.style.background = "url(../../assets/locations/safe-locations/bedroom-good.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            
            b1.innerHTML = "none";
            b2.innerHTML = "none";
            b3.innerHTML = "none";
            b4.innerHTML = "none";

            currentLocation = "bedroom";
        }

        else if ((innerHTML === "Master Bathroom") && f2){
            console.log("MBA");
            var result = getRandomInt(2);
            b1.innerHTML = "none";
            b2.innerHTML = "none";
            b3.innerHTML = "none";
            b4.innerHTML = "none";
            b5.innerHTML = "none";
            if(result === 0){
                m.innerHTML = "WHY IS BRO IN THE BATHROOM, your sanity runs away from your consciousness as you drift into nothing.";
                document.body.style.background = "url(../../assets/locations/death-locations/bathroom-bad.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }
            else{
                m.innerHTML = "There is a lot of action outside of the bathroom, but in the end you hear birds chirping, you survived the night.";
                document.body.style.background = "url(../../assets/locations/safe-locations/bathroom-good.png)";
                document.body.style.webkitBackgroundSize = "cover";
                document.body.style.mozBackgroundSize = "cover";
                document.body.style.oBackgroundSize = "cover";
                document.body.style.backgroundSize = "cover";
            }

            currentLocation = "mbathroom";
        }

        // else if(innerHTML === "Other Hallway"){
        //     console.log("OHOH");
        //     document.body.style.background ="url(../../assets/locations/base-locations/spirehallway.png)" ;
        //     document.body.style.webkitBackgroundSize = "cover";
        //     document.body.style.mozBackgroundSize = "cover";
        //     document.body.style.oBackgroundSize = "cover";
        //     document.body.style.backgroundSize = "cover";
        //     b1.innerHTML = "Spire";
        //     b2.innerHTML = "Back";
        //     b3.innerHTML = "none";
        //     b4.innerHTML = "none";

        //     currentLocation = "other hallway";
        // }

        // else if((innerHTML === "Back") && f2){
        //     window.location.href='../html/floor2.html'
        // }

        else if ((innerHTML === "Spire") && f2){
            window.location.replace("../html/spire.html");
        }
        else if ((innerHTML === "Up to Attic") && f2){
            window.location.replace("../html/attic.html");
           
        }
        else if((innerHTML === "Trap Door" || innerHTML === "Basement")){
            window.location.replace("../html/basement.html");
            }
        // else if((innerHTML === "Door 1") && basement){
        //         document.body.style.background ="url(../../assets/locations/base-locations/basement2.png)" ;
        //         document.body.style.webkitBackgroundSize = "cover";
        //         document.body.style.mozBackgroundSize = "cover";
        //         document.body.style.oBackgroundSize = "cover";
        //         document.body.style.backgroundSize = "cover";
        //         b1.innerHTML = "Basement";
        //         b2.innerHTML = "Basement 4";
        //         b3.innerHTML = "Basement 3";

        //         currentLocation = "basement2";
        // }
        // else if((innerHTML === "Door 2") && basement){
        //     document.body.style.background ="url(../../assets/locations/base-locations/basement3.png)" ;
        //     document.body.style.webkitBackgroundSize = "cover";
        // document.body.style.mozBackgroundSize = "cover";
        // document.body.style.oBackgroundSize = "cover";
        // document.body.style.backgroundSize = "cover";
        //     b1.innerHTML = "Basement";
        //     b2.innerHTML = "Basement 4";
        //     b3.innerHTML = "Basement 2";
        

        //     currentLocation = "basement 3";
        // }
        // else if ((innerHTML === "Basement 4") && basement){
        //     var result = getRandomInt(2);
        //     if(result === 0){
        //         m.innerHTML = "You look at the horrifying creature before you and know your life will come to an end.";
        //         document.body.style.background = "url(../../assets/locations/safe-locations/basement4-good.png)";
        //         document.body.style.webkitBackgroundSize = "cover";
        //         document.body.style.mozBackgroundSize = "cover";
        //         document.body.style.oBackgroundSize = "cover";
        //         document.body.style.backgroundSize = "cover";
        //     }
        //     else{
        //         m.innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
        //         document.body.style.background = "url(../../assets/locations/safe-locations/basement4-good.png)";
        //         document.body.style.webkitBackgroundSize = "cover";
        //         document.body.style.mozBackgroundSize = "cover";
        //         document.body.style.oBackgroundSize = "cover";
        //         document.body.style.backgroundSize = "cover";
        //     }
        //     currentLocation = "basement4";
        // }
    }
    b1.addEventListener("click", function () {
        buttonClicked(b1.innerHTML);
    });

    b2.addEventListener("click", function () {
        buttonClicked(b2.innerHTML);
    });

    b3.addEventListener("click", function () {
        buttonClicked(b3.innerHTML);
    });

    b4.addEventListener("click", function () {
        buttonClicked(b4.innerHTML);
    });

    b5.addEventListener("click", function () {
        buttonClicked(b4.innerHTML);
    });
});