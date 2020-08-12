package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.testng.Assert;
import pages.US01_LoginPage;
import pages.US02_HomePage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class US02_HomePageStepDefs {

    US02_HomePage us02_homePage = new US02_HomePage();



    @Given("System Management must be accesible")
    public void system_Management_must_be_accesible() {

        Assert.assertTrue(us02_homePage.systemManagement.isDisplayed());
    }

    @Given("User Management must be accesible")
    public void user_Management_must_be_accesible() {
        Assert.assertTrue(us02_homePage.userManagement.isDisplayed());

    }

    @Given("User List must be accesible")
    public void user_List_must_be_accesible() {
        us02_homePage.userlist.click();
        Assert.assertTrue(us02_homePage.listOfUserTitle.isDisplayed());
    }

    @Given("Hotel Management must be accesible")
    public void hotel_Management_must_be_accesible() {
        us02_homePage.hotelManagement.click();
        Assert.assertTrue(us02_homePage.hotelList.isDisplayed());
        Assert.assertTrue(us02_homePage.hotelRooms.isDisplayed());
        Assert.assertTrue(us02_homePage.roomReservation.isDisplayed());
    }

    @Given("Hotel List must be accesible")
    public void hotel_List_must_be_accesible() {
        us02_homePage.hotelList.click();
        Assert.assertTrue(us02_homePage.listOfHotelTitle.isDisplayed());
    }

    @Given("Hotel Rooms must be accesible")
    public void hotel_Rooms_must_be_accesible() {
        us02_homePage.hotelRooms.click();
        Assert.assertTrue(us02_homePage.listOfHotelRoomTitle.isDisplayed());

    }

    @Then("Room Reservations must be accesible")
    public void room_Reservations_must_be_accesible() {
        us02_homePage.roomReservation.click();
        Assert.assertTrue(us02_homePage.listOfReservationTitle.isDisplayed());
    }
}