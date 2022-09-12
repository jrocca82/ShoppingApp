# Description
This is a full stack app using the MERN stack with Typescript.

# Running the App
This app requires running the server and client. Navigate to these respective folder and run "yarn start" in both.
The database is on Mongo Atlas and is cloud based.
The front end is running successfully if the client console says "Compiled successfully". Navigate to http://localhost:3000 in your browser to see the App.
The server is running successfully if the server console says "Listening on port 8888" and "Connected to database"

# Creating an Account
To log in or create an account, navigate to the "Account" tab on the navigation bar and enter an email address. In the server console, click the link that has been logged as "To login as ${email} go to ${link}." Upon successful login, the Account tab will disappear and be replaced by "My Cart" and "Orders".

To login as an admin, submit the email as "admin@company.org" on the login page and click the link. This will allow you to access the "Products" and "Users" admin routes to control the database through a UI on the website.