/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('Queen');
 * mod.thing == 'a thing'; // true
 */
 
var Queen = {
    run: function(room) 
    {
        //if timer is hit
        if (Memory.colony.timer === 9)
        {
            //Set stage to controller level
            room.memory.stage = room.controller.level;

            //Set state by checking room
            //Find if there are invading player creeps that attacked/dismantled structures in this room = state 3
            if(CheckRoomState3(room) === true)
            {
                room.memory.state = 3;
            }
            //Find if there are invading creeps in room = state 2
            else if(CheckRoomState2(room) === true)
            {
                
            }
            //Peace = state 1
        }
    }
}

function CheckRoomState3 (room)
{
    //Get all event log in this room
    let eventLog = room.getEventLog();
    //Filter for Attack events only
    let attackEvents = _.filter(eventLog, {event: EVENT_ATTACK});
            
    attackEvents.forEach(event => 
    {
        let object = Game.getObjectById(event.objectId);
        if(object && object.my === false && object.owner.username !== "Invader")
        {
            return true;
        }
    })
    return false;
}

function CheckRoomState2(room)
{
    //Get all creeps that is not mine that is filtered of friendly allies.
    const hostiles = room.find(FIND_HOSTILE_CREEPS, {
                                                        filter: function(object) 
                                                        {
                                                            return !FRIENDS.includes(object.owner.username);
                                                        }
                                                    });
    //Check if there are invading player creeps
    //if there are, set state to 2 and                                                 
    
    
    
    //Check if there are NPC creeps
    //If there are, set state to 2 and kill it
    
    
}
        
module.exports = Queen;