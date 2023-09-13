/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester');
 * mod.thing == 'a thing'; // true
 */

var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
        
        if(creep.memory.harvesting && creep.store[RESOURCE_ENERGY] == 0) 
        {
            creep.memory.harvesting = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.harvesting && creep.store.getFreeCapacity() == 0) 
        {
            creep.memory.harvesting = true;
            creep.say('⛽  store');
        }
        
        if(creep.memory.harvesting)
        {
            var targets = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_EXTENSION ||
                        structure.structureType == STRUCTURE_TOWER ||
                        structure.structureType == STRUCTURE_SPAWN) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            
            console.log(targets)
            if(targets.length > 0) {
                if(creep.transfer(targets[targets.length - 1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[targets.length - 1], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else {
                var spawns = creep.room.find(FIND_MY_SPAWNS);
                if(spawns[0].renewCreep(creep) == ERR_NOT_IN_RANGE){
                    creep.moveTo(spawns[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else
        {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleHarvester;