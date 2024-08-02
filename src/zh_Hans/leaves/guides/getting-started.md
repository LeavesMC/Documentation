# 快速开始

## 需求

::: tip
在 Minecraft 1.20.5 发布后，Leaves 需要 Java 21 才能运行。
我们建议使用 Java 21，它的 [下载和安装](https://docs.papermc.io/misc/java-install) 相当容易。
:::

| Leaves 版本 | 推荐的 Java 版本 |
| ----------- | ---------------- |
| 1.17.1+     | Java 21          |

## 下载 Leaves

前往我们的 [下载页面](https://leavesmc.org/downloads/leaves) 以下载 Leaves 服务端。

点击构建编号以下载文件。

## 运行服务端

要运行服务端，你需要创建一个启动脚本或在终端运行一条命令。

你可以使用 [PaperMC 的启动脚本生成器](https://docs.papermc.io/misc/tools/start-script-gen) 生成启动脚本或优化的启动命令。

如果你只想找一个简短的命令来马上启动你的服务端的话，我们在此提供一个范例：

```bash
java -Xmx4G -Xms4G -jar leaves.jar --nogui
```

确保你的文件资源管理器已经进入到 Leaves 所在的文件夹，并将你下载的文件名修改为 `leaves.jar`。

修改 `-Xms` 和 `-Xmx` 来设置使用的最小和最大内存。

`--nogui` 用于禁用服务端的 GUI。因此在使用该命令行运行服务端时，不会同时出现 cmd 以及 GUI 这两个界面。

要配置服务端，请查看 [Leaves 配置](../reference/configuration)
和 [Paper 配置](https://docs.papermc.io/paper/reference/configuration)。
