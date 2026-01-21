# 命令与权限

本页面解释了 Leaves 的命令与权限。

## 来自上游的命令与权限

作为 Bukkit/Spigot/Paper 的下游，继承了它们的命令与权限。

- [Bukkit 命令与权限](https://bukkit.fandom.com/wiki/CraftBukkit_Commands)
- [Spigot 命令与权限](https://www.spigotmc.org/wiki/spigot-commands/)
- [Paper的命令](https://docs.papermc.io/paper/reference/commands/) 与 [Paper的权限](https://docs.papermc.io/paper/reference/permissions/)

## Leaves 中的命令

### leaves 命令

执行 `leaves` 的各个子命令，需要对应的权限节点 `bukkit.command.leaves.<subcommand>`。

#### `/leaves config`

权限：bukkit.command.leaves.config

config 子命令由于查看和修改 Leaves 的配置。

用法：

- **`/leaves config <node>`**
  查看配置节点 “config” 的值。
- **`/leaves config <node> <value>`**
  将配置节点 “confige” 设置为给定的值。

#### `/leaves update`

权限：bukkit.command.leaves.update

下载最新稳定版 Leaves。执行后查看控制台获取详情。

#### `/leaves counter`

权限：bukkit.command.leaves.counter

开启或关闭漏斗计数器。需要开启配置 [settings.modify.hopper-counter.enable](https://docs.leavesmc.org/zh_Hans/leaves/reference/configuration#settings.modify.hopper-counter.enable)。

#### `/leaves reload`

权限：bukkit.command.leaves.reload

重新加载 Leaves配置文件 leaves.yml。

#### `/leaves report`

权限：bukkit.command.leaves.report

跳转到 Issue 创建页面。会自动填充版本信息。

用法：

- `/leaves report <template>`
  使用模板创建 Issue。模板可选项有 `bug-report` 和 `not-vanilla`。

#### `/leaves blockupdate`

权限：bukkit.command.leaves.blockupdate

控制服务器内全局方块更新是否发生。需要开启配置 [settings.modify.no-block-update-command](https://docs.leavesmc.org/zh_Hans/leaves/reference/configuration#settings.modify.no-block-update-command)。

### bot 命令

用于管理假人的命令。参考[假人](https://docs.leavesmc.org/zh_Hans/leaves/reference/fakeplayer)章节。

## Leaves 中的权限

| 权限节点                            | 描述                                                                     | 默认  |
|:--------------------------------|:-----------------------------------------------------------------------|:----|
| bukkit.command.leaves           | 执行 leaves 命令的权限                                                        | 管理员 |
| bukkit.command.leaves.config    | 执行 leaves 命令下 config 子命令的权限                                            | 管理员 |
| bukkit.command.leaves.update    | 执行 leaves 命令下 update 子命令的权限                                            | 管理员 |
| bukkit.command.leaves.counter   | 执行 leaves 命令下 counter 子命令的权限                                           | 管理员 |
| bukkit.command.leaves.reload    | 执行 leaves 命令下 reload 子命令的权限                                            | 管理员 |
| bukkit.command.leaves.report    | 执行 leaves 命令下 report 子命令的权限                                            | 管理员 |
| leaves.protocol.rei.cheat       | 使用 REI 模组作弊功能的权限                                                       | 管理员 |
| leaves.protocol.litematics      | 通过 servux 协议传输 [Litematica](https://modrinth.com/mod/litematica) 数据的权限 | 管理员 |
| servux.provider.hud_data.logger | 通过 servux 协议获取 [MiniHUD](https://modrinth.com/mod/minihud) 数据的权限       | 管理员 |
