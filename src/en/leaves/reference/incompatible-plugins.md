# Incompatible Plugins

Leaves strives to be compatible with all CraftBukkit, Spigot, or Paper plugins, but some plugins require additional configuration or alternatives to work with Leaves.

**We will not address issues related to these plugins. Please temporarily remove them before reporting any issues.**

## Protocol

These plugins break protocol support of Leaves, causing mods to fail to communicate properly or players to be kicked.

### ViaVersion

ViaVersion only translates vanilla protocols and does not handle mod protocols. This causes issues when mod protocols span too widely and cannot be parsed correctly.

::: tip

Clients can install [ViaFabricPlus](https://modrinth.com/mod/viafabricplus) and [ViaVanillaPlus](https://modrinth.com/mod/viavanillaplus) to translate some mod protocols.

:::

## Behavior

These plugins conflict with behavior of Leaves or override its behavior.

### AuthMeReloaded

AuthMeReloaded does not correctly detect fake players and mistakenly requires them to log in, preventing proper spawning of fake players.

::: tip

Please use the alternative [AuthMeReReloaded](https://hangar.papermc.io/0D00_0721/AuthMeReReloaded), which adds support for fake players and is nearly identical to AuthMeReReloaded.

### NoCheatPlus

NoCheatPlus overrides configurable fixes of Paper, causing some redstone machines to not work properly.
