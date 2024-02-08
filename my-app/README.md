The content below is an example project proposal / requirements document. Replace the text below the lines marked "__TODO__" with details specific to your project. Remove the "TODO" lines.

(__TODO__: your project name)

# Event Ticketing System

## Overview

(__TODO__: a brief one or two paragraph, high-level description of your project)

Users can use this application to sign up for events and obtain tickets for them. Their event tickets will be saved on their accounts. Users can also create their own events. 

## Data Model

(__TODO__: a description of your application's data and their relationships to each other) 

The application will store Users, Events, Tickets

* users can have multiple tickets
* users can create multiple events
* tickets can only belong to one user

(__TODO__: sample documents)

An Example User:

```javascript
{
  username: "jane_done",
  password: "!@#12345",
  tickets: [Ticket, Ticket]
}
```

An Example Ticket:

```javascript
{
  user_guest: // a reference to a User object
  event_name: "Mystic Masquerade Ball",
  date: "Saturday, November 4th",
  time: "5pm"
  price: 9.99,
  address: "60 Washington Square"

}
```
An Example Event 
```javascript
{
  user_host: // a reference to a User object
  event_name: "Mystic Masquerade Ball",
  date: "Saturday, November 4th",
  time: "5pm"
  price: 9.99,
  address: "60 Washington Square"
  guest_capacity: 200,

}
```

## [Link to Commented First Draft Schema](db.mjs) 

(__TODO__: create a first draft of your Schemas in db.mjs and link to it)

## Wireframes

(__TODO__: wireframes for all of the pages on your site; they can be as simple as photos of drawings or you can use a tool like Balsamiq, Omnigraffle, etc.)

/events - page for showing all events listed

![events](documentation/Find Events Page.png)

/login - login page

![Login](documentation/Login.png)

/register - register page

![register](documentation/Register.png)

/my-events - page for showing events user has created

![my-events](documentation/My Events Page.png)

/tickets - page for showing tickets user had bought

![tickets](documentation/Ticket Page.png)

## Site map

(__TODO__: draw out a site map that shows how pages are related to each other)

[wireframe flow](https://www.figma.com/proto/AAka7pzK9YLHgVpC1iUNvQ/AIT-Final-Project-Wireframe?type=design&node-id=0-1&t=rppU5NFVwhxpH0vC-0&scaling=min-zoom&starting-point-node-id=1%3A82)


## User Stories or Use Cases

(__TODO__: write out how your application will be used through [user stories](http://en.wikipedia.org/wiki/User_story#Format) and / or [use cases](https://en.wikipedia.org/wiki/Use_case))

1. as non-registered user, I can register a new account with the site
2. as a user, I can log in to the site
3. as a user, I can create an event
4. as a user, I can buy a ticket to an event
5. as a user, I can view my tickets
6. as a user, I can view my events

## Research Topics

(__TODO__: the research topics that you're planning on working on along with their point values... and the total points of research topics listed)

* (10 points) Heroku Deployment
    * I'm going to deploy my site using Heroku
	* Deployed to Heroku

* (8 points) Next.JS
    * I used Next.JS for server-side rendering and API route creation.

* (4 points) React.js
    * I am going to use React.js for assisted development
	
* (3 points) JavaScript Library
   * Material UI

10 points total out of 8 required points (___TODO__: addtional points will __not__ count for extra credit)


## [Link to Initial Main Project File](app.mjs) 

(__TODO__: create a skeleton Express application with a package.json, app.mjs, views folder, etc. ... and link to your initial app.mjs)

## Annotations / References Used

(__TODO__: list any tutorials/references/etc. that you've based your code off of)

1. [passport.js authentication docs](http://passportjs.org/docs) - (add link to source code that was based on this)
2. [tutorial on vue.js](https://vuejs.org/v2/guide/) - (add link to source code that was based on this)

