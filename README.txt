This repo was created for Project 6 of the Udacity Front End Web Developer Nanodegree

The index.html page demonstrates an implementation of Javascript tests using Jasmine.  To view the site, and the jasmine implementation, open the index.html file.  

A simple RSS feed website was provideed by Udacity.  A starter jasmine spec file was also given as part of the assignment.  My job was to fill in the jasmine spec sheet in jasmine/spec/feedreeder.js with the code necessary to check for the 14 different tests requested in the assignment.  The tests are to check the following:  

Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.
Write a new test suite named "The menu".
Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.
Write a test suite named "Initial Entries".
Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.
Write a test suite named "New Feed Selection".
Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.
When complete - all of your tests should pass.