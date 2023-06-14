Feature: CRUD operations for videos
Scenario: Create a new video
    Given the user   on the create video page
    When the user fills in the video information and submits the form
    Then the new video should be created and displayed on the home page

  Scenario: Read a video
    Given the user is on the home page
    When the user clicks on a video link
    Then the video information should be displayed on a new page

  Scenario: Update a video
    Given the user is on the edit video page
    When the user changes the video information and submits the form
    Then the updated video information should be displayed on the home page

  Scenario: Delete a video
    Given the user is on the home page
    When the user clicks on the delete button of a video
    Then the video should be deleted and removed from the home page