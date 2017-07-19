# Team

- Jay Papisan
- Mike Tarkington
- Nicholas Kaser
- Jun Ota

# Problem
Have you ever been to new place and felt overwhelmed or unsure of were to visit or eat.   Perhaps you will be traveling and want to check out the hotels in a certain area, or maybe you'd just like to plan a day out and you're curious about what's in he neighborhood you're visiting.  Well not to worry... Scoutr is here to help.
# Solution
Scoutr encourages fun and efficient exploration of locations. It searches by city and neighborhood presenting the user with a series of photos to swipe through working much like the popular dating app Tindr. The app then builds a list of liked locations.  From the list, users are able to get more details on a location, delete a location, or text the list to a friend so they can share excursion plans.  Users are also able to build categorized lists to serve a specific purpose, like  finding all the hotels in a particular neighborhood. They could also plan a day trip starting with a cafe, then going for a walk in the park, and ending the night over cocktails.

## How it Works

When entering the application a user sees a their previously created location lists.  From there, they can select a list they'd like to view. When viewing the list of locations, they can slide items left or right to delete them or see details.

![GIF of user lists and list page.](https://media.giphy.com/media/eY3BSDGafWfg4/giphy.gif)      

When users choose to create a list, they name their list, select a city, and enter a neighborhood where they'd like to explore.  This creates a new list for them, and the list is built as they swipe left or right through a set of images representing each location to either reject or select it for addition to the list.

The default set of images is a random assortment of different highly rated locations from the Yelp Fusion API.  At the top of the swiping page, users can click a field to fill in a category by which they can filter results to narrow their search.

![GIF of swiping process.](https://media.giphy.com/media/TqtjC6ia8Mp5C/giphy.gif)                

Once a user is done swiping to create their list of locations to check out, they can view the list and slide each item to the right to see more photos and get general info about the place of interest.

![GIF of examining detail page for a location.](https://media.giphy.com/media/K676XmQo4DcUU/giphy.gif)

Users can also send a list to their friends via text either by keying in their phone number or adding them from contacts.

![GIF of texting a list.](https://media.giphy.com/media/12SKPzfP5SJjO/giphy.gif)

## The Tech

Scoutr is a decoupled application that uses React Native on the front-end, and Rails 5 on the back-end.

The back-end is deployed to Heroku to serve data by managing relevant content in a PostgreSQL database and handling Yelp API calls, but it is also ready to be developed as an independent Rails web app.  The user authentication is handled by Firebase as we have future plans to utilize its OAuth features.

Here is the back-end repository for the application: https://github.com/MikeTarkington/localites

The React Native front-end was chosen primarily for its advantages in developing simultaneously for both Android and iOS platforms.  Redux was utilized for controlling the flow of data throughout the front-end.  Axios handled HTTP GET and POST requests to our back-end.  We used several small open source libraries and one of particular importance was for the swiping animations.  We are likely to refine or replace this library as it has a few minor bugs.

