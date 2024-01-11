@yukatechTask 
Feature: Test Timer Funcionalities Working as expected


  Background:
    Given  Navigate Yukatech timer page
      
      
  Scenario: User can start the timer
    When user click the "Reset" button
    And user check the timer is 25:00
    When user click the "Start" button
    When timer start to count down "3" seconds
    When user click the "Stop" button
    Then Check timer countdown and check if time is correct "3" seconds
    

  Scenario: User use stop button
    When user click the "Start" button
    When timer start to count down "3" seconds
    When user click the "Stop" button
    Then Check timer countdown and check if time is correct "3" seconds


  Scenario: User use reset button
   When user click the "Start" button
   When timer start to count down "3" seconds
   When user click the "Reset" button
   Then user check the timer is 25:00

  Scenario: User click many times start button
   When user click the "Start" button
   When timer start to count down "3" seconds
   When user click the "Start" button
   When user click the "Stop" button
   Then timer start to count down "3" seconds

  Scenario: User click many times stop button
   When user click the "Start" button
   When timer start to count down "3" seconds
   When user click the "Stop" button
   When user click the "Stop" button
   Then timer start to count down "3" seconds

   







   