$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/FHCProject.feature");
formatter.feature({
  "name": "FHCProject",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@fhcproject"
    }
  ]
});
formatter.scenario({
  "name": "Login page must be accessible and user can enter datas validly or unvalidly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fhcproject"
    },
    {
      "name": "@userstory01"
    }
  ]
});
formatter.step({
  "name": "Environment must be accesable",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US01_LoginPageStepDefs.environment_must_be_accesable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Invalid username invalid password should not acces",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US01_LoginPageStepDefs.invalid_username_invalid_password_should_not_acces()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Valid username invalid password should not acces",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US01_LoginPageStepDefs.valid_username_invalid_password_should_not_acces()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "inValid username valid password should not acces",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US01_LoginPageStepDefs.invalid_username_valid_password_should_not_acces()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Valid username valid password should acces succesfully",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US01_LoginPageStepDefs.valid_username_valid_password_should_acces_succesfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Main Menu and subtitles must be executable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fhcproject"
    },
    {
      "name": "@userstory02"
    }
  ]
});
formatter.step({
  "name": "System Management must be accesible",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US02_HomePageStepDefs.system_Management_must_be_accesible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Management must be accesible",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US02_HomePageStepDefs.user_Management_must_be_accesible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User List must be accesible",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US02_HomePageStepDefs.user_List_must_be_accesible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel Management must be accesible",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US02_HomePageStepDefs.hotel_Management_must_be_accesible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel List must be accesible",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US02_HomePageStepDefs.hotel_List_must_be_accesible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Hotel Rooms must be accesible",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US02_HomePageStepDefs.hotel_Rooms_must_be_accesible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Room Reservations must be accesible",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US02_HomePageStepDefs.room_Reservations_must_be_accesible()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "TC04_Hotel Room olusturulabilmelidir",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fhcproject"
    },
    {
      "name": "@userstory04"
    }
  ]
});
formatter.step({
  "name": "Hotel Room linkinin calistigi kontrol edilmeli",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US04_RoomCreationStepDefs.hotel_Room_linkinin_calistigi_kontrol_edilmeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add Hotelroom butonunun calistigi kontrol edilmeli",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US04_RoomCreationStepDefs.add_Hotelroom_butonunun_calistigi_kontrol_edilmeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Butun bilgiler girilip, save butonuna basildiginda basariyla kayit yapildi mesaji gorulmeli",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US04_RoomCreationStepDefs.butun_bilgiler_girilip_save_butonuna_basildiginda_basariyla_kayit_yapildi_mesaji_gorulmeli()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Girilmesi gereken bilgilerin eksik girililip, save butonuna basildiginda kayit etmediginin gorulmesi",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US04_RoomCreationStepDefs.girilmesi_gereken_bilgilerin_eksik_girililip_save_butonuna_basildiginda_kayit_etmediginin_gorulmesi()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Girilen bilgilerin Home List`esinde goruldugunu dogrulayin",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US04_RoomCreationStepDefs.girilen_bilgilerin_Home_List_esinde_goruldugunu_dogrulayin()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Reservation can be created",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@fhcproject"
    },
    {
      "name": "@userstory05"
    }
  ]
});
formatter.step({
  "name": "ROOM RESERVATIONS page must be accessible",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US05_ReservationCreationStepDefs.room_RESERVATIONS_page_must_be_accessible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "ADD ROOM RESERVATION must be executable",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US05_ReservationCreationStepDefs.add_ROOM_RESERVATION_must_be_executable()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid datas at Create Hotelroomreservation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US05_ReservationCreationStepDefs.user_enters_valid_datas_at_Create_Hotelroomreservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alert Box must be accessible",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US05_ReservationCreationStepDefs.alert_Box_must_be_accessible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters invalid datas at Create Hotelroomreservation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US05_ReservationCreationStepDefs.user_enters_invalid_datas_at_Create_Hotelroomreservation()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "LIST OF RESERVATION must be accessible",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US05_ReservationCreationStepDefs.list_OF_RESERVATION_must_be_accessible()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cbutton class\u003d\"btn btn-sm yellow filter-submit margin-bottom\"\u003e...\u003c/button\u003e is not clickable at point (1263, 340). Other element would receive the click: \u003cselect name\u003d\"IsPaid\" class\u003d\"form-control form-filter input-sm\"\u003e...\u003c/select\u003e\n  (Session info: chrome\u003d84.0.4147.105)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027NBS217552995\u0027, ip: \u0027192.168.0.17\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\EMREDU~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53999}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 84c59c1f74e1bda22be8eb6db78c6593\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat stepdefinitions.US05_ReservationCreationStepDefs.list_OF_RESERVATION_must_be_accessible(US05_ReservationCreationStepDefs.java:145)\r\n\tat ✽.LIST OF RESERVATION must be accessible(file:///C:/Users/emreduman/IdeaProjects/FHCProject/src/test/resources/features/FHCProject.feature:38)\r\n",
  "status": "failed"
});
});