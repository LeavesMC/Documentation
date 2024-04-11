# Fake Player

Leaves provides fake player support similar to Carpet, with the command `/bot`.

## What are Fake Players?

Fake players are player entities that can attract and be attacked by mobs, and can simulate some player actions, such as:

- Random block ticking
- Mob spawning
- Item usage
- Block breaking
- ...

Unlike regular players, fake players have a natural health regeneration.

## Permissions

- `bukkit.command.bot` - Allows players to use the `/bot` command.

::: tip

Make sure you have this permission before executing the command.

:::

## Creating Fake Players

To create a fake player, execute the command in-game: `/bot create <playerName> [skinName]`,
or execute the command in the console: `/bot create <playerName> [skinName] <X> <Y> <Z>`

`<playerName>` is a required parameter and must follow Minecraft's player name format.

`[skinName]` is an optional parameter that specifies the skin to be used by the fake player. If not provided, the fake player will use the skin corresponding to the player name.

Fake players created in-game will inherit the creator's position and viewpoint (i.e., the creator's NBT tags `Rotation` and `Pos`).

::: tip

If a player does not move from the fake player's location after creating it, the fake player will collide with the player and cause a slight position offset.

:::

::: danger

Fake players cannot pass through portals, so they need to be placed in the desired world. If a command or other method is used to change the world of a fake player, it may not function properly.

:::

## Removing Fake Players

Fake players cannot be revived and will drop all their items and remove themselves (instead of disconnecting like Carpet) upon death, even if the `keepInventory` game rule is set to `true`.

By default, fake players will be removed when the server shuts down. You can modify the configuration to automatically restore fake players after server restart.

You can also use the command `/bot remove <playerName>` to remove a specific fake player.

## Fake Player Actions

Actions are an important part of fake players and allow them to perform various tasks. Currently, fake players have a total of 18 actions.

Each fake player can perform multiple actions simultaneously, but each action can only have one parameter. When an action is reset, the fake player will lose all data from the previous action.

You can use the command `/bot action <playerName> <actionName> [actionParameter]` to specify an action for the fake player.

The command `/bot action <playerName> list` is used to view all the current actions of a specific fake player.

### Action Parameters

#### TickDelay

- **Type**: `Integer`
- **Default**: `20`
- **Description**: The wait time in ticks after each successful action execution.

#### DoNumber

- **Type**: `Integer`
- **Default**: `-1`
- **Description**: The number of times the action can be successfully executed in each action. If set to `-1`, it is unlimited.

#### X, Y, or Z

- **Type**: `Floating-point number (decimal)`
- **Default**: `0.0`
- **Description**: An X/Y/Z coordinate.

### Attack Entity in Front Action

- **Action Name**: `attack`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: When the fake player starts this action, it will attempt to attack the entity in front of its line of sight.

### Attack Entity in Collision Box Action

- **Action Name**: `attack_self`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: When the fake player starts this action, it will attempt to attack the entities within its collision box.

### Block Breaking Action

- **Action Name**: `break`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: When the fake player starts this action, it will attempt to break the block in front of its line of sight.

### Drop Items Action

- **Action Name**: `drop`
- **Action Parameters**: None
- **Description**: When the fake player starts this action, it will drop all items from its inventory.

### Auto Fishing Action

- **Action Name**: `fish`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: The fake player will attempt to automatically fish.

### Jump Action

- **Action Name**: `jump`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: When the fake player starts this action, it will attempt to jump.

### Sneak Action

- **Action Name**: `lay`
- **Action Parameters**: None
- **Description**: When the fake player starts this action, it will attempt to sneak.

### Look Action

- **Action Name**: `look`
- **Action Parameters**: `<X>` `<Y>` `<Z>`
- **Description**: When the fake player starts this action, it will look at the given coordinates.

### Rotate Action

- **Action Name**: `rotate`
- **Action Parameters**: None
- **Description**: When the fake player starts this action, it will look at the position of the player.

### Crouch Action

- **Action Name**: `sneak`
- **Action Parameters**: None
- **Description**: When the fake player starts this action, it will toggle sneaking.

### Stop Action

- **Action Name**: `stop`
- **Action Parameters**: None
- **Description**: The fake player will immediately stop all actions after executing this command.

### Swim Action

- **Action Name**: `swim`
- **Action Parameters**: None
- **Description**: When the fake player starts this action, it will attempt to float in water (instead of entering swimming mode).

### Use Item Action

- **Action Name**: `use`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: The fake player will attempt to use the item in its main hand. This action will not attempt to use the item on blocks or entities.

### Use Offhand Item Action

- **Action Name**: `use_offhand`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: The fake player will attempt to use the item in its offhand. This action will not attempt to use the item on blocks or entities.

::: danger

The behavior of fake players attempting to use items with GUIs is undefined.

:::

### Use Item on Block Action

- **Action Name**: `use_on`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: The fake player will attempt to use the item in its main hand on the block in front of its line of sight.

### Use Offhand Item on Block Action

- **Action Name**: `use_on_offhand`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: The fake player will attempt to use the item in its offhand on the block in front of its line of sight.

::: danger

The behavior of fake players attempting to use blocks with GUIs (such as workbenches, furnaces, anvils, etc.) is undefined.

:::

### Use Item on Entity Action

- **Action Name**: `use_to`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: The fake player will attempt to use the item in its main hand on the entity in front of its line of sight. This action allows the fake player to enter vehicles (but cannot exit).

### Use Offhand Item on Entity Action

- **Action Name**: `use_to_offhand`
- **Action Parameters**: `[TickDelay] [DoNumber]`
- **Description**: The fake player will attempt to use the item in its offhand on the entity in front of its line of sight. This action allows the fake player to enter vehicles (but cannot exit).

::: danger

The behavior of fake players attempting to use entities with GUIs (such as llamas with chests, donkeys, etc.) is undefined and may cause unknown issues.

:::

## Fake Player List

Use `/bot list [world]` to view the fake players in the global or specific worlds.

`[world]` is an optional parameter. It defaults to `world` / `world_nether` / `world_the_end`. Enter the name of a custom world to view the fake players in that world.
