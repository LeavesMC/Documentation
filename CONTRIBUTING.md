# Contributing to Documentation

## Commit Message Specification

The commit message format is: [Note]<Type> <Message>.

[Optional Type](https://gitmoji.dev/)

Optional Note:
`!`: Breaking change.
`?`: Temporarily change.

When a commit contains more than one type, write the main change on the first line.

## Minecraft Proper Noun

For proper nouns that appear in Minecraft, follow the translations in the Minecraft Wiki. Folk aliases are not allowed.

## Configuration script
Please use this command to generate the configuration file from [Configuration](https://github.com/LeavesMC/Configuration) for the documentation.
```bash
bun run leaves-config
```