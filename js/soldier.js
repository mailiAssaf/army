function Soldier(id, name, pakal, profile){
    this.id = id;
    this.name = name;
    this.pakal = pakal;
    this.profile = profile;
    
}


Soldier.prototype.run = function(){
    console.log("I am running!");    
}

Soldier.prototype.shoot = function(){
    console.log("I am shooting!");
}

Soldier.prototype.followOrder = function(){
    console.log("I am following my reasonable orders!");
}
