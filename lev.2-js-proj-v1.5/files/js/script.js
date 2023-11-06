


class Location{

    constructor(name, text, locations, isSpecial ){
        this.name = name;
        this.text = text;

        this.locations = locations;
        this.isSpecial = isSpecial;
    }
    numButtons = this.locations.length;

  
}
var currentLocation = new Location();
buttons = ["l1", "l2", "l3", "l4", "l5"];
var hallway = new Location(hallway, Hallway,["floor2hallway", "bathroom", "cleaning closet", "Dining Room"], false )

function locationDisplay( loc){
    if(loc.isSpecial){
        if((Math.floor(Math.random() * 2)) == 0 ){
            document.body.style.background = (loc + "-good.png");
            document.getElementById("Message").innerHTML = " As you watch the sun come up through the trees around the mansion, you realize that you survived the night.";
        }
        else{
            document.body.style.background = (loc + "-bad.png");
            document.getElementById("Message").innerHTML = " As you see the horrific creature in front of you, you realize your life will come to an end.";

        }
    }
    else{
        document.body.style.background = loc + ".png";
        for ( i = 0; i < loc.locations.length; i++){
            document.getElementById(buttons[i]).innerHTML = loc.locations[i].name;
        }
    }
}

function changeLocation( id){

     num = 0;
    for (i = 0; i < buttons.length; i++){
        if (id == buttons[i]){
            num = i;
        }
    }
    locationDisplay(currentLocation.locations[num])
    currentLocation = currentLocation.locations[num];



}
