#Coding PoC (REA)

##Description

Display items list of properties with some attributes and operation to add / remove item from a list

##Features (v1.0)

Followings are the details requirement of the poc (proof of concept):

- Display the list of properties (items) using a data set provided by JSON input

- The pages includes two lists, one for Results, and one for Saved Properties

- Using hover button (display in center of each item) to remove / or add items between two lists
+ Button in Results column, display "Add property"
+ Button in Saved Properties column, display "Remove property"

- Each item / or properties includes following attributes
+ Logo (header)
+ Background color (header)
+ Image (body)
+ Pricing (footer)

##Solution

- Loading data from json file to initial state
- Redux had initial state, include two sets, one for items in Results and one for item in Saved Properties. 
- Each item is represented by a CardItem component, each set (containing list of item) represented by CardContainer.
- PageContainer manages two CardContainer, connect with Redux, mapping state to get data from Redux
- CardItem can dispatch action to Redux store, indicate when user select or remove property
- Since data is separated into two states, using QueryItem to query item from data.json. The json file play roles as database in actual application.

##Technologies stack

- React 16.4
- Redux 4.0
- ES6
- Bootstrap UI (Reactstrap)
- CI/CD: Circle CI, Heroku
- Testing: Jest, Enzyme
- Deploy Heroku: https://mysterious-dusk-60648.herokuapp.com/

##Setup Development Guideline (TBD)

- IDE: Visual Code (v 1.15)
- Install dependencies: `npm install`
- Start dev server: `npm run start-dev`
- Start local test: `yarn test`
