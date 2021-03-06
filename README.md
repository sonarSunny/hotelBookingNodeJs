# hotelBookingNodeJs

 Problem Statement :

    There is a hotel booking website.

    Expose an API to book a room based on user bonus points.

 

Conditions:

    If User has 'n' bonus points and Price to book the hotel is 'n’ ,Status of room changes to "BOOKED".

    If User has 'n' bonus points and Price to book the hotel is greater than 'n’ , Status of room changes to "PENDING APPROVAL".

    Any changes to user bonus is tracked in the system.


## Requirements

For development, you will only need Node.js and a node global package, Yarn, installed in your environement.
Install mongoDb on your machine(https://www.mongodb.com/cloud/atlas/)

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Running the project

    $ npm start
   
## Post-Man SetUp

  - If not installed install postman app 
  - click on import
  - click on link
  - add this link https://www.postman.com/collections/3af7168f6a93e5aef3ae and click on continue.
 
