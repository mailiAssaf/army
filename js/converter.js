function Converter(){

}

Converter.prototype.convertSoldierToCommander = function(soldier, rank, numberOfSoldiers){
    return new Commander(soldier.id, soldier.name, soldier.pakal, soldier.profile, rank, numberOfSoldiers);
}

Converter.prototype.convertCommanderToOfficer = function(commander, officerRank, numberOfCommanders){
    return new Officer(commander.id, 
    commander.name, 
    commander.pakal, 
    commander.profile, 
    commander.rank, 
    commander.numberOfSoldiers,
    officerRank,
    numberOfCommanders);
}