import puppeteer from "puppeteer";

const url = process.env.PORTFOLIO_URL || "http://localhost:4173/";
const output = process.env.PDF_OUTPUT || "portfolio.pdf";

(async () => {
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });
  const page = await browser.newPage();

  // Utiliser les styles d’impression
  await page.emulateMediaType("print");

  // Aller sur la page
  await page.goto(url, { waitUntil: "networkidle0", timeout: 120000 });

  // Générer le PDF A4 avec marges et fonds
  await page.pdf({
    path: output,
    format: "A4",
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: "12mm", right: "12mm", bottom: "16mm", left: "12mm" },
  });

  await browser.close();
  console.log(`PDF généré: ${output}`);
})();
