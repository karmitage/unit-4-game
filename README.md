# unit-4-game

### Overview

This game displays a random number between 19 and 120, as well as four crystals, each with a hidden, random value between 12 and 1. The user clicks on each crystal to add to their score. If their score becomes equal to the random number, they win, but if their score exceeds the random number, they lose. 

Wins and losses are displayed to the user, along with their running score and the number they are guessing (crystals values are not displayed).


### Development notes

Initially I wanted to have a generic on click function for the crystal class. However, I had a lot of trouble understanding how to make it work - I knew I had to pass the crystal's value using jQuery so that I could then access it in the on click function, but my attempts to do that were not successful.

I ended up putting the random crystal values in an array, and passing each crystal's array position into a single on click function, which then returned another function that handled the logic. This solution worked, but it still feels brittle. I'd like to figure out how to add the random values using jQuery.
