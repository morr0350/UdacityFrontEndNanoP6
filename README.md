# Udacity Front-End Web Developer Nanodegree - Project 6

######Tony Morrow
######December 14, 2015

####Instructions:
1. Open index.html in your browser and allow the Jasmine test runner to go through its tests.

###'RSS Feeds' Suite:
1. Ensures allFeeds variable is defined and contains data.
2. Loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
3. Loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

###'The menu' Suite:
1. Ensures the menu element is hidden by default.
2. Ensures the menu changes visibility when the menu icon is clicked. Tests two expectations: does the menu display when clicked and does it hide when clicked again.

###'Initial Entries' Suite:
1. Ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

###'New Feed Selection' Suite:
1. Ensures when a new feed is loaded by the loadFeed function that the content actually changes.
