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

## Worker
Worker creeps are a creep category that uses `WORK`, `CARRY`, & `MOVE` parts.
Worker creeps have 4 different roles whose main functions are:
  1. **Harvester** ; Havest resources
  2. **Transferer** ; Takes harvested resouces to stuctures that requires them or to store them
  3. **Upgrader** ; Upgrade controller
  4. **Builder** ; Build structures

All 4 creep roles should be able to replace each other or take over the other roles' function temporarily without issue.
### Harvester

### Transferer

### Upgrader

### Builder

# Tower

# Flags
