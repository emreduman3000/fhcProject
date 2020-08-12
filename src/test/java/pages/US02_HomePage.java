package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.ConfigurationReader;
import utilities.Driver;

public class US02_HomePage {
    public US02_HomePage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//span[@class='title']")
    public WebElement systemManagement;

    @FindBy(id = "menuUsers")
    public WebElement userManagement;

    @FindBy(xpath = "//a[@href='/admin/UserAdmin']")
    public WebElement userlist;

    @FindBy(xpath = "//span[text()='ListOfUsers']")
    public WebElement listOfUserTitle;

    @FindBy(id = "menuHotels")
    public WebElement hotelManagement;

    @FindBy(xpath = "//a[@href='/admin/HotelAdmin']")
    public WebElement hotelList;

    @FindBy(xpath = "//a[@href='/admin/HotelRoomAdmin']")
    public WebElement hotelRooms;

    @FindBy(xpath = "//a[@href='/admin/RoomReservationAdmin']")
    public WebElement roomReservation;

    @FindBy(xpath = "//span[text()='List Of Hotels']")
    public WebElement listOfHotelTitle;

    @FindBy(xpath = "//span[text()='List Of Hotelrooms']")
    public WebElement listOfHotelRoomTitle;

    @FindBy(xpath = "//span[text()='List Of Reservations']")
    public WebElement listOfReservationTitle;



    public void login()
    {
        Driver.getDriver().get(ConfigurationReader.getProperty("fhc_login_url"));
        US01_LoginPage us01_loginPage=new US01_LoginPage();
        us01_loginPage.username.sendKeys("manager2");
        us01_loginPage.password.sendKeys(("Man1ager2!"));
        us01_loginPage.loginButton.click();
    }

}