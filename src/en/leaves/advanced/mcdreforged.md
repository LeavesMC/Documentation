# Using Leaves with MCDReforged

MCDReforged (MCDR) is a tool for managing Minecraft servers. It provides a powerful plugin system and does not require modifying the original server.

Leaves is a Minecraft server fork based on Paper. It is compatible with Bukkit plugins and works well with MCDR.

## Setup Steps

### 1. Install MCDReforged

You can install MCDReforged in multiple ways, such as using `pip` or Docker.

Make sure Python 3.6 or higher is installed.

To install MCDReforged using pip, run:

```bash
pip install mcdreforged
```

After installation, initialize MCDR:

```bash
mcdreforged init
```

This command will create a folder named `server` in the current directory and generate default configuration files.

### 2. Configure MCDR

Edit the `config.yml` file with the following content:

```yaml
working_directory: server
start_command: java -Xms1G -Xmx2G -jar leaves.jar nogui
handler: bukkit_handler
```

- `working_directory`: The working directory of the server, default is `server`.
- `start_command`: The command to start the Leaves server. Modify memory allocation and JAR filename as needed.
- `handler`: Select the handler for Leaves, recommended to use `bukkit_handler`.

**Note**: The JAR filename of Leaves must match the filename used in `start_command`.

### 3. Configure Leaves

Place the Leaves JAR file (e.g., `leaves.jar`) into the `server` directory.

Make sure the filename matches what you specified in `start_command`.

### 4. Start MCDR

In the root directory of MCDR, start it using:

```bash
mcdreforged
```

MCDR will automatically start the Leaves server and load the plugin system.

## Plugin Management

MCDR supports hot reloading of plugins. Plugin files should be placed in the `plugins` directory.

To reload plugins, use the following command:

```bash
!!MCDR reload plugin
```

For more information on plugin development and management, refer to the [MCDReforged official documentation](https://docs.mcdreforged.com/en/latest/).

## Notes

- Make sure the Java version you use is compatible with Leaves. Java 21 or higher is recommended.
- If you encounter encoding issues, you can set `encoding` and `decoding` to `utf8` in `config.yml`:

```yaml
encoding: utf8
decoding: utf8
```

