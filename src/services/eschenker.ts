import { Browser, chromium } from "playwright";
import { getMbl } from "../utils/getMbl";
export class ShipmentTracker {
  private baseUrl: string = process.env.URL || "";

  public async exec(container: string, mbl: string): Promise<any> {
    const tableContent = [];
    const shipmentDetails = [];
    const browser: Browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1600, height: 1200 });
    await page.goto(this.baseUrl);

    await page.goto(this.baseUrl);
    const element = page
      .locator("es-shell")
      .locator("shell-footer")
      .locator("shell-modal")
      .locator("shell-embedded-app")
      .frameLocator("iframe")
      .locator(
        '[class="mat-focus-indicator primary mat-button mat-button-base"]'
      );
    await element.click();
    await page.getByPlaceholder("Enter Your Reference Number").fill(mbl);

    const divisions = [
      "Search",
      "See more",
      "Container",
      "Other References",
      "Contact Information",
      "Vessels",
    ];
    for (const div of divisions) {
      await page.getByText(div).click();
    }

    await page.waitForSelector(".tracking-details-value");
    const shipmentContainers = (
      await page
        .locator(".value-left-padding.collapsible-content.ng-star-inserted")
        .textContent()
    )?.split(" ");
    const mblShipment = getMbl(shipmentContainers!);

    if (!mblShipment.includes(container)) {
      throw new Error("Container not found in this shipment.");
      process.exit(121);
    }

    await page.getByText("Shipment Status History").click();
    const elements = await page.$$(".tracking-details-value");
    const cells = await page.$$("table td");

    for (const cell of cells) {
      tableContent.push(await cell.textContent());
    }

    for (const element of elements) {
      shipmentDetails.push(await element.textContent());
    }
    const normalized_data = {
      destination: shipmentDetails[3]?.trim(),
      revised_arrival: shipmentDetails[5]?.trim(),
      vessel_name: tableContent[0]?.trim(),
    };
    const raw_content = {
      table_cells: tableContent,
      shipment_details: shipmentDetails,
    };
    return {
      normalized_data,
      raw_content,
    };
  }
}
