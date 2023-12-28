Creep object for builder
Each builder stores the following in memory:
    The category of the creep
    The role of the creep
    Current state of the creep
    target of current objective if there are

Possible states for a builder:
    Renew
    Move
    Build
    Withdraw
    Repair

Builders are optional creeps that are only spawned when there are no towers or there are construction sites detected in room. This will be checked every colony cooldown timer resets.
When conditions are not met, builders would be turned into transferer.

Builder will priorities tasks in the following order:
    Building construction sites
    Repair of structures
