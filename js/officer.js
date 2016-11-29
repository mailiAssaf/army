function Officer(id, name, pakal, profile, rank, numberOfSoliders, officerRank, numberOfCommanders) {
    this.officerRank = officerRank;
    this.numberOfCommanders = numberOfCommanders;
    Commander.call(this, id, name, pakal, profile, rank, numberOfSoliders);    
}


Officer.prototype = Object.create(Commander.prototype);
Officer.prototype.constructor = Officer;


Officer.prototype.runShootingRange = function(){
    console.log("everyone shoot to the targets!");
}


