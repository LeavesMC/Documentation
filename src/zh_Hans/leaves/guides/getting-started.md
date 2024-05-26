# 快速开始

## 需求

::: tip
在 Minecraft 1.20.5 发布后，Leaves 需要 Java 21 才能运行。
我们建议使用 Java 21，它很容易[下载和安装](https://docs.papermc.io/misc/java-install)。
:::

| Leaves 版本 | 推荐的 Java 版本 |
| ----------- | ---------------- |
| 1.17.1+     | Java 21          |

## 下载 Leaves

Leaves 在我们的[网站的下载页面](https://leavesmc.org/downloads/leaves) 直接提供可运行的服务端。

点击构建号以下载文件。

## 运行服务端

要运行服务端，你需要创建一个启动脚本或在终端运行一条命令。

你可以使用 [PaperMC 的启动脚本生成器](https://docs.papermc.io/misc/tools/start-script-gen)生成启动脚本或优化的启动命令。

如果你只想找一个简短的命令：

```bash
java -Xmx4G -Xms4G -jar leaves.jar --nogui
```

确保已将终端导航到 Leaves 所在的位置并将 `leaves.jar` 修改为你下载的文件名。

修改 `-Xms` 和 `-Xmx` 来设置使用的内存。

`--nogui` 用于禁用原版的 GUI，因此在使用命令行运行时不会出现双重界面。

要配置服务端，请查看 [Leaves 配置](../reference/configuration)
和 [Paper 配置](https://docs.papermc.io/paper/reference/configuration)。
