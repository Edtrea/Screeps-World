/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Creeps.Workers.EnergyHarvester');
 * mod.thing == 'a thing'; // true
 */
 
var EnergyHarvester = 
{
    run: function(creep)
    {
        let target = Game.getObjectById(creep.memory.target);
        
        // If creep is not beside target, move towards it.
        if(target != null) 
        {
            if(creep.harvest(target) == ERR_NOT_IN_RANGE) 
            {
                creep.moveTo(target);
            }
        }
        
        //Assume link and container in a creep's memory will always be in range.
        //Spawner would be the one checking for if the creep will be in range.
        //If Capacity is full, 
        //Check if link is full -> if no -> Transfer to link
        //if link is full -> transfer to energy to container, else -> drop energy
        if(creep.store.getFreeCapacity(RESOURCE_ENERGY) == 0)
        {
            let link = Game.getObjectById(creep.memory.link);
            let container = Game.getObjectById(creep.memory.container);
            
            if(link != null)
            {
                if(link.store.getFreeCapacity(RESOURCE_ENERGY) > 0)
                {
                    creep.transfer(link,RESOURCE_ENERGY);
                }
                else if (container != null)
                {
                    creep.transfer(container,RESOURCE_ENERGY);
                }
                else
                {
                    creep.drop(RESOURCE_ENERGY);
                }
            }
            else if (container != null)
            {
                creep.transfer(container,RESOURCE_ENERGY);
            }
            else
            {
                creep.drop(RESOURCE_ENERGY);
            }
        }
    }
}

module.exports = EnergyHarvester;