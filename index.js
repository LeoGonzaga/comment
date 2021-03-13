const puppeteer = require("puppeteer-core");

(async () => {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto("https://www.instagram.com/leogonzaga__/following/");
  await page.waitForSelector('input[type="text"]');
  await page.click("input[type=text]");
  await page.waitForTimeout(1000);
  await page.keyboard.type("seu_user");
  await page.waitForTimeout(1000);
  await page.click("input[type=password]");
  await page.keyboard.type("sua_senha");
  await page.click("button[type=submit]");
  await page.waitForNavigation();
  await page.click(".cmbtv");
  await page.waitForNavigation();

  await page.$$eval(".k9GMp", (elements) => {
    console.log(elements[0]);
    let ul = elements[0].lastElementChild;
    ul.querySelector(".-nal3 ").click();
  });
  await page.waitForSelector(".FPmhX");

  let a = await page.$$eval(".FPmhX", (elements) => {
    let followers = [];
    let count = 0;

    while (count < 30000) {
      document.querySelector(".isgrP").scroll(0, window.innerHeight + count);

      elements.forEach((i) => {
        followers.push(i.innerHTML);
        console.log(i.innerHTML);
      });
      console.log(followers);
      count += 100;
    }

    return followers;
  });
  page.close();

  console.log(a);

  a.map((i) => {
    console.log(i);
  });

  //   let followers = document.querySelectorAll(".wo9IH span a");
  //   followers.forEach((el) => console.log(el.innerHTML));
})();
