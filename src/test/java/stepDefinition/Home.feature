@HomePage
Feature: For validating NTL Taxi home page
Scenario Outline: Validate Home page with valid data.
Given Open Browser as <BROWSER>
Then Enter URL as <URL>
Then Enter  Username as <NAME>
And Enter Mobile Number as <NUMBER>
Then Enter PickupAddress as <PICKUPADDRESS>
And Enter DropAddress as <DROPADDRESS>
When Select the Vehicle Type as  <VEHICLETYPE>
Then Click the Book Later Checkbox
But Dont click Book button
Examples: 
|BROWSER|URL|NAME|NUMBER|PICKUPADDRESS|DROPADDRESS|VEHICLETYPE|
|Chrome|Url1|Name1|Number1|PickupAdrress1|DropAddress1|VehicleType1|
|Firefox|Url2|Name2|Number2|PickupAdrress2|DropAddress2|VehicleType2|
|Safari|Url3|Name3|Number3|PickupAdrress3|DropAddress3|VehicleType3|
|Opera|Url4|Name4|Number4|PickupAdrress4|DropAddress4|VehicleType4|