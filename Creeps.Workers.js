/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Creeps.Workers');
 * mod.thing == 'a thing'; // true
 */
var EnergyHarvester = require('Creeps.Workers.EnergyHarvester');

var Workers = 
{
    run: function(creep)
    {
        //run Energy Harvester
        if (creep.memory.role == "worker" && creep.memory.category == "energyHarvester")
        {
            EnergyHarvester.run(creep);
        }
        //run Mineral harvester
        
        //run deposit harvester
        
        //run upgrader
        
        //run 
    }
}

module.exports = Workers;