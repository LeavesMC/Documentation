# Next Steps

Now that you have your server up and running, there are a few things you should do to ensure that your server is running smoothly.

## Configuration

One of the first things you should do is ensure your server is configured to your specifications.
Leaves is highly configurable, and you can change many settings to suit your needs.
Please see [Leaves Configuration](../reference/configuration)
and [Paper Configuration](https://docs.papermc.io/paper/reference/configuration).

## Plugins

One of the main reasons to use Leaves is to take advantage of the many plugins which make use of our expansive API.
Ensure you fully trust the source of any plugin before installing it.

::: danger
Plugins are given **full and unrestricted** access to not only your server but also the machine that it runs on.
Because of this, it is imperative that plugins only be installed from trusted sources. Be careful!
:::

## Security

### Whitelisting

If you want to restrict who can join your server, you can use the whitelist feature. This allows you to
specify who can join your server, and stops anyone else from joining. You can use the whitelist from
the server console, or by editing the `whitelist.json` file in your server directory.

### Permissions

Permissions are a way to control what players can and cannot do on your server. You can use permissions
to restrict who can use certain commands, or who can access certain areas of your server. It is
common for plugins to use permissions to control who can use their features. You can use permission
plugins such as [LuckPerms](https://luckperms.net) to manage the permissions which players will be granted.

### Protocols

Leaves provides support for a number of protocols that are used to communicate with mods on the client to enhance the experience.
They may expose content that you do not wish to make public.
So before turning on protocol support, please understand the corresponding functionality.

## Backups

It's important to keep backups of your server. If something goes wrong, you can restore your server to a
previous state. [PaperMC covers how to do this in the Updating guide.](https://docs.papermc.io/paper/updating)

## Optimization

Out of the box, Leaves is optimized for performance. However, there are many things you can do to further
optimize your server. One of the most common things to do is to make sure that you are running the
correct startup flags for your server. You can generate a startup script with the correct flags for your server using [PaperMC's Startup Script Generator](https://docs.papermc.io/misc/tools/start-script-gen).
Beyond this, a guide such as [this one](https://paper-chan.moe/paper-optimization/) will help you to further optimize your server.

## Making your server public

If you want to make your server public, you will need to port forward your server. This allows people
from outside your network to connect to your server. There is a guide made by
[NordVPN](https://nordvpn.com/blog/open-ports-on-router/) which explains what port forwarding is and how
to do it for your Leaves server.

## Troubleshooting

If you encounter any issues with your server, you can come and
ask for help in our [Discord](https://discord.gg/5hgtU72w33) server!
