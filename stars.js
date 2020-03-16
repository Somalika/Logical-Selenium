const { Builder, By ,Key } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build(); //call chrome from selenium driver

//driver.manage().window().setPosition(0,3000);

driver.manage().window().maximize()

async function example() {

    //Simple Form Example 
    try{
    //await driver.manage().window().maximize()
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
    await driver.findElement(By.id("email")).sendKeys("somalikaboeeu138@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("Admin@123");
    await driver.findElement(By.id("submit")).click();
    } catch (Passed){
       Console.log(Passed);
    }
    
    //Radio Button Form Example
    try {
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
      await driver.findElement(By.id("title")).sendKeys("Hello Selenium");
      //await (await driver).findElement(by.css('#title')).sendKeys("Leaning Selenium tool"); //# is to select input field with the title
      await driver.findElement(By.id("description")).sendKeys("Hello");
      await driver.findElement(By.xpath("//nb-checkbox[@value='option2']/label/span")).click();
      //await driver.findElement(By.css('div:nth-child(2) > label > span.custom-control-indicator')).click();
      await driver.findElement(By.xpath("//*[@id='submit']")).click();

    }catch(error){
      console.log(error);

    