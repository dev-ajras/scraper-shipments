import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function askContainer() {
  return new Promise<string>((resolve) => {
    rl.question("Container:", (container) => {
      resolve(container.toUpperCase());
    });
  });
}

export function askMbl() {
  return new Promise<string>((resolve) => {
    rl.question("MasterBLNumber:", (mbl) => {
      resolve(mbl.toUpperCase());
    });
  });
}
