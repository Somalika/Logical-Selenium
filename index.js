const { Builder, By ,Key } = require("selenium-webdriver");
const driver = new Builder().forBrowser("chrome").build();

//driver.manage().window().setPosition(0,3000);

driver.manage().window().maximize()

async function example() {

    try{
    //await driver.manage().window().maximize()
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/simple-registration");
    await driver.findElement(By.id("email")).sendKeys("somalikaboeeu138@gmail.com");
    await driver.findElement(By.id("password")).sendKeys("Admin@123");
    await driver.findElement(By.id("submit")).click();
    } catch (Passed){
       Console.log(Passed);
    }

    try {
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/radio-button-form");
      await driver.findElement(By.id("title")).sendKeys("Hello Selenium");
      await driver.findElement(By.id("description")).sendKeys("Hello");
      await driver.findElement(By.xpath("//nb-checkbox[@value='option2']/label/span")).click();
      await driver.findElement(By.xpath("//*[@id='submit']")).click();

    }catch(error){
      console.log(error);

    }

    try {
      //await driver.manage().window().maximize()
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/checkbox-form");
      await driver.findElement(By.xpath("//*[@id='name']")).sendKeys("Lucy Boeury");
      await driver.findElement(By.xpath("//*[@id='comment']")).sendKeys("Leaning Selenium is just trying to kill developers XD");
      await driver.findElement(By.xpath("//input[@value='two-bed-appartment']/following::span")).click();
      await driver.findElement(By.xpath("//nb-checkbox[@value='breakfast']/label/span")).click();
      await driver.findElement(By.xpath("//nb-checkbox[@value='lunch']/label/span")).click();
      await driver.findElement(By.xpath("//button[@id='submit']")).click();
  } catch (error) {
      Console.log(error);
  }

    try{
      await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/dropdown-form");
      await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click();
      await driver.findElement(By.xpath("//nb-option[@value='1']")).click();
      await driver.findElement(By.xpath("//nb-option[@value='4']")).click();
      await driver.findElement(By.xpath("//nb-select[@formcontrolname='select1']/button")).click();

      await driver.findElement(By.xpath("//select[@id='selectCar']")).click();

      await driver.findElement(By.xpath("//nb-select[@formcontrolname='select3']/button")).click();
      await driver.findElement(By.xpath("//nb-option[@value='4']")).click();

      await driver.findElement(By.xpath(`//select[@formcontrolname='select4']/option[@value="volvo"]`)).click();

      await driver.findElement(By.id("submit")).click();

    } catch(error){
      Console.log(error);
    }

  try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/datepicker-form");
    await driver.findElement(By.xpath("//input[@formcontrolname='dateOne']")).sendKeys("April 30, 1998");
    await driver.findElement(By.xpath("//input[@formcontrolname='dateTwo']")).sendKeys("April 20, 2020 - May 15, 2025");
    //await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(Key.TAB).perform();
    //await driver.findElement(By.xpath("div[3]")).click();
    await driver.findElement(By.id("submit")).click();

  } catch (error) {
    Console.log(error);
  }

  try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/file-form");
    await driver.findElement(By.xpath("//input[@formcontrolname='file']")).sendKeys(__dirname + "\\pic.png");
    await driver.findElement(By.id("submit")).sendKeys();


  } catch (error) {
    console.log(error);
  }

  // iFrame
  
  // try{
  //   await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
  //   await driver.get("https://docs.google.com/forms/d/e/1FAIpQLSeAgS5wvRhqLfWR-RVA3SFHNLt-JVMAC4UB0-plJBBkxZClIA/viewform?embedded=true&hl=en")
  //   await driver.findElement(By.xpath("//input[@jsname='YPqjbf']")).sendKeys("Lucy Boeury");
  //   await driver.findElement(By.xpath("//form[@id='mG61Hd']")).click();
  //   await driver.findElement(By.xpath("(//input[@type='text'])[2]")).sendKeys("50");
  //   await driver.findElement(By.xpath("//form[@id='mG61Hd']")).click();


  // }catch(error){
  //   console.log(error);
  // }

  try {
    await driver.get("https://rori4.github.io/selenium-practice/#/pages/practice/iframe-form");
    //await driver.manage().deleteAllCookies();
    await driver.switchTo().frame(0);
    await driver.findElement(By.xpath("//input[@aria-label='Name']")).sendKeys("Lucy");
    await driver.actions().sendKeys(Key.TAB).perform();
    await driver.actions().sendKeys(
        Key.chord(
          Key.ARROW_DOWN,
          Key.ARROW_DOWN,
          Key.ARROW_DOWN,
          Key.ARROW_DOWN,
        )
      ).perform();
         await driver.actions().sendKeys(Key.TAB, ).perform();
         await driver.actions().sendKeys(Key.TAB, ).perform();
      //Drop down
      await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
      await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
      await driver.actions().sendKeys(Key.ARROW_DOWN).perform();
      await driver.actions().sendKeys(Key.ENTER).perform();
      await driver.actions().sendKeys(Key.TAB).perform();
      await driver.actions().sendKeys(Key.chord("02", "20", "2020")).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB, Key.SPACE)).perform();
      await driver.actions().sendKeys(Key.chord(Key.TAB, "This is my secret answer")).perform();
      //await driver.actions().sendKeys(Key.chord(Key.TAB,Key.SPACE)).perform();
            
} catch (error) {
    Console.log(error);
}


}
example();


