/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.builder');
 * mod.thing == 'a thing'; // true
 */

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

        if(creep.memory.building && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
        }
        if(!creep.memory.building && creep.store.getFreeCapacity() == 0) {
            creep.memory.building = true;
            creep.say('🚧 build');
        }

        if(creep.memory.building) {
            var consSite = creep.room.find(FIND_MY_CONSTRUCTION_SITES);
            
            const repairables = creep.room.find(FIND_MY_STRUCTURES, {
                filter: object => object.hits < object.hitsMax
            });
            
            repairables.sort((a,b) => a.hits - b.hits);
            
            var towers = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_TOWER) &&
                        structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            

            if(consSite.length > 0) 
            {
                if(creep.build(consSite[0]) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(consSite[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else if(repairables.length > 0) 
            {
                if(creep.repair(repairables[0]) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(repairables[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else if(towers.length > 0)
            {
                if(creep.transfer(towers[0],RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) 
                {
                    creep.moveTo(towers[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
            else 
            {
                var spawns = creep.room.find(FIND_MY_SPAWNS);
                if(spawns[0].renewCreep(creep) == ERR_NOT_IN_RANGE)
                {
                    creep.moveTo(spawns[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        else {
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
        }
    }
};

module.exports = roleBuilder;