$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("stepDefinition/Home.feature");
formatter.feature({
  "line": 2,
  "name": "For validating NTL Taxi home page",
  "description": "",
  "id": "for-validating-ntl-taxi-home-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate Home page with valid data.",
  "description": "",
  "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open Browser as \u003cBROWSER\u003e",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as \u003cURL\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter  Username as \u003cNAME\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobile Number as \u003cNUMBER\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAddress as \u003cPICKUPADDRESS\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAddress as \u003cDROPADDRESS\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as  \u003cVEHICLETYPE\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the Book Later Checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Dont click Book button",
  "keyword": "But "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;",
  "rows": [
    {
      "cells": [
        "BROWSER",
        "URL",
        "NAME",
        "NUMBER",
        "PICKUPADDRESS",
        "DROPADDRESS",
        "VEHICLETYPE"
      ],
      "line": 14,
      "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;1"
    },
    {
      "cells": [
        "Chrome",
        "Url1",
        "Name1",
        "Number1",
        "PickupAdrress1",
        "DropAddress1",
        "VehicleType1"
      ],
      "line": 15,
      "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;2"
    },
    {
      "cells": [
        "Firefox",
        "Url2",
        "Name2",
        "Number2",
        "PickupAdrress2",
        "DropAddress2",
        "VehicleType2"
      ],
      "line": 16,
      "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;3"
    },
    {
      "cells": [
        "Safari",
        "Url3",
        "Name3",
        "Number3",
        "PickupAdrress3",
        "DropAddress3",
        "VehicleType3"
      ],
      "line": 17,
      "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;4"
    },
    {
      "cells": [
        "Opera",
        "Url4",
        "Name4",
        "Number4",
        "PickupAdrress4",
        "DropAddress4",
        "VehicleType4"
      ],
      "line": 18,
      "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "Validate Home page with valid data.",
  "description": "",
  "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as Chrome",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as Url1",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter  Username as Name1",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobile Number as Number1",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAddress as PickupAdrress1",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAddress as DropAddress1",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as  VehicleType1",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the Book Later Checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Dont click Book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Chrome",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 261156745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Url1",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 226769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name1",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterUsername(String)"
});
formatter.result({
  "duration": 563500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number1",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterMobileNumber(String)"
});
formatter.result({
  "duration": 229701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PickupAdrress1",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterPickupAddress(String)"
});
formatter.result({
  "duration": 220904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DropAddress1",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterDropAddress(String)"
});
formatter.result({
  "duration": 197445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " VehicleType1",
      "offset": 27
    }
  ],
  "location": "HomePageTest.selectTheVehicleType(String)"
});
formatter.result({
  "duration": 215528,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickTheBookLaterCheckBox()"
});
formatter.result({
  "duration": 125113,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontClickBookButton()"
});
formatter.result({
  "duration": 135865,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Validate Home page with valid data.",
  "description": "",
  "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as Firefox",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as Url2",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter  Username as Name2",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobile Number as Number2",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAddress as PickupAdrress2",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAddress as DropAddress2",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as  VehicleType2",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the Book Later Checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Dont click Book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Firefox",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 216994,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Url2",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 182784,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name2",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterUsername(String)"
});
formatter.result({
  "duration": 159324,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number2",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterMobileNumber(String)"
});
formatter.result({
  "duration": 1005797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PickupAdrress2",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterPickupAddress(String)"
});
formatter.result({
  "duration": 238498,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DropAddress2",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterDropAddress(String)"
});
formatter.result({
  "duration": 165678,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " VehicleType2",
      "offset": 27
    }
  ],
  "location": "HomePageTest.selectTheVehicleType(String)"
});
formatter.result({
  "duration": 186205,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickTheBookLaterCheckBox()"
});
formatter.result({
  "duration": 90903,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontClickBookButton()"
});
formatter.result({
  "duration": 84550,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Validate Home page with valid data.",
  "description": "",
  "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as Safari",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as Url3",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter  Username as Name3",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobile Number as Number3",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAddress as PickupAdrress3",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAddress as DropAddress3",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as  VehicleType3",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the Book Later Checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Dont click Book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Safari",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 209174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Url3",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 144174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name3",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterUsername(String)"
});
formatter.result({
  "duration": 151505,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number3",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterMobileNumber(String)"
});
formatter.result({
  "duration": 176429,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PickupAdrress3",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterPickupAddress(String)"
});
formatter.result({
  "duration": 125114,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DropAddress3",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterDropAddress(String)"
});
formatter.result({
  "duration": 142219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " VehicleType3",
      "offset": 27
    }
  ],
  "location": "HomePageTest.selectTheVehicleType(String)"
});
formatter.result({
  "duration": 185715,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickTheBookLaterCheckBox()"
});
formatter.result({
  "duration": 103121,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontClickBookButton()"
});
formatter.result({
  "duration": 95790,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Validate Home page with valid data.",
  "description": "",
  "id": "for-validating-ntl-taxi-home-page;validate-home-page-with-valid-data.;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@HomePage"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "Open Browser as Opera",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Enter URL as Url4",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "Enter  Username as Name4",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "Enter Mobile Number as Number4",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Enter PickupAddress as PickupAdrress4",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter DropAddress as DropAddress4",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Select the Vehicle Type as  VehicleType4",
  "matchedColumns": [
    6
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Click the Book Later Checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Dont click Book button",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Opera",
      "offset": 16
    }
  ],
  "location": "HomePageTest.openBrowser(String)"
});
formatter.result({
  "duration": 226768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Url4",
      "offset": 13
    }
  ],
  "location": "HomePageTest.enterURL(String)"
});
formatter.result({
  "duration": 141731,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name4",
      "offset": 19
    }
  ],
  "location": "HomePageTest.enterUsername(String)"
});
formatter.result({
  "duration": 155903,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Number4",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterMobileNumber(String)"
});
formatter.result({
  "duration": 147595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PickupAdrress4",
      "offset": 23
    }
  ],
  "location": "HomePageTest.enterPickupAddress(String)"
});
formatter.result({
  "duration": 123159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DropAddress4",
      "offset": 21
    }
  ],
  "location": "HomePageTest.enterDropAddress(String)"
});
formatter.result({
  "duration": 188648,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": " VehicleType4",
      "offset": 27
    }
  ],
  "location": "HomePageTest.selectTheVehicleType(String)"
});
formatter.result({
  "duration": 135866,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.clickTheBookLaterCheckBox()"
});
formatter.result({
  "duration": 87482,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.DontClickBookButton()"
});
formatter.result({
  "duration": 88948,
  "status": "passed"
});
});