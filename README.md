# Meowy Adventure
GA Project 1  
Game URL page: https://ngsuwen.github.io/meowy-adventure/

## Game Description
A deck-building game that requires the player to build their own deck with cards collected through the adventure. Player will use the deck they have built to battle against enemies to win the game. *(More detailed game instructions below)*

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

## Personal Reflection
I feel that I have achieved what I wanted to do when I first started out this project. I was also able to apply what I have learnt in GA Unit 1 into the project. In addition to the concepts learnt in Unit 1, I have researched on new functions / features to include into the game. For example, Magnific Popup was an additional feature that I have decided to use to have pop up windows.  
File organization is very important. As this game has many components, I have decided to split them into different files. This has been helpful in making my code more readable and easy to understand.  
Below are also some additional game improvements that could be done, if time permits:  
* Time countdown (To re-enact the owner going out to town and coming back home)
* Keep count on the number of mice defeated
* Add a second floor to the house  

Overall, I am pretty satisfied with the final product. I enjoyed the process as well, especially because this game involves 2 things that I love, deck-building games and cats!

## Game Instructions
The goal of the game is to defeat **Jerry Mouse** without dying. The player will start with 6 cards in their deck. They can add new cards or remove cards from their deck by obtaining the **Gem** that will spawn randomly on the map. As the player moves around the map to collect the **Gems**, they will randomly bump into **enemy mice**. Defeat the mice and **Jerry Mouse** to win the game!

## Interface Design
* Player will be greeted with a tutorial pop up upon opening the game page.  
![image](https://user-images.githubusercontent.com/88722847/135583728-17645687-4bdc-4ece-8a39-3830a050374a.png)

* The main map consists of the cat (Tom), the gem, and the mouse (Jerry). Below the map consists of buttons that allow player to access the tutorial, player deck, sound control, and navigation.  
![image](https://user-images.githubusercontent.com/88722847/135584883-95e1dc74-19bd-45c0-ba15-9e31dccb0be9.png)

* Upon meeting a mouse, a battle dialog will pop up. The dialog shows the mouse name, mouse health, Tom's health, Tom's mana and cards in hand.  
![image](https://user-images.githubusercontent.com/88722847/135585660-2d0cc865-d51e-46b7-8370-94945b30f1cc.png)

* Player can click and hold on the card to open the description.  
![image](https://user-images.githubusercontent.com/88722847/135586534-613b3da5-d07f-4ac3-904b-73ac013ba560.png)

* When a debuff/ buff card is played, an icon and number will appear below the affected character. Player can hover over the icon to see the effect name.  
![image](https://user-images.githubusercontent.com/88722847/135587322-1a0236fe-1d03-4394-9763-7df697b3a679.png)

* After ending the turn, the mouse will start to draw cards. Each card back represents a card drawn. After 4 cards are drawn, the mouse will play the cards until it has used up all its' mana.  
![image](https://user-images.githubusercontent.com/88722847/135587772-205e8126-47ed-4d50-ae4d-af93ca718d14.png)

* When the player dies, a pop up will appear informing the player that Tom has been replaced by another cat.  
![image](https://user-images.githubusercontent.com/88722847/135588201-f8923a4f-0fca-46ff-9fe4-ae0ffd29c92f.png)

* Upon closing the pop up, player will now control a new white cat called Tommy.  
![image](https://user-images.githubusercontent.com/88722847/135588428-f7e0b159-20a4-4af1-8aa9-104c7494ef29.png)

* When the player reaches a gem, a dialog will pop up with 3 cards for the players to choose. After the player chose a card to add, they can also choose a card to remove from their deck. Players can also click and hold on the card to open the description window.   
![image](https://user-images.githubusercontent.com/88722847/135589278-44827e65-5a91-4403-b75e-fea9123eb91b.png)
