@fhcproject
Feature: FHCProject

  @userstory01
  Scenario:  Login page must be accessible and user can enter datas validly or unvalidly
    Given Environment must be accesable
    And Invalid username invalid password should not acces
    And Valid username invalid password should not acces
    And inValid username valid password should not acces
    Then Valid username valid password should acces succesfully

  @userstory02
  Scenario:  Main Menu and subtitles must be executable
    Given System Management must be accesible
    And User Management must be accesible
    And User List must be accesible
    And Hotel Management must be accesible
    And Hotel List must be accesible
    And Hotel Rooms must be accesible
    Then Room Reservations must be accesible
    
  @userstory03
  Scenario: US03 Hotel must be created
    Given Navigate to Hotel List
    And Hotel List must be accessible
    And Add Hotel must be executable
    And Unsuccesful registration with invalid data
    And Clear unsuccesful data
    And Succesful registration with valid data
    And Navigate to Hotel List
    Then Check registered data on Hotel List

  @userstory04
  Scenario: TC04_Hotel Room olusturulabilmelidir
    Given Hotel Room linkinin calistigi kontrol edilmeli
    And Add Hotelroom butonunun calistigi kontrol edilmeli
    And Butun bilgiler girilip, save butonuna basildiginda basariyla kayit yapildi mesaji gorulmeli
    And Girilmesi gereken bilgilerin eksik girililip, save butonuna basildiginda kayit etmediginin gorulmesi
    Then Girilen bilgilerin Home List`esinde goruldugunu dogrulayin


  @userstory05
  Scenario:Reservation can be created
    Given ROOM RESERVATIONS page must be accessible
    And  ADD ROOM RESERVATION must be executable
    And  User enters valid datas at Create Hotelroomreservation
    And  Alert Box must be accessible
    And  User enters invalid datas at Create Hotelroomreservation
    Then  LIST OF RESERVATION must be accessible

  @userstory06
  Scenario: User List Creation
    Given user go to page
    Given USER LIST page must be accessible.
    Given ADD USER button must be executable
    Given An User can not be added if all required datas is not entered validly.
    Given An User can be added if all required datas entered validly.
    Given Check if the Alert Box works.
    Given Check if added users can be displayed on User List Table.



