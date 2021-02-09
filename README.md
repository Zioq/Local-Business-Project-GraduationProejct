# Douglas College Applied Research Graduation Project

Using a MERN, I make a local restaurant's homepage to responding COVID-19.

As the COVID-19 getting worse, strict health regulations have made run a business harder.

By adding a `Voice recognition technique`, customers are able to check to make reservations and check the restaurant menus.

Also, for owner or manager, I developed a more `User-friendly UI` to manage orders or menus.

### GIT CASE SENSTIVIE PROBLEM (BEFORE RUN THIS PROGRAM, PLEASE READ THIS CAREFULLY)
If you get this file through My Github Repository, there was a case sensitive setting problem in the git, some of the file names were changed automatically. 
Please change some files' name under the list. I'm so sorry for the inconvenience.
- Go to the file: front-end -> components -> Home. Please change the file name `renderingHTML` to `RenderingHTML`

## How to Run?

- Make clone or download this file
- In the main directory, open the terminal.
- type the command `npm run dev`
- `Server` will run on localhost: 5000 (Express) and `Client` will run on localhost:3000 (React)
- For the sensitive personal information security, I didn't push `dev.js` file which has private mongoURI. So if you want to run this application, please add your own dev.js file in `server>config` folder. 
Exmaple format of dev.js
```
module.exports  = {
    //private information in here
    mongoURI : 'mongodb+srv://{yourMongoDbAtlasId}:{Password}@react-blog.jsloa.mongodb.net/test?retryWrites=true&w=majority'
}
```

## Brief Explanation of Application
### Voice recogntition


## TroubleShotting

- If you run this in the `Linux OS`, you will faced bcrypt error. Don't worry. This app is designed in the MacOS you have to install bcrypt for Linux version. In the main directry, please typing `npm install bcrypt --save` 
- When your post 5000 work with other process, this app crush especially Server. 
- please kill the all node port by this command type `pkill -f node`
- Or restart your computer



## Contributor  
Jaehyoen Robert Han

Last update date: 02/08/2021
