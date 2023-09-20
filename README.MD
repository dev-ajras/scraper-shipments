# Shipping Information Retrieval Console Application

This console application is designed to retrieve shipping information interactively via prompts. It prompts the user for two parameters, "container" and "MBL" (Master Bill of Lading), and then retrieves relevant shipment data from a shipping website. If the provided container is not found in the database, the application will indicate that the container is not present.

## Usage

1. Run the application in your terminal.
2. Enter the "container" and "MBL" when prompted.
3. The application will access a shipping website and retrieve shipment information based on the provided parameters.
4. If the container is found, the application will display the shipment details.
5. If the container is not found, it will notify the user accordingly.

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [Playwright](https://github.com/microsoft/playwright) for web scraping.
- [Dotenv](https://github.com/motdotla/dotenv) for environment variable management.

## Installation

1. Clone this repository.
2. Install the required dependencies using npm or yarn:

- npm install
- yarn install

3. **IMPORTANT** You need to have playwright installed and updated ( npx playwright install )

4. Rename the `.env.example` file in the project root to `.env`.
5. Open the newly created `.env` file and set the value of the `URL` variable to the desired website URL or the URL of the shipping database.

## How to Run

1. Navigate to the project directory in your terminal.
2. Run the application:

- [npm run dev] running in dev mode.
- [npm run start] running build mode.

3. Follow the prompts to input the container and MBL.
4. View the retrieved shipping information.
5. If the specified container is not found in the database for the provided MBL, the program will throw an error to indicate that the container is not present.
