## Writer Website for Short Stories
### Front


This is the front end of a Short Story Site. [A live demo can be seen here.](https://ww-front.herokuapp.com/)

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

It will be connected to the hosted backend, which you can check out [here](https://github.com/matthewwbuckley/WriterWebsite-API). If you would like to host the backend yourself with a different database you will need to follow instructions on that project. The base api URL for the hosted backend is located at /scr/apiActions/index.js which should be changed if you host the backend locally or using another service. 
