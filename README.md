# Star Wars Characters React App

## Description

This is a React.js application that fetches and displays data from the Star Wars API (SWAPI). Users can view a list of Star Wars characters in a table format and click on each character for more details.

## Features

- Fetches Star Wars character data from SWAPI.
- Displays a list of characters in a table format.
- Implements a character detail page.
- Handles loading states and errors.
- Theming support via a ThemeProvider.
- Reusable `useFetch` hook for data fetching.
- Context API for pagination state management.
- Caching mechanism to avoid redundant API calls for species data.
- Search params to track the current page (preserved in the URL for navigation but resets on reload).

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/hayimdeutsch/swapi-characters.git
   cd star-wars-react-app
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Start the application:
   ```sh
   npm start
   ```

## Technologies Used

- React.js
- React Router
- Axios for API requests
- Material UI for styling

## Design & Implementation Decisions

### 1. **Material UI for Styling**

- Used Material UI for a modern and consistent design.
- Provides consistent styling and better UX with minimal effort.
- Alternative: Could have used plain CSS, but MUI offers a scalable approach.

### 2. **Custom `useFetch` Hook**

- Encapsulates fetching logic for reusability.
- Manages loading, error, and data state in a single place.
- Alternative: Could have placed API calls directly in components, but that would cause code duplication.

### 3. **Context API for Pagination State**

- Globalized pagination state to allow navigation back to the last viewed page.
- Prevents loss of user progress when switching between pages and details.
- Alternative: Could have stored pagination in component state, but context keeps it persistent across routes.

### 4. **Caching Species Data**

- Implemented caching to avoid repeated API requests for species names.
- Improves performance and reduces redundant network calls.
- Alternative: Could fetch species data each time, but this optimizes API usage.

### 5. **Search Params for Current Page Tracking**

- Used search params to reflect the current page number in the URL.
- While it doesn’t affect the actual URL, it enables tracking within the app.
- On reload, pagination resets to the first page, but navigation between pages remains intuitive.
- Alternative: Could have used local storage, but search params keep navigation cleaner.
