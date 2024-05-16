// while not under attack
// check if bucket is full
// if bucket is full, create pixel
require('./constants');
let Colony = require('Colony');
let Queen = require('Queen');
let Creeps = require('Creeps');

module.exports.loop = function () 
{
    //Create pixel if Bucket full
    if(Game.cpu.bucket >=  PIXEL_CPU_COST - 20) 
    {
        Game.cpu.generatePixel();
    }

    //Run colony
    Colony.run();
    
    //Run Queen for each room
    //Get each visible room name from game object
    for (let key in Game.rooms)
    {
        // Check if room is owned
        if (Game.rooms[key].controller.owner.username === USERNAME)
        {
            Queen.run(Game.rooms[key]);
        }
    }
    
    //Run creeps code for each creep
    for(const creep in Game.creeps) 
    {
        Creeps.run(creep);
    }
}