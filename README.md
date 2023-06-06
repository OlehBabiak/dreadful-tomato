# Introduction
Thank you for the opportunity to participate in the practical test for the Angular Front-End Developer position at Got-IT. 
I have implemented the Dreadful Tomato web app based on the provided requirements and design. 
This README file provides an overview of the implementation and highlights some important aspects of the application.

## Project Structure
The project follows a standard Angular project structure with the following key components:

* src/app/shared/components: Contains reusable components used throughout the application.
* src/app/pages: Contains the three main pages of the application: Home, TV Shows, and Movies.
* src/app/services: Contains the service responsible for fetching data from the provided API.

## Design and Styling
The application adheres to the provided design guidelines and implements the styling using SCSS. 
The SCSS files are organized and structured to ensure maintainability and reusability. 
Global styles are defined in the src/styles folder, while component-specific styles are scoped to their respective components.

## Data Retrieval
The application fetches data from the provided API using the HttpClient module in Angular. 
The MoviesService in the services folder handles the API requests and returns the required data to the respective components.

## Reusable Components
To promote reusability and maintainability, several components have been created:

* item-card-component: Represents a card that displays information about an episode or movie. 
This component is used in the TV Shows and Movies pages to render the individual cards.
* filters-component: Provides a search input field that allows users to filter TV shows and movies based on their title.
* Implements a date picker to allow users to select the release year. This component is used in the TV Shows and Movies pages for filtering.
Implements a date picker to allow users to select the release year. This component is used in the TV Shows and Movies pages for filtering.

## Running the Application
To run the application, follow these steps:

* Clone the repository to your local machine.
* Navigate to the project directory.
* Install the dependencies by running npm install.
* Start the development server by running npm start.
* Open your browser and visit http://localhost:4200 to view the application.

## Conclusion
I thoroughly enjoyed working on this practical test, and I appreciate the opportunity to showcase my skills as an Angular Front-End Developer. 
I have implemented the Dreadful Tomato web app according to the provided requirements and design. 
If you have any questions or need further clarification on any aspect of the implementation, please feel free to reach out to me.

P.S. I created some css mixins for adaptive design, and partially used them in components.
After clarifying with that to the need for adaptive design, I did not change code over to save time.
This code does not affect the design as required.

#### Thank you for considering my application.

