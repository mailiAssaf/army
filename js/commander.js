function Commander(id, name, pakal, profile, rank, numberOfSoliders) {
    this.rank = rank;
    this.numberOfSoliders = numberOfSoliders;
    Soldier.call(this, id, name, pakal, profile);
}

Commander.prototype = Object.create(Soldier.prototype);
Commander.prototype.constructor = Commander;

Commander.prototype.giveOrder = function(order){
    console.log("Everyone follow: " + order);
}

Commander.prototype.makeSolidersRun = function(){
    console.log("Soldiers - run!!!!!!!!!!!!!!!");
}
