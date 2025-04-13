import fs from "fs";
import path from "path";
import yaml from "yaml";
import fetch from "node-fetch";

const configPath = process.argv[2];
const software = process.argv[3] || "leaves";

const onlineConfig = {
  leaves:
    "https://raw.githubusercontent.com/LeavesMC/Configuration/refs/heads/Leaves/leaves.yml",
};

if (!configPath) {
  console.error("Error: Please specify a directory or file.");
}

if (!onlineConfig.hasOwnProperty(software)) {
  console.error("Error: Unknown software.");
}

async function downloadConfig(type) {
  const url = onlineConfig[type];
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch: ${response.status} ${response.statusText}`
    );
  }

  const config = await response.text();
  return config;
}

function valueHandler(key = "", value) {
  if (Array.isArray(value)) {
    const array = value.map((item) =>
      typeof item === "string" && item.includes(":") ? `'${item}'` : item
    );
    return { default: array, description: "" };
  }

  const randomKey = ["xaero-map-server-id"];

  if (randomKey.includes(key)) {
    return { default: "$random$int", description: "" };
  }

  // Hack
  if (typeof value === "number" && !value.toString().includes(".")) {
    return { default: value.toString() + ".0", description: "" };
  }

  if (typeof value === "bigint") {
    return { default: value.toString(), description: "" };
  }

  if (
    typeof value === "string" &&
    (value.toLowerCase() === "true" || value.toLowerCase() === "false")
  ) {
    return { default: `'${value}'`, description: "" };
  }

  if (typeof value === "string" && value === "") {
    return { default: `''`, description: "" };
  }

  return { default: String(value), description: "" };
}

function configHandler(
  obj,
  oldConfig = null,
  updated = new WeakSet(),
  key = ""
) {
  if (updated.has(obj)) {
    throw new Error("Circular reference found.");
  }

  if (Array.isArray(obj)) {
    const updatedValue = valueHandler(key, obj);
    if (oldConfig && oldConfig.description) {
      updatedValue.description = oldConfig.description;
    }
    return updatedValue;
  }

  if (typeof obj === "object" && obj !== null) {
    updated.add(obj);
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
      const oldValue = oldConfig?.[key];
      result[key] = configHandler(value, oldValue, updated, key);
    }
    updated.delete(obj);
    return result;
  }

  const updatedValue = valueHandler(key, obj);
  if (oldConfig && oldConfig.description) {
    updatedValue.description = oldConfig.description;
  }
  return updatedValue;
}

async function updateConfig(files, baseConfig) {
  return Promise.all(
    files.map(async (filePath) => {
      try {
        let oldConfig = null;

        const existingConfig = await fs.promises.readFile(filePath, "utf8");
        if (existingConfig.trim()) {
          oldConfig = yaml.parse(existingConfig);
        }

        const config = yaml.parse(baseConfig, { intAsBigInt: true /* Hack */ });
        const updatedConfig = yaml.stringify(configHandler(config, oldConfig));

        await fs.promises.writeFile(filePath, updatedConfig, "utf8");
        console.log(`Updated: ${filePath}`);
      } catch (error) {
        console.error(`Failed to update the configuration file: ${filePath}`);
        console.error(error.stack || error.message);
      }
    })
  );
}

try {
  const stats = await fs.promises.stat(configPath);
  const baseConfig = await downloadConfig(software);

  if (stats.isFile()) {
    if (path.extname(configPath) === ".yml") {
      await updateConfig([configPath], baseConfig);
    } else {
      console.error("Error: This is not a valid configuration file.");
    }
  } else if (stats.isDirectory()) {
    const files = await fs.promises.readdir(configPath);
    const ymlFiles = files
      .filter((file) => path.extname(file) === ".yml")
      .map((file) => path.join(configPath, file));

    if (ymlFiles.length === 0) {
      console.error("Error: No configuration files found in this directory.");
    }

    await updateConfig(ymlFiles, baseConfig);
  }
} catch (error) {
  console.error("Error:", error.message);
}
