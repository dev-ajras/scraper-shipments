import "dotenv/config";
import { ShipmentTracker } from "./services/eschenker";
import { askContainer, askMbl } from "./utils/inputArgs";
async function main() {
  const container = await askContainer();
  const mbl = await askMbl();
  console.log("\nLoading...");
  const tracker = new ShipmentTracker();
  try {
    const document = await tracker.exec(container, mbl);
    console.dir(document);
    process.exit(0);
  } catch (err: any) {
    console.error("Error: ", err.message);
    process.exit(0);
  }
}

main();
