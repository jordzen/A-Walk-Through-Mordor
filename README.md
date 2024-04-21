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

I started out this project with the idea of wanting to do something where RNG was involved and the results are different every time. 
I love the lord of the rings films, and they are also very popular and so i decided to base the game off of them.
I started drawing out the concept for the game, where there are four stages of RNG choice involved, with progressing difficulty.
I thought it would be a cool idea to have the user start at the entrance to mordor and the end result being mount doom, where they destroy the
ring of power.
I used the quote from the film where Boromir says 'one does not simply walk into Mordor' and made the title 'A walk through Mordor'.

* [Game concept drawing.](docs/screenshots/wireframe3.png)
* [Main Game page wireframe](docs/screenshots/wireframe1.png)

On page load, I wanted a brief description of the game, and buttons to start the game or read the rules

* [intro modal wireframe](docs/screenshots/wireframe2.png)

Along the way, parts of the design changed. these include

* Having a modal pop-up when the user selects the wrong cards, appearing in the centre of the screen, rather than a small area in the right.
* The removal of the dice roll section, where i wanted a picture of a D20, showing the number of the roll when the user selects roll dice.
* Deciding not to go with the idea of choosing a class and having different skills that would affect the game results.
* Changing the intro paragraph 
* Adding a header and footer, with links to social media.

### **Color Scheme:**

I have kept the color scheme relevent to the dark theme of Mordor - this being black, dark gray and red.
This matches the theme of the game, being that you are in enemy teritory and by having a color scheme it keeps it aesthetically pleasing.

## **Features**
 
## ***Background*** 

I used an image of Mordor and Mount doom in the distance, to feel linked to the game - as if you are journeying across mordor to get to Mount doom and each stage completed progresses you towards that goal. 

To keep the image from being disrupted from the cards and other elements, i made the color of the cards slightly transparent.

![Background Image](assets/images/mordor.webp)

##  ***Header Element***
The header element contains the following: -

### ***Title:***

  * I used the quote from the film where Boromir says 'one does not simply walk into Mordor' and made the title 'A walk through Mordor'.
  * I did not include an anchor tag here for this project since the app is only a single page of HTML.

  * [Header image.](docs/screenshots/header.png)

  # **Main game page:**

  * The game page features four stages, including rows of 2,3,4 and 5 face down cards.
  * The rows are disabled until the user completes the stage they are on.
  * The cars turn green if the user selects the correct card and red if they select the wrong card. 

  * [Main game image.](docs/screenshots/maingame.png)

  # **Start modal pop-up**

* This includes a brief description of the game and story around what the user is doing in the game.
* It also has 2 buttons that the user can select, to either start the game, or read the rules.

* [Start modal image.](docs/screenshots/intro.png)

# **Rules modal pop-up**

* Bullet points on have the game works
* Includes a button to start the game when the user is ready

*[Rules modal image.](docs/screenshots/rules.png)

# **Incorrect card selected modal pop-up**

* When the user selects a wrong card choice, it turns red and a modal will pop up showing -

* An image of a randomly selected enemy from a list of 5.
* A message describing that they have encountered an ememy and must roll a d20 dice to continue the game.
* The dice roll required to continue the game. 
* A button to roll the dice.

[Incorrect card selected modal pop-up image.](docs/screenshots/incorrect-modal.png)

# **dice roll modal pop-up**

* When the user clicks of the roll dice button, a modal will pop up showing - 

* The randomly rolled d20 rice result
* A message in green if they have rolled higher than the required dice roll
* A message in red if they have rolled lower than the required dice roll.
* An X in the corner of the modal to click which will close the modal -
the game will reload after the X is clicked when the user rolls under the required dice roll.

* [Dice roll lose result image.](docs/screenshots/diceroll.png)
* [Dice roll win result image.](docs/screenshots/diceroll2.png)

# **WIN modal pop-up**

* If the user selects the correct card on all stages they win the game and a modal will pop-up showing -

* An image of Sauron being destroyed 
* A message that they have won the game 
* An X in the corner of the modal to close the modal and reload the game.

* [Win modal pop-up image.](docs/screenshots/win.png)

# **Footer element**

* The footer had 2 clickable icons that will load a new page in a seperate browser. these being - 

* A link to an instagram and facebook page for the user to follow me.

* [Footer image.](docs//screenshots/footer.png)