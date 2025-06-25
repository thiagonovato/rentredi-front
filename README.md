# React Firebase User CRUD (Frontend)

This project is a frontend application built with **React + TypeScript** that interacts with a RESTful API to manage users. The backend uses **Firebase Realtime Database** to store user data and fetches **geolocation (latitude, longitude, timezone)** from the **OpenWeatherMap API** based on the user's zip code.

---

## Features

- Display a list of users
- Create new users by name and zip code
- Edit existing users
- Delete users
- Automatically fetch latitude, longitude, and timezone from the zip code
- Real-time UI updates after every operation

---

## 🔗 Technologies Used

- React
- TypeScript
- Fetch API (for backend integration)
- Firebase Realtime Database (handled by the backend)
- OpenWeatherMap API (handled by the backend)
- Express backend (not included here, but required)

---

## How to Run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```

3. Open your browser at:
   ```
   http://localhost:3000
   ```

---

## Backend API Configuration

In the file `src/api.ts`, set the base URL of your API:

```ts
const API_URL = "https://your-api-url.com"; // or http://localhost:8080
```

Your backend must expose the following endpoints:

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| GET    | `/users`     | List all users          |
| POST   | `/users`     | Create a new user       |
| PUT    | `/users/:id` | Update an existing user |
| DELETE | `/users/:id` | Delete a user           |

> On creation, the backend fetches the geolocation using OpenWeatherMap based on the provided zip code.

---

## Example: POST `/users`

### Request Body:
```json
{
  "name": "John Doe",
  "zipCode": "10001"
}
```

### Backend Behavior:
- Uses OpenWeatherMap to get `latitude`, `longitude`, and `timezoneOffset`
- Stores the full user object in Firebase Realtime Database
- Returns the created user

---

## UI Overview

- A form with two inputs: **Name** and **Zip Code**
- A data grid displaying:
  - Name
  - Zip Code
  - Latitude
  - Longitude
  - Timezone Offset
  - Edit/Delete actions

---

## Ideal For

- Demonstrating full CRUD flow with React and a REST API
- Learning to integrate frontend and backend cleanly
- Exploring real-time data sync with Firebase (via backend)
