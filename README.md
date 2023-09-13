# Screeps-World
My JavaScript code for the game Screeps: World

Goal is to build a autonomous Screeps Finite State Machine AI
For now, the goal does not include multi-room logic where nearby rooms could help each other or for autonomous room planning.

**This work-in-progess logic**

# Room
- Stage
  - Determined by controller level, structures unlocked limits found in constant `CONTROLLER_STRUCTURES`
- State
  - 1 : Normal/Start
  - 2 : Alert (Intruder detected in room, should stock up on energy)
  - 3 : Red (NPC Invader detected/Intruder attacked)
 
Each room should operate based on its Stage + State
| Stage/State     | Behaviour |
| ---      | ---       |
| 1/1 |  |
| 2/1 |  |
| 3/1 |  |
| 4/1 |  |
| 5/1 |  |
| 6/1 |  |
| 7/1 |  |
| 8/1 | Upgrader will only upgrade controller when it is 50% from downgrading, use constant `CONTROLLER_DOWNGRADE` to calculate. Upgrader would be used as a harvester instead. |
| */2 |  |
| * 3 | Extensions/Spawn/Towers (in that order of priority) should always be stocked up with energy even if by transfering from containers or storage, offensive creeps will also need to be spawned |

# Creeps
Each creep's current role would be stored in `memory.role`, which will dictate which function it is expected to fulfil in the room.

Each creep will have its current state stored in each creeps' `memory.state`, which shows what task the creep is doing to fulfil its role.

There are 2 broad categories of creeps; workers and soldier. The creep categories are stored in `memory.category`.

## Worker
Worker creeps are a creep category that uses `WORK`, `CARRY`, & `MOVE` parts.
Worker creeps are in charge of the building and maintainance of a room.
Worker creeps have 4 different roles whose main functions are:
  1. **Harvester** ; Havest resources
  2. **Transferer** ; Takes harvested resouces to stuctures
  3. **Upgrader** ; Upgrade controller
  4. **Builder** ; Build structures

All 4 creep roles should be able to replace each other or take over the other roles' function temporarily without issue. e.g. when a harvester dies a transferer could be reassigned as a harvester to take over the role of harvesting immediately.
### Harvester
Only 1 harvester should be created for each havestable resource node in a room. Resources harvested in claimed rooms are dropped/put into nearby link. Resources harvested in unclaimed rooms are instead held and carried back.

### Transferer
Only 1 transferer should be created for each room. 

During room state 1, resources dropped will be picked up and transfered to structures, resources in links will also be transfered to other structures but will not withdraw energy from storages to transfer to spawns and extensions.

During room state 2, resources dropped will be picked up and transfered to stuctures, resources in links will also be transferred to other structures and will withdraw energy from storages to ensure spawns and exntensions are full

During room state 3, resources dropped will not be picked up unless there are not hostile creeps in the room, resources in links will also be transferred to other structures and will withdraw energy from storages to ensure spawns and exntensions are full

When there are no transfering task to do, the transferer would search for building/upgrading job to do.

### Upgrader
Only 1 upgrader should be created for each room

### Builder
Only 1 builder should be created for each room

# Tower

# Flags
