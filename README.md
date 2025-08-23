# Documentation

Documentation for all projects made by the LeavesMC team.

## Getting Started

How to get docs running on your local machine for development.

### Prerequisites

- [Node.js](https://nodejs.org)
- [Bun](https://bun.sh)

### Local Development

1. Clone the repository. If you plan to make changes, create a fork first!

```bash
git clone https://github.com/LeavesMC/Documentation.git
```

2. Install all required dependencies.

```bash
bun install
```

3. Start the development server

```bash
bun dev
```

This will start a local development server and open a browser window. The majority of changes will be instantly reflected live without the need to restart the development server or reload the page in your browser. Edit away!

### Building

```bash
bun run build
```


This command builds a production-ready deployment into the `.vitepress/dist` directory. These files are ready to be hosted on any static content server.
### Contributing
Please use this command to generate the configuration file from [Configuration](https://github.com/LeavesMC/Configuration) for the documentation.
```bash
bun run leaves-config
```


## License

The Leaves Documentation (e.g., `.md` files in the `/src` folder) is [CC-BY-SA-4.0](https://github.com/LeavesMC/Documentation/blob/main/LICENSE-DOCS) licensed.

The supporting code is
[MPL-2.0](https://github.com/LeavesMC/Documentation/blob/main/LICENSE) licensed.

The LeavesMC logomark does not inherit a license from any of the projects it represents.
