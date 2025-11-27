# 不兼容的插件

Leaves 致力于与所有 CraftBukkit、Spigot 及 Paper 插件保持兼容，但部分插件因技术或功能的冲突，可能需要额外配置或采用替代方案以实现兼容运行。

**我们不会处理与这些插件相关的问题，请在报告问题前暂时移除它们并尝试复现问题。**

## 数据转译类

Leaves 的模组协议功能依赖服务端与客户端之间的准确数据通信，使用涉及数据转译的插件（如 ViaVersion、ViaBackwards、ViaRewind）可能造成客户端模组功能异常或玩家无法连接至服务器。

::: tip

对于跨版本需求，请优先考虑在客户端安装 [ViaFabricPlus](https://github.com/ViaVersion/ViaFabricPlus) 和 [ViaVanillaPlus](https://github.com/ViaVersionAddons/ViaVanillaPlus) 模组**并手动设置连接至服务器所使用的版本。**

若必须使用上述插件，请在必要时禁用**所有**模组协议功能。

:::

## 登录

大部分登录插件（如 AuthMe、AuthMeReloaded、CatSeedLogin）无法正确识别假人，并错误地要求假人进行登录，这将导致假人无法生成或功能执行异常。

::: tip

可以尝试以下解决方案：

1.使用 [AuthMeReReloaded](https://github.com/HaHaWTH/AuthMeReReloaded) 登录插件，此插件为 AuthMeReloaded 插件的分支，它能正确识别假人并允许其自动绕过登录流程。

2.安装 [LeavesAddons](https://github.com/Lumine1909/LeavesAddons) 插件以实现兼容。

:::

## 领地

由于假人无法触发事件，领地插件（如 Residence、Dominion）将无法监听假人交互行为，这将导致领地限制对假人失效。

## 快捷潜影盒

部分快捷潜影盒插件在打开潜影盒时未执行堆叠数量校验，若服务端启用潜影盒堆叠功能，使用此类插件时可能触发物品复制漏洞。

## Aki-Async

异步优化通过多线程计算提升服务端性能，但此举必然干扰游戏原生时序逻辑，破坏微时序机制，并引入线程安全隐患和崩溃风险。这将破坏原版特性，并引发功能异常问题，极端情况下甚至造成服务端崩溃。此外，多线程计算非常复杂，错误的优化不仅无法实现预期效果，反而会导致服务器性能损耗加剧，引发卡顿。

## NoCheatPlus

NoCheatPlus 插件会覆盖 Paper 的部分配置项，即便启用了 Leaves 的 `mc-technical-survival-mode` 配置也无法将其恢复。这将导致部分原版特性（如活塞复制、无头活塞，重力方块复制）被修复。
