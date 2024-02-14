# Documentation

Documentation for all projects made by the LeavesMC team.

## Getting Started

How to get docs running on your local machine for development.

### Prerequisites

- [Node.js](https://nodejs.org)
- [pnpm](https://pnpm.io/installation)

### Local Development

1. Clone the repository. If you plan to make changes, create a fork first!

```bash
git clone https://github.com/LeavesMC/Documentation.git
```

2. Install all required dependencies.

```bash
pnpm install
```

3. Start the development server

```bash
pnpm run dev
```

This will start a local development server and open a browser window. The majority of changes will be instantly reflected live without the need to restart the development server or reload the page in your browser. Edit away!

### Building

```bash
pnpm run build
```

This command builds a production-ready deployment into the `.vitepress/dist` directory. These files are ready to be hosted on any static content server.

## License

The Leaves Documentation (e.g., `.md` files in the `/src` folder) is [CC-BY-SA-4.0](https://github.com/Leaves/docs/blob/main/LICENSE-DOCS) licensed.

The supporting code is
[AGPL-3.0](https://github.com/PaperMC/docs/blob/main/LICENSE) licensed.

The LeavesMC logomark does not inherit a license from any of the projects it represents.
