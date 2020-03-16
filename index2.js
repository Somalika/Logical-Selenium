const {Builder, By, Key} = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

//const driver = new Builder()
// .forBrowser("firefox")
// .build();

async function checkboxForm(){
    try {
        (await driver).get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
        (await driver).findElement(By.xpath("//*[@id='name']")).sendKeys("Lucy Boeury");
        (await driver).findElement(By.xpath("//*[@id='comment']")).sendKeys("");
        (await driver).findElement(By.xpath("//input[@value='presidential-suite']/following::span")).click();
        (await driver).findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
        (await driver).findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
        (await driver).findElement(By.xpath("//button[@id='submit']")).click();
    } catch (error) {
        Console.log(error);
    }
}
checkboxForm();





