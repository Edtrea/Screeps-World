/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Colony');
 * mod.thing == 'a thing'; // true
 */
 
var Colony = 
{
    run: function() 
    {
        if (Memory.colony == undefined)
        {
            Memory.colony = {};
        }
        
        if (Memory.colony.timer === undefined || Memory.colony.timer === 9)
        {
            Memory.colony.timer  =  0;
        }
        else
        {
            Memory.colony.timer++;
        }
    }
}

module.exports = Colony;