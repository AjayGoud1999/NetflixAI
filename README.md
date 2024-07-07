# Netflix AI
### Netflix AI is a project showcasing personalized movie and TV show recommendations powered by OpenAI's technology.

## Features
### Personalized Recommendations: 
Uses advanced AI algorithms to suggest content based on individual preferences.

### Security: 
Secure login process powered by Firebase.

### User Interface: 
Intuitive and responsive UI built with React.

### Technologies Used
Frontend: React
State Management: Redux
Authentication: Firebase
APIs: OpenAI API for recommendations, TMDB API for movie and TV show data.

### Getting Started
To get started with Netflix AI:

1. Clone this repository.
2. Create a .env file in the root directory and add your TMDB and OpenAI API keys.

### Your .env file should contain
    TMDB_API_KEY=your_tmdb_api_key
    OPENAI_API_KEY=your_openai_api_key

3. Set up Firebase:

Create a Firebase project at Firebase Console.
Obtain your Firebase config object from the Firebase project settings.
Replace the Firebase config object in src/firebase.js with your own:

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id",
  measurementId: "your_measurement_id"
};

4. Install dependencies:

npm install

5. Start the development server:

npm run start

## Enjoy exploring personalized entertainment with Netflix AI!