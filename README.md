# Screeps-World
My JavaScript code for the game Screeps: World

Goal is to build an autonomous Screeps Finite State Machine AI
For now, the goal does not include multi-room logic where nearby rooms could help each other or for autonomous room planning.

**This work-in-progess logic**

# AI Hierarchy
1. **Colony** ; Manages multiple rooms
2. **Queen** ; Manages a single room
3. **Creep** ; single creep


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
| 1-7/1 | Upgrader will constantly take energy to upgrade the controller |
| 8/1 | Upgrader will only upgrade the controller when it is 50% from downgrading, use constant `CONTROLLER_DOWNGRADE` to calculate. Upgrader would be used as a harvester instead. |
| */2 | Extensions/Spawn/Towers (in that order of priority) should always be stocked up with energy even if by transferring from containers or storage |
| * 3 | Extensions/Spawn/Towers (in that order of priority) should always be stocked up with energy even if by transferring from containers or storage, offensive creeps will also need to be spawned |

# Creeps
Each creep's current role would be stored in `memory.role`, which will dictate which function it is expected to fulfil in the room.

Each creep will have its current state stored in each creeps' `memory.state`, which shows what task the creep is doing to fulfil its role.

There are 2 broad categories of creeps; workers and soldiers. The creep categories are stored in `memory.category`.

## Worker
Worker creeps are a creep category that uses `WORK`, `CARRY`, & `MOVE` parts.
Worker creeps are in charge of the building and maintenance of a room.
Worker creeps have 4 different roles whose main functions are:
  - **Harvester** ; Harvest resources
  - **Transferer** ; Takes harvested resources to structures
  - **Upgrader** ; Upgrade controller
  - **Builder** ; Build structures

All 4 creep roles should be able to replace each other or take over the other roles' function temporarily without issue. e.g. when a harvester dies, a transferer could be reassigned as a harvester to take over the role of harvesting immediately.

| Stage  | Sets of ('WORK','CARRY','MOVE') parts |
| ---      | ---       |
|  1  |  1  |
|  2  |  2  |

### Harvester
![image](https://github.com/Edtrea/Screeps-World/assets/86367432/817a23ad-4e0e-45ae-a2c6-a7a5ccc1147c)

Only 1 harvester should be created for each harvestable resource node in a room. Resources harvested in claimed rooms are dropped/put into nearby link. Resources harvested in unclaimed rooms are instead held and carried back.

### Transferer
![image](https://github.com/Edtrea/Screeps-World/assets/86367432/cf91b84a-e2a3-4c4d-beca-37b1097fb4bc)

Only 1 transferer should be created for each room. Its role is to carry harvested resources from resource nodes to

During room state 1, resources dropped will be picked up and transferred to structures, resources in links will also be transferred to other structures but will not withdraw energy from storages to transfer to spawns and extensions.

During room state 2, resources dropped will be picked up and transferred to structures, resources in links will also be transferred to other structures and will withdraw energy from storages to ensure spawns and extensions are full.

During room state 3, resources dropped will not be picked up unless there are no hostile creeps in the room, resources in links will also be transferred to other structures and will withdraw energy from storages to ensure spawns and extensions are full.

When there are no transferring tasks to do, the transferer will renew itself.

### Upgrader
![image](https://github.com/Edtrea/Screeps-World/assets/86367432/442b1a67-d1bd-4067-ac81-9f642b68bd8f)

Only 1 upgrader should be created for each room.

Upgrader's only task is to upgrade the controller. Once the controller is fully upgraded, the upgrader would only upgrade the controller when it is 50% in the process of downgrading. At other times, it will help with the transferer/builder's tasks.

### Builder
![image](https://github.com/Edtrea/Screeps-World/assets/86367432/d4bcdc61-eb59-4999-94d7-14d9e6950e0e)

Only 1 builder should be created for each room

# Soldiers
Soldiers are creeps that use `ATTACK`, `RANGED_ATTACK`, `HEAL` and `CLAIM` parts.
Soldiers are in charge of defending rooms from invaders or expanding the colony by claiming rooms.
There are 3 main categories of soldier creeps
  - **Attacker** ; Mainly uses `ATTACK`and `RANGED_ATTACK` parts to damage creeps and structures
  - **Healer** ; Mainly uses `HEAL` parts to heal damaged creeps
  - **Claimer** ; Mainly uses `CLAIM' parts to claim rooms

Soldier creeps are specialized; unlike worker creeps, they cannot replace each other.

*When a room is in state 3, it will try to mimic the invading creep's parts composition and spawn them accordingly.*

## Attacker


## Healer


## Claimer


# Tower
During room state 1 or 2, towers will focus on repairing structures.

During room state 3, towers will attack NPC invaders but focus on repairing structures or healing creeps during player invasion.

# Flags
Flags will be used to control the Creeps manually
