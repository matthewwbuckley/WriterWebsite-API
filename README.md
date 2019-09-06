## Writer Website for Short Stories
### API


This is the API of a Short Story Site. [It is used as part of the live, seen here.](https://ww-front.herokuapp.com/)

**Please note that both are hosted using the Free plan on Heroku, which means that both projects will require time to become active.**

A simple app that allows users to register and submit short stories which can then be rated and commented on.

In the API backend you will find:

+ auth: this will handle registration, sign up, and token checking.
+ piece: this handles submission and returning the short stories.
+ rating: this handles the submission of ratings.

The backend contains a major antipattern. The front passes a reference to the app and component that called it. This is then used to call setState from that reference. This should not be done and the functions should instead return data which can be handled by the component itself.

The front end has the following routes:

+ Home: Displays texts.
+ Registration: Handles registration and sign in.
+ UserPage: Displays all pieces by user.
+ Piece: Displays a short story.
+ Write: Handles short story sumission.

Interaction with the API is done through the scripts in the apiActions folder. 

If you would like to host the demo yourself you can clone or download the project. Then can be hosted locally using the npm command:

```npm start```

It is designed to work with the front, which you can check out [here](https://github.com/matthewwbuckley/WriterWebsite-Front). If you would like to host the backend yourself with a different database you will need to either:
1) For running locally nconf and a keys.json file in the project directory stores information for the database you create. You need to comment and uncomment the appropriate lines in /models/index.js
2) For a hosted setup you should set up relevent environment variables corresponding to the variables shown in /models/index.js.
