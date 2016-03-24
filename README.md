#Assignment 1 - AngularJS app.

Name: Declan Fitzpatrick

###Overview.
Developed a home library application. This application will give the family home the facility of register all media that exists in the home,
the media can be associated to each user. User will have the facility to search for item or just review all items associated to them. 
User will have option of sorting through list based on a number of headings e.g likes, type, genre, etc. 
Users will also have facility to associate reviews to the individual media items. Also facility to agree ("like ") comments


 . . . . . List of user features (excluding user registration and authentication) . . . . 
 
 + Take JSON input describing user media and display in home screen
 + Allow user to sort user media based on number of headings
 + allow user to search through user media
 + logout
 

###Installation requirements.
. . . .  List of software used to develop the app . . . . . . . 
+ AngularJS 1.x
+ Bootstrap 3

In root folder execute http-server

In browser insert "http://localhost:8080/HomeLibraryApp/"

the following usernames and passwords are required

username: homer@Simpson.com
passsword: secret

username: marge@Simpson.com
passsword: secret


###Data Model Design.

Diagram of app's data model (see example below) AND/OR a sample of the test data used (JSON or equivalent).

![][image1]

Following are JSON files used in application
library\user.json
library\mediaListHomer.json
library\mediaListMarge.json


###App Design.


![][image2]

###UI Design.

. . . . . Screenshots of app's views (see example below) with appropriate captions (excluding user regeneration and login views) . . . . . . . 

![][image3]

###Routing.

. . . . List each route supported and state the associated view . . . . . 
+ /login - login screen
+ /login/:loginError - login screen after login failure. Provides failure feedback 
+ /register - register user screen
+ /mediaList/:userId - screen showing a list of media associated to logged in user  
+ /mediaList/:userId/media-review/:mediaId - screen show and allowing user to enter review information

###Extra features

Implemented a user login as well as associated authentication. Username and password entered is compared against details in user.json file.
If comparision fails then user is returned to login screen.

###Independent learning.

. . . . . State the non-standard aspects of Angular (or other related technologies) that you researched and applied in this assignment . . . . .  

[image1]: ./model.png
[image2]: ./design.png
[image3]: ./screen.png