# Getting Started

## Requirements

::: tip
With the release of Minecraft 1.18, Leaves now requires Java 17 to run. We recommend using Java 21, which is easy to [download and install](https://docs.papermc.io/misc/java-install).
:::

| Leaves Version | Recommended Java Version |
| -------------- | ------------------------ |
| 1.17.1+        | Java 21                  |

## Downloading Leaves

LeavesMC provides runnable server jars directly from our
[website's downloads page](https://leavesmc.org/downloads/leaves).

Click on the build number to download a file.

## Running The Server

To run the server you will need to either create a startup script or run a command in your terminal.

You can generate a startup script using [PaperMC's Startup Script Generator](https://docs.papermc.io/misc/tools/start-script-gen).

You can also obtain the optimized terminal command to run the server there.

If you're just looking for a short command:

```bash
java -Xmx4G -Xms4G -jar leaves.jar --nogui
```

Ensure you navigated your terminal to the directory of your server and that you have replaced `leaves.jar` with the name of the jar you have downloaded.

The amount of RAM can be set by changing the numbers in the `-Xms` and `-Xmx` arguments.

`--nogui` disables Vanilla's GUI, so you don't get double interfaces when using the command line.

To configure your server, see [Leaves Configuration](../reference/configuration)
and [Paper Configuration](https://docs.papermc.io/paper/reference/configuration).
