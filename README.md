# **A Walk Through Mordor**

## **Site Overview**

A walk through Mordor is a game of chance, featuring four stages of face-down cards, with one being the correct choice, allowing you to move to the next stage. Each stage adds a card, making the chance of progressing harder. The design of the cards and the game is based on JRR Tolkens - The Lord Of The Rings. The idea is that the player starts by entering Mordor and as they progress through the stages they get closer to Mount Doom, where they will destroy the ring of power they carry. 
If they player selects a wrong card, they dont lose the game straight away. There is a pop up that apears, showing a randomly selected enemy and a required dice roll of a D20 dice. The player then rolls the dice and if they get a higher number than required, they get another chance to select the correct card and progress. If they roll under the required number, they lose. The game is won when the player finds the correct card on the final stage. 

![Am I responsive screenshot](docs/screenshots/i-am-responsive-mordor.png)

## **Planning**

### **Target Audience**

* Users of all ages who enjoy simple RNG based games. 
* Users who like The Lord Of The Rings books and films
* Users that have limited time or attention and want a simple, fast game to play.

### **User Questioning**

* Users want a Rules section, with easy an to understand set of rules for the game.
* Users would like the game to be easy to navigate and understand.
* Users would like the theme to be obvious that it is based on The Lord Of The Rings series.

### **Websites Aim**

* Create an aesthetically pleasing game, that it simple and easy to navigate.
* To be enjoyable and fun to play.
* Create a theme based on The Lord Of The Rings films and books.
* Include reponsive feedback for user interactions with the cards and buttons.
* To have a random RNG element to the game.
* To be responsive to different screen sizes.

### **How Will This Be Achieved**

1. On page load, the user will be shown a Modal that has a brief description of the game, along with a start button and rules button. 
* On click of the start button, the modal will disappear and the game will load. 
* On click of the rules button, another modal will appear with a set of rules for the game and another start button for when the user is ready to begin the game. 

1. Have a hover function when the user moves the mouse over sections that they can click on.
 
1. Make it so when the user selects the correct card, it will turn green and when they select the wrong card, it will turn red.

1. When the user selects the wrong card, a modal will pop up, where the user will have to click a button to roll a D20 dice, to continue the game or start again.

1. An image of a randomly selected enemy will appear in the modal pop-up when the user selects the wrong card, with a unique required dice roll to continue the game.

1. The correct card position on each stage will be random on each load of the game. 

1. A win modal will appear when the user wins the game.

1. The images in the game will be based on the lord of the rings films.

1. Include the use of semantic elements, alternate text, and aria labels where appropriate.

## **Wireframes**

## **Features**

## ***Background*** 

I used an image of Mordor and Mount doom in the distance, to feel linked to the game - as if you are journeying across mordor to get to Mount doom and each stage completed progresses you towards that goal. 

To keep the image from being disrupted from the cards and other elements, i made the color of the cards slightly transparent.

![Background Image](assets/images/mordor.webp)