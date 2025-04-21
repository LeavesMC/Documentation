# 在 MCDReforged 中使用 Leaves

MCDReforged（简称 MCDR）是一个用于管理 Minecraft 服务器的工具，具备强大的插件系统，且无需修改原版服务端。

Leaves 是一个基于 Paper 的 Minecraft 服务端分支，兼容 Bukkit 插件，适合与 MCDR 搭配使用。

## 配置步骤

### 1. 安装 MCDReforged

你可以使用多种方式安装 MCDReforged，例如使用 pip、Docker。

确保已安装 Python 3.6 及以上版本。

pip 使用以下命令安装 MCDReforged：


```bash
pip install mcdreforged
```

安装完成后，初始化 MCDR：


```bash
mcdreforged init
```

此命令将在当前目录下创建一个名为 `server` 的文件夹，并生成默认配置文件。

### 2. 配置 MCDR

编辑 `config.yml` 文件，设置以下内容：


```yaml
working_directory: server
start_command: java -Xms1G -Xmx2G -jar leaves.jar nogui
handler: bukkit_handler
```


- `working_directory`: 服务端的工作目录，默认为 `server`。
- `start_command`: 启动 Leaves 服务端的命令，请根据实际情况修改内存分配和 JAR 文件名。
- `handler`: 选择适用于 Leaves 的处理器，推荐使用 `bukkit_handler`。

**注意**：Leaves 的 JAR 文件名应与 `start_command` 中指定的名称一致。

### 3. 配置 Leaves

将 Leaves 的 JAR 文件（例如 `leaves.jar`）放置在 `server` 目录中。

确保 `start_command` 中的 JAR 文件名与实际文件名一致。

### 4. 启动 MCDR

在 MCDR 的根目录下，使用以下命令启动 MCDR：


```bash
mcdreforged
```


MCDR 将自动启动 Leaves 服务端，并加载插件系统。

## 插件管理

MCDR 支持热重载插件，插件文件应放置在 `plugins` 目录中。

要重载插件，使用以下命令：


```bash
!!MCDR reload plugin
```


更多插件开发和管理信息，请参考 [MCDReforged 官方文档](https://docs.mcdreforged.com/zh-cn/latest/)。

## 注意事项

- 确保使用的 Java 版本与 Leaves 兼容，推荐使用 Java 21或更高版本。
- 如遇到编码问题，可在 `config.yml` 中设置 `encoding` 和 `decoding` 为 `utf8`。


```yaml
encoding: utf8
decoding: utf8
```

