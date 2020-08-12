package stepdefinitions;


import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.interactions.Actions;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.BeforeSuite;
import pages.US01_LoginPage;
import pages.US05_ReservationCreation;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.lang.module.Configuration;
import java.util.concurrent.TimeUnit;

public class Hooks {

    public Actions action;

    @BeforeSuite
    public void setUp()
    {
        action = new Actions(Driver.getDriver()); // TestBase class'ına koy
    }

  /*
    @Before
    public void waitt()
    {
        Driver.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);//  ==>>> TestBase'e de koyabilirim
    }
   */


    US01_LoginPage us01_loginPage;
    //@Before(value = "@fhcproject and not @userstory01")
    public void login()
    {
        Driver.getDriver().get(ConfigurationReader.getProperty("fhc_login_url"));
        us01_loginPage=new US01_LoginPage();
        us01_loginPage.username.sendKeys("manager2");
        us01_loginPage.password.sendKeys(("Man1ager2!"));
        us01_loginPage.loginButton.click();
    }

    //her userstoryden önce logın nasıl calısıcak?



    @AfterSuite
    public void tearDown(Scenario scenario)
    {
        //screenshot almak icin
        final byte[] screenshot =((TakesScreenshot) Driver.getDriver()).getScreenshotAs(OutputType.BYTES);
        //Her fail olan scenario'dan sonra screenshot almaliyiz.
        //Scenario fail olursa image ekleyelim
        if(scenario.isFailed()){
            System.out.println("Hooks Class - tearDown Method");
            scenario.embed(screenshot,"image/png");
        }
        //Driver.closeDriver();
    }


}
