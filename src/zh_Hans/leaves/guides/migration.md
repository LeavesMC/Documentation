# 迁移

将服务器迁移至 Leaves 或从 Leaves 迁移都很简单。以下步骤将帮助你开始迁移。

::: danger

在开始之前，请确保已对服务器进行了完整备份。

:::

## 迁移到 Leaves

### 从 CraftBukkit、Spigot 或 Paper

从 CraftBukkit、Spigot 或 Paper 迁移到 Leaves 非常简单。请按照以下步骤操作。

1. 停止正在运行的服务端，并创建完整备份。
2. 从[我们的下载页面](https://leavesmc.org/downloads/leaves)下载 Leaves。
3. 用新下载的 Leaves jar 替换现有的服务端 jar。
4. 启动新服务端。

Leaves 保留了与所有 Paper 插件的完全兼容性，实现无缝过渡。

::: tip

你的新 Leaves
服务器仍将使用 [`bukkit.yml`](https://docs.papermc.io/paper/reference/bukkit-configuration)、[`spigot.yml`](https://docs.papermc.io/paper/reference/spigot-configuration)、[`paper-global.yml`](https://docs.papermc.io/paper/reference/global-configuration) 和 [`paper-world-defaults.yml`](https://docs.papermc.io/paper/reference/world-configuration)。
新的配置选项可以在 [`leaves.yml`](../reference/configuration) 中找到。

:::

如果你在从 CraftBukkit、Spigot 或 Paper
迁移过程中遇到任何问题，请随时通过[我们的 Discord 服务器](https://discord.gg/5hgtU72w33)（`#support` 频道）寻求支持。

### 从原版

从原版迁移到 Leaves 后，世界的存储方式将自动改变。
如果你想回到原版，请严格遵循[原版迁移指南](#从原版)，因为需要手动更改。

1. 停止正在运行的服务端，并创建完整备份。
2. 从[我们的下载页面](https://leavesmc.org/downloads/leaves)下载 Leaves。
3. 用新下载的 Leaves jar 替换现有的原版 jar。
4. 启动新服务端。

你现已成功迁移至 Leaves。
如果你遇到任何问题，请随时通过[我们的 Discord 服务器](https://discord.gg/5hgtU72w33)（`#support` 频道）寻求支持。

### 从 Fabric/Forge

由于 Fabric 和 Forge 都使用与原版相同的世界目录结构，因此可以使用与[原版迁移指南](#从原版)相同的步骤，但有一点需要注意。
如果你的 Fabric 或 Forge 服务器使用了在游戏中添加新区块、物品或其他数据的模组，Leaves 将无法加载这些功能。

此外，请注意 Leaves 不支持 Fabric 或 Forge 模组。你需要找到插件替代品。
任何试图同时支持模组和插件的混合服务端都存在严重问题，不建议使用。

## 从 Leaves 迁移

### 到原版

由于 Leaves 存储世界的方式与原版略有不同，因此需要手动迁移。
如果不采取这些步骤，下界和末地看起来就像被重置过一样。
别担心！即使发生了这种情况，你也没有丢失任何数据。原版服务端只是不知道该去哪里寻找世界文件。

下面是一张展示了原版和 Leaves 存储世界的区别的图表。

| 服务端 | 主世界   | 下界                  | 末地                  |
| ------ | -------- | --------------------- | --------------------- |
| 原版   | `/world` | `/world/DIM-1`        | `/world/DIM1`         |
| Leaves | `/world` | `/world_nether/DIM-1` | `/world_the_end/DIM1` |

请按照以下步骤从 Leaves 迁移到原版：

::: warning

这些步骤假定 `level-name`（在 `server.properties` 中设置）为 `world`。
如果不是这种情况，请在以下所有步骤中将 `world` 替换为你的 `level-name`。

:::

1. 停止正在运行的 Leaves 服务端。
2. 如果你已经用原版启动了服务器，请进入 `world` 文件夹并删除 `DIM-1` 和 `DIM1` 文件夹。
   只有在已经启动过原版服务端的情况下才需要执行此步骤。
3. 将 `/world_nether/DIM-1` 文件夹复制到 `/world` 文件夹中。
4. 将 `/world_the_end/DIM1` 文件夹复制到 `/world` 文件夹中。
5. 删除 `/world_nether` 和 `/world_the_end` 文件夹。
6. 用原版服务端 jar 替换现有的 Leaves jar。
7. 启动原版服务端。

### 到 CraftBukkit、Spigot 或 Paper

Leaves **不**支持迁移到 CraftBukkit、Spigot 或 Paper！
虽然你可能会成功（CraftBukkit、Spigot 和 Paper 都使用与 Leaves 相同的目录结构），但遇到问题时将**不会**提供支持，并可能会丢失数据。

### 到 Fabric/Forge

由于 Fabric 和 Forge 都使用与原版相同的目录结构来存储世界，因此请按照[原版迁移指南](#从原版)进行迁移。
请注意，Fabric 和 Forge 都不支持 Leaves 插件！你将需要寻找替代模组。
