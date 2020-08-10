## AUGUST 2020

### YOU TUBE PROJECT DEMO:

* https://youtu.be/h-q9CF6dBxA

# Virtual Doctor Appointment Booking System:

*This Application is extremely helpful for present COVID Situation as we do not need to travel for appointment booking.
*We can look for recommended doctors and book our appointment 24/7.
The application will be usable by multiple users simultaneously.

# Technologies:

*This is a single page Appointment Booking System using create-react-app. 
*The application uses a backend server that hosts the BUILT (using npm run build)React App as well as provides REST services for various functionalities.
*The application will be usable by multiple users simultaneously.

## Functionality:

### About Page: 
* It is about what and how services are provided by Appointment Plus System.

### Contact Us Page: 
* If we want some information we can submit the contact us to them. 

### Login page :
  * The `login` button in the login page is disabled if there is no username entered.
  * Once the user logs in, he/she will be taken to the home page
  * it doesnt allow invalid username like 'DOG'
  
### Landing page :
After successful login list of hospitals is shown to user this is the static list of data for hospitals and doctors defined in 'DATA' Folder. 
  * **Search box** - User can type his/her desired hospital name or a string in the search box. 
    * The string entered by user will be sent to the server which will calls the static hospital data list to fetch the hospital name based on the string entered by user. 
    * The results will be displayed on the home page.    
  * **Clear** - If user wants to remove the search then click clear button.
  * **Book Appointment** - Clicking this button will take the user see list of doctors working in that hospital.
  * **Logout button** - Clicking this button will logout the user and take him/her to Home page.
  
### Hospital Details:
  * This page will have more details about a particular hospital selected by the user. This page will contain more information about the list of doctors working in this hospital.
  * **Hospital Detail** - It contains entire detail about hospital.
  * **Call Now** - You can call the hospital using any app.
  * **Get Direction button** - This button will take the user to google map which contains address of the hospital.
  
### Doctors Details:
  * This page will have more details about a particular doctor working under that hospital.
  * It will contain entire doctor details like experience,degrees,specialization and services provide by him.
  * **Book Appointment** - This button will take the user to the booking page.
  
### Booking Page:
  * This page will have details which needs to be filled by user for booking appointment.
  * Entire fields are mandatory if not entered it will give error.
  * Email address should be entered in a proper format.
  * Contact number length should not be more than 10 digits.
  * Valid date should be selected for booking appointment (past date and todays date is not allowed).
  * User can book appointment with different doctors.
  * User cannot book appointment with same doctors.

### Email Confirmation:
   * Booking email confirmation is sent to the email id entered by user in booking page.
   
### View Bookings:
   * List of bookings user has done.  
   
### Cancel Bookings:
   * After booking appointment if user wish to cancel the booking he can cancel the booking by going to view booking tab.  
 
### REST services:
  * **GET /session** - This service checks for valid session
  * **POST /loginUser/** - This service call will post the login details entered by user.
  * **DELETE /session** - This service call let user logout.
  * **GET /hospitals/:hospId/:name** - This service call will fetch the details of hospital and doctors working in that hospital.
  * **GET /hospitals/:name** - This service call will fetch the list of hospital
  * **GET** **/doctors/:hospId/:name**  - This service call will fetch the list of doctor under that hospital.
  * **GET** **/doctors/:hospId/:docId/:name**  - This service call will fetch the list of hospital and doctor required for booking page
  * **GET /userWatchList/${user}** - This service call will fetch the movies present in watchList array in the server for a particular user(${user})
  * **POST /book-appointment/:hospId/:docId/:name** - This service call will post the booking details entered by user.
  * **DELETE /cancel-booking/:name/:docId/** - Using This service call we can cancel the booking made by user.
  * **GET /bookings/:name/** - Using This service call we can view the booking made by user.
  
# Future Enhancements:
  * If appointment not available schedule chat request,video call or zoom meeting with doctor .
  * Send booking confirmation on mobile number.
  * Add reminder message to patient for appointment.
  * Sign up functionality.
  * Admin portal for confirming the appointment.
  
 # How to get Started:
 * Run the commands listed below to start the application:
    npm install
    npm start 
  * If there is any problem to start the project the use following commands:
    npm install
    npm run build
    npm start
  
# References:
 * https://www.pexels.com/  
 * https://www.practo.com/

