# QasPAMGMatchroomtest
Testing the Matchroom.com filters

This Project will demonstrate the filtering capabilities of website https://matchroom.live/ondemand by use of automation using Cypress. This is part of a QA test for PA media. 

Please see below, BDD written sceanrios for the acceptance criteria and Strech feature. 

The Strech feature wanted to test the searchbar function but it didnt specifiy which searchbar. As when you click on the magnifying glass it opens a search bar. So I created a test for both search functions.   

## Part 1:
#### Scenario: filter the VOD section to display only "Darts" videos.

Given I am on www.matchroom.live/demand.     
When I click on the "Filter by sport" dropdown.   
Then I will see text "Darts".    
And I will click this text.   
And I will see Darts VOD shown below.    


#### Scenario: Additional filters "competitions" and a "video duration"

Given i am on www.matchroom.live/demand.    
When I click on the "Filter by sport" dropdown.     
Then I will see text "Darts".   
And I will click this text.  
And I will click on "Filter by competitons" dropdown.  
And I will see the text "Masters".   
And I will click this text.  
And I will click on the text "Medium 5-10".   
Then I will see Darts VOD shown below.  


#### Scenario: Filter VOD for Snooker 

Given i am on www.matchroom.live/demand.    
When I click on the "Filter by sport" dropdown.   
Then I will see text "Snooker".    
And I will click this text.     
And I will click on "Filter by competitons" dropdown.    
And I will see the text "UK Championship".    
And I will click this text.   
Then I will see Darts VOD shown below.     


#### Scenario: Search using the Top search bar

Given i am on www.matchroom.live/demand.    
When I click on the magnifying glass at the top right of the page.    
Then the search field will open.     
And I type "golf masters".    
Then I click the magnifying glass.     
And I will be shown the VOD content for that search below.     

#### Scenario: Search using the searchbar

Given i am on www.matchroom.live/demand.     
When I click on the searchbar field on the right of the page.     
And I type "golf masters".    
Then I will be shown the VOD content below.    


## Part 2 

I have chosen Cypress as my automation tool to complete this task. It was a tool I am more familiar with as I have useed it in the past. I also felt that cypress is one of main tools currently used by companies to automate. It has an ease of use and i find there are alot of upto date tutorials online. And I am sure it is used by PA Media group. 

During this task I felt i was able to meet on Acceptance criteria and the strech feature. I have tested all the points in the requirements and also where i found it to be a bit ambiguous with the Search bar, i create tests for both. I could maybe have tested more different sports or maybe tested filtering all sports and competitions one by one and seeing how that affects the website. There are also time contraints on the test to being a few hours which i didnt want to be penalised for. 

I have also found that if you have filtered by a sport already, the main searchbar will not show results for other sports searchs. but the magnifying search in the top right does.  

If i were able to extend the the framework, other areas i would like to test are.   
1.Test the Login functionality.  
2.Test subscribe/Register function.  
3.Test all the header hyperlinks.  
4.Test search box with neagitve data ie 1223dfsd.  
5.Test search for when there are no results - what happens?    
6.Test the VOD playback.  
7.Test with asserts in the automation to make sure certain things are shown.    
8.Backend test api calls with postman.    

If i were to do this challenge again, I would like to have the all the scenarios under a sceanrio outline, and have all the tests grouped together, so when I would run the text suite it would run the tests one after another. Also would like to find ways i can make my tests better, Learn more from what i already know.
