# QasPAMGMatchroomtest
Testing the Matchroom.com filters

This Project will demonstrate the filtering capabilities of website https://matchroom.live/ondemand by use of automation using Cypress. This is part of a QA test for PA media. 


Part 1:
Scenario: filter the VOD section to display only "Darts" videos.

Given I am on www.matchroom.live/demand.
When I click on the "Filter by sport" dropdown.
Then I will see text "Darts" .
And I will click this text .
And I will see Darts VOD shown below.


Scenario: Additional filters "competitions" and a "video duration"

Given i am on www.matchroom.live/demand
When I click on the "Filter by sport" dropdown
Then I will see text "Darts" 
And I will click this text 
And I will click on "Filter by competitons" dropdown 
And I will see the text "Masters"
And I will click this text
And I will click on the text "Medium 5-10" 
Then I will see Darts VOD shown below


Scenario: Filter VOD for Snooker 

Given i am on www.matchroom.live/demand
When I click on the "Filter by sport" dropdown
Then I will see text "Snooker" 
And I will click this text 
And I will click on "Filter by competitons" dropdown 
And I will see the text "UK Championship"
And I will click this text
Then I will see Darts VOD shown below


Scenario: Search using the Top search bar

Given i am on www.matchroom.live/demand
When I click on the magnifying glass at the top right of the page
Then the search field will open
And I type "golf masters"
Then I click the magnifying glass 
And I will be shown the VOD content for that search below 

Scenario: Search using the searchbar

Given i am on www.matchroom.live/demand
When I click on the searchbar field on the right of the page
And I type "golf masters"
Then I will be shown the VOD content below 


