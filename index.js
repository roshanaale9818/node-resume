const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const filePath = path.join(__dirname, "index.html");
  console.log(filePath);
  const fileUrl = `file://${filePath}`;

  await page.goto(fileUrl, { waitUntil: "networkidle2" });

  const pdfPath = path.join(__dirname, "resume.pdf");
  await page.pdf({ path: pdfPath, format: "A4" });

  await browser.close();

  console.log(`PDF generated at ${pdfPath}`);
})();
