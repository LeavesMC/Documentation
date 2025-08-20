# 不兼容的插件

Leaves 尽力与所有 CraftBukkit、Spigot 或 Paper 插件兼容，但一些插件需要额外的配置甚至使用替代品才能与 Leaves 协同工作。

**我们不会处理与这些插件相关的问题，请在报告问题前暂时移除它们。**

## 协议

这些插件会破坏 Leaves 的协议支持，导致模组无法正常通讯或玩家被踢出。

### ViaVersion

ViaVersion 只翻译原版协议，而不会处理模组协议。这会导致模组协议版本跨度过大无法正确解析。

::: tip

客户端可以安装 [ViaFabricPlus](https://modrinth.com/mod/viafabricplus) 和 [ViaVanillaPlus](https://modrinth.com/mod/viavanillaplus) 以翻译部分模组协议。

:::

## 行为

这些插件会与 Leaves 的行为产生冲突或覆盖 Leaves 的行为。

### AuthMeReloaded

AuthMeReloaded 不会正确检测假人并错误的要求假人登录，导致假人无法正确生成。

::: tip

请使用替代品 [AuthMeReReloaded](https://hangar.papermc.io/0D00_0721/AuthMeReReloaded)，它添加了对假人的支持，并且与 AuthMeReloaded 的使用近乎相同。

:::

### NoCheatPlus

NoCheatPlus 会覆盖 Paper 的可配置修复项，导致部分红石机器无法使用。
