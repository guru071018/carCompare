# Getting Started React simple Car Comparison app.

For Run project

Requirement
- react version: "^19.1.0",
- node version : v23.10.0

Step 1

1- Take clone of project - https://github.com/guru071018/carCompare.git

2- Run npm i in  terminal of vs code

3- Run npm start // project will start on local server http://localhost:3000/

Feature

Your React-based car comparison app is now set up with the following key features:
* Responsive layout using CSS Flexbox.
* Custom filters and sorting for price, brand, type, and rating.
* Side-by-side comparison table for selected cars.
* No external UI libraries, fully styled with custom CSS.
* The app has SEO-friendly, it can be easily indexed and ranked by search engines

Code Flow

1- I use Route to load component. In code has only one route component CarComparison when
App run then default page will be home like this -  http://localhost:3000/home

2-  I use Constant file(/src/constants/data-constant.jsx) where define all car model and type.   
     You can add, remove and update if you want as your requirements. 
		 
3- All message constant are define in that constant file.

4- I use CarCard component for displaying dynamic view based upon constant file.

5- I use Filters component for apply filters and sorting. 

6- I have keep all icon and image in /public/assets folder you can add, remove and update based upon your 
Requirement.

7- I use  ‘Roboto' font which I add in app.css file. 






