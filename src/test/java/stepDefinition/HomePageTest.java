package stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HomePageTest {
	@Given("^Open Browser as (.*)$")
	public void openBrowser(String Browser) {
		System.out.println("I am opening the Browser" + " " + Browser); //+" " is used for adding space
	}

	@Then("^Enter URL as (.*)$")
	public void enterURL(String URL) {
		System.out.println("I am Entering URL" + " " + URL);
	}

	@Then("^Enter  Username as (.*)$")
	public void enterUsername(String Username) {
		System.out.println("I am Entering  Username" + " " + Username);
	}

	@And("^Enter Mobile Number as (.*)$")
	public void enterMobileNumber(String MobNo) {
		System.out.println("I am Entering Mobile Number" + " " + MobNo);
	}

	@Then("^Enter PickupAddress as (.*)$")
	public void enterPickupAddress(String PickupAddress) {
		System.out.println("I am Entering PickupAddress" + " " + PickupAddress);
	}

	@And("^Enter DropAddress as (.*)$")
	public void enterDropAddress(String DropAddress) {
		System.out.println("I am Entering DropAddress" + " " + DropAddress);
	}

	@When("^Select the Vehicle Type as (.*)$")
	public void selectTheVehicleType(String VehicleType) {
		System.out.println("I am Selecting the Vehicle Type" + " " + VehicleType);
	}

	@Then("^Click the Book Later Checkbox$")
	public void clickTheBookLaterCheckBox() {
		System.out.println("I am Clicking the Book Later Checkbox");
	}

	@But("^Dont click Book button$")
	public void DontClickBookButton() {
		System.out.println("I am clicking Book button");
	}
}
