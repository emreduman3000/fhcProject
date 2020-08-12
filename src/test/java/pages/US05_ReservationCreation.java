package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US05_ReservationCreation
{
    public US05_ReservationCreation()
    {
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(xpath = "//a[@href='/admin/RoomReservationAdmin']")
    public WebElement roomReservation;

    @FindBy(xpath = "//span[text()='List Of Reservations']")
    public WebElement listOfReservationTitle;

    @FindBy(xpath = "//a[@href='/admin/RoomReservationAdmin/Create']")
    public WebElement addReservationButton;

    @FindBy(id = "IDUser")
    public WebElement idUser;
    @FindBy(id = "IDHotelRoom")
    public WebElement idHotelRoom;
    @FindBy(id = "Price")
    public WebElement price;
    @FindBy(id = "DateStart")
    public WebElement dateStart;
    @FindBy(id = "DateEnd")
    public WebElement dateEnd;
    @FindBy(id = "AdultAmount")
    public WebElement adultAmount;
    @FindBy(id = "ChildrenAmount")
    public WebElement childrenAmount;
    @FindBy(id = "ContactNameSurname")
    public WebElement surname;
    @FindBy(id ="ContactPhone")
    public WebElement phone;
    @FindBy(id = "ContactEmail")
    public WebElement email;
    @FindBy(id = "Notes")
    public WebElement notes;
    @FindBy(id = "Approved")
    public WebElement isApproved;
    @FindBy(id = "IsPaid")
    public WebElement isPaid;
    @FindBy(id = "btnSubmit")
    public WebElement saveButton;
    @FindBy(className = "bootbox-body")
    public WebElement successMessage;

    @FindBy(xpath="//button[@class='btn btn-primary']")
    public WebElement alertOKButton;

    @FindBy(name = "ContactEmail")
    public WebElement emailSearchBox;

    @FindBy(xpath = "//button[text()='Search']")
    public  WebElement searchButton;
    @FindBy(xpath = "//*[@id='datatable_ajax']/tbody/tr[1]/td[11]")
    public WebElement registeredEmail;
    public void clearDatas()
    {
        US05_ReservationCreation us05_reservationCreation=new US05_ReservationCreation();
        us05_reservationCreation.price.clear();
        us05_reservationCreation.adultAmount.clear();
        us05_reservationCreation.childrenAmount.clear();
        us05_reservationCreation.surname.clear();
        us05_reservationCreation.phone.clear();
        us05_reservationCreation.email.clear();
        us05_reservationCreation.notes.clear();
        us05_reservationCreation.isApproved.isSelected();
        us05_reservationCreation.isPaid.isSelected();
    }
}
