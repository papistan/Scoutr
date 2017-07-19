# Problem
Have you ever been to new place and felt overwhelmed or unsure of were to visit or eat. well then worry not Scoutr is here to help.
# Solution
Scoutr encourages fun and efficient exploration of locations. Scoutr uses data from location and neighborhood then presents the user with a series of photos to swipe trough working much like the popular dating app Tindr. The app then builds a list of liked locations, from there users are able to get more details on a location, delete a location, and text the list to a friend. Users are also able to build categorized lists to serve a specific purpose, like  finding all the hotels in a particular neighborhood. They could also plan a day trip starting with a cafe, then going for a walk in the park, and ending the night over cocktails.

## How it Works

When entering the application a user sees a their previously created location lists.  From there, they can select a list they'd like to view. When viewing the list of locations, they can slide items left or right to delete them or see details.

![GIF of user lists and list page.](https://media.giphy.com/media/LaawXYtsqg9ZS/giphy.gif)      

When users choose to create a list, they name their list, select a city, and enter a neighborhood where they'd like to explore.  This creates a new list for them, and the list is built as they swipe left or right through a set of images representing each location to either reject or select it for addition to the list.

The default set of images is a random assortment of different highly rated locations from the Yelp Fusion API.  At the top of the swiping page, users can click a field to fill in a category by which they can filter results to narrow their search.

![GIF of swiping process.](https://media.giphy.com/media/TqtjC6ia8Mp5C/giphy.gif)                

Once a user is done swiping to create their list of locations to check out, they can view the list and slide each item to the right to see more photos and get general info about the place of interest.

![GIF of examining detail page for a location.](https://media.giphy.com/media/K676XmQo4DcUU/giphy.gif)

## The Tech

Scoutr is a decoupled application that uses React Native on the front end, and Rails 5 not the backend.
