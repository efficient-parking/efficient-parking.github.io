# Efficient Parking Website

The web service has been developed to make the Efficient Parking service accessible from anywhere.

The website is based on three main principles:

- **Simple design:** the website has been designed with a simple and intuitive interface that allows users to complete payment transactions quickly.

- **Demo access:** the site currently runs without a database. Its test login is checked in the browser and is for demonstration only.

- **Organization:** the website is designed to simplify the customer's experience and make the service easier to use.

The public website is a static demo. Use plate `AB123CD` and password `parking123` to try the login. The demo login is checked in the browser and does not provide production authentication or store an account in a backend. Password recovery is unavailable in demo mode.

The website was developed using **HTML (HyperText Markup Language)**, a markup language used to define the structure and presentation of content on a web page. HTML is not a programming language; rather, it describes the structure and layout of web content.

Another language used is **CSS (Cascading Style Sheets)**, which is used to define the presentation and formatting of HTML documents. CSS allows the appearance of HTML elements to be customized.

Finally, for the programming part Javascript, an object-oriented programming language, was used and events that allow the developer to run scripts.

## Project structure

- `index.html` is the public homepage.
- `pages/` contains the login, signup, recovery and account pages.
- `assets/css/`, `assets/js/`, `assets/images/` and `assets/vendor/` contain styles, scripts, images and the remaining runtime dependency.
- `downloads/` contains the Android application package.

The site is static and can be published from the repository root.
