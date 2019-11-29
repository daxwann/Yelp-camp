# YelpCamp

App that allows registered user to create camping site reviews and to comment on them.

## Learning Goals

- Create RESTful API for users to interact with the application
- Responsive web design with Bootstrap and Sass
- Authentication using Passport.js
- Data persistence and modeling with MongoDB and Mongoose ORM
- Version control with Git and Github
- Deploying app using Heroku and MongoDB Atlas

## Website

[YelpCamp](https://yelp-clone-camping.herokuapp.com/)

## Intructions to edit and run app locally in Docker container

### Install Brew

`$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

### Install Docker, docker-machine, and docker-compose

`$ brew update`

`$ brew install docker docker-machine docker-compose`

### Install Git and clone YelpCamp Github repository

`$ brew install git`

`$ git clone https://github.com/daxwann/Yelp-camp.git`
 
### Create docker-machine and set up environmental variables

`$ docker-machine create --driver=virtualbox Char`

`$ docker-machine start Char`

`$ eval $(docker-machine env Char)`

### Use docker-compose to build and run app and mongo services

`$ docker-compose up`

The application will be up on the docker-machine ip under port 3000
