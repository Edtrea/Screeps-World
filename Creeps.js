/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Creeps');
 * mod.thing == 'a thing'; // true
 */
var Worker = require('Creeps.Workers');
 
var Creeps = 
{
    run: function(creep)
    {
        //run worker creeps
        Worker.run(creep);
        //run soldier creep
    }
}

module.exports = Creeps;