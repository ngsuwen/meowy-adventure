# Meowy Adventure
Game URL page: https://ngsuwen.github.io/meowy-adventure/

## Game Description
A deck-building game that requires the player to build their own deck with cards collected through the adventure. Player will use the deck they have built to battle against enemies to win the game. 

## Technologies
* **HTML**
* **CSS**
* **Javascript**
* **Jquery** is used to manage DOM manipulation 
* **Jquery UI** is used for dialogs
* **Ajax** is used to request and access data from the API library 
* **Magnific Popup** is used for popup windows

## API used
[https://www.datamuse.com/api/](https://www.datamuse.com/api/)
The **API** is used to randomly pick a name for the enemy mouse.

## Accomplishments
* Set obstacles within the map.
* Generate a random name for each enemy mouse.
* Write a logic for computer mouse.
* Use animation to show actions taken by the computer mouse.
* Use of dialogs and popup windows to present different information (eg battle screen, instruction page etc).
* Write 14 unique logics for 14 different cards.
* Change of CSS when restarting the game.

## Difficulties Faced
* **API Call:** I wanted to make the API call first, before setting the word called to the variable mouse name. However, I noticed that the mouse name appeared undefined, because the name was set before the code was done fetching the API call. *Solution:* I have to create an async function and use the keyward *await* for my variable mouse name, so that it will pause until the API call is completed.
* **Mouse animation:** The animation should show the mouse drawing cards from the deck, before showing the mouse playing the cards. I wanted to use setInterval for the draw function, and async await for the play function, such that the play function will pause until the mouse is done drawing. However, I realised that async functions do not play well with setInterval functions. *Solution:* I edited the draw function such that when a condition is met, draw function will call the play function. 
* **Game logic:** The game allows many different combinations to be played, and there may be unforseen errors when certain combinations are made. *Solution:* I tried and tested out many different combinations to test the game logic. Eg. the game requires the player to have at least 5 cards in their deck. One error that I found was that when *Last Resort (Heal 30 and discard the card permanently from the deck)* was played, there might be a chance that the player's deck will fall below 5 cards. I decided to change the description to *'Heal 30 and replace the card with Heal (Heal 4 health)'* instead.

## Game Instructions
The goal of the game is to defeat **Jerry Mouse** without dying. The player will start with 6 cards in their deck. They can add new cards or remove cards from their deck by obtaining the **Gem** that will spawn randomly on the map. As the player moves around the map to collect the **Gems**, they will randomly bump into **enemy mice**. Defeat the mice and **Jerry Mouse** to win the game!

## Interface Design

## Final Reflection

