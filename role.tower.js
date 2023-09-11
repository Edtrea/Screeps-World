/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.tower');
 * mod.thing == 'a thing'; // true
 */

var roleTower = {
    run: function(tower) {
        var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        
        if(closestHostile) 
        {
            
            if(closestHostile.owner["username"] == "Invader")
            {
                tower.attack(closestHostile);
                return
            }
        }
        
        
        const repairables = tower.room.find(FIND_STRUCTURES, 
            {
                filter: object => object.hits < object.hitsMax - 100
            });
            
        repairables.sort((a,b) => a.hits - b.hits);
 
        if(repairables.length > 0 && tower.store.getFreeCapacity(RESOURCE_ENERGY) < 200)
        {
            tower.repair(repairables[0]);
        }


    }
};

module.exports = roleTower;