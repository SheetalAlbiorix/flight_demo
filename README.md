## You can watch the demo of the app in action here:

## ✈️ Flight Email Parser - React Native Project

This project extracts structured flight details (like flight number, departure/arrival time and airport codes) from raw email content.

## 📦 Features

- ✅ Parses raw flight confirmation emails
- ✅ Extracts:
  - Flight number
  - Departure/Arrival airport codes
  - Departure/Arrival times
  - Airline name
- ✅ Skips outdated/past flights
- ✅ Supports multiple formats using flexible RegExp parsing
- ✅ ChatBot using OpenAI's Rest API.

## 🧠 How It Works

The core logic is powered by regular expressions and JavaScript Date parsing to identify and convert relevant data from unstructured email text.

## 🛠 Tech Stack

- **React Native** – Cross-platform mobile development
- **Typescript (ES6)** – Core language used throughout the app
- **Regex (Regular Expressions)** – For parsing unstructured email content
- **Redux Toolkit**
- **Gmail API and Google Auth** - For fetching the emails.

## 📂 Folder Structure

```
├── app/
│   ├── components/       # Reusable UI components
│   ├── screens/          # Application screens
│   ├── services/         # API service logic
│   ├── navigation/       # Navigation setup
│   ├── store/            # Redux store and slices
│   ├── utils/            # Utility functions
│   └── assets/           # Static assets (images, fonts, etc.)
├── ios/                  # iOS-specific files
├── android/              # Android-specific files
├── .env                  # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## 🚀 Steps to Installation

1. **Clone the Repository**

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```
     OPENAI_API_KEY=your_openai_api_key
     GOOGLE_IOS_CLIENT_ID=your_google_ios_client_id
     ```

4. **Run the App**:

   - For iOS:
     ```bash
     npx pod-install
     npm run ios
     ```
   - For Android:
     ```bash
     npm run android
     ```

5. **Enjoy the App**:
   - Parse flight emails and interact with the ChatBot for flight details.
