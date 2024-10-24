# Counter App

## Project Overview

The **Counter App** is a simple React application that allows users to increase or decrease a counter value within a specified range. It demonstrates the basic use of React's `useState` hook for managing state, as well as how to handle user input via buttons.

## Features

- Users can increment the counter value by clicking the "Add value" button.
- Users can decrement the counter value by clicking the "Remove value" button.
- The counter value is limited to a minimum of 1 and a maximum of 20.

## Technologies Used

- **React**: JavaScript library used to build the user interface.
- **CSS**: Basic styling through a CSS file.

## How It Works

1. The counter is initialized with a value of **15** using the `useState` hook.
2. The **Add value** button increments the counter by 1, up to a maximum of **20**.
3. The **Remove value** button decreases the counter by 1, but the value cannot go below **1**.
4. The current counter value is displayed on the screen.

## Usage

### Example Usage

1. Start the application by running it in your preferred development environment.
2. The counter starts at **15**.
3. Click on **Add value** to increase the counter value. It will stop incrementing once it reaches **20**.
4. Click on **Remove value** to decrease the counter value. It will not go below **1**.

### Example of Interactions

- Initially, the counter value is displayed as **15**.
- After clicking the **Add value** button, the value will increase by 1, up to **20**.
- After clicking the **Remove value** button, the value will decrease by 1, but will not go below **1**.

## Installation and Setup

To set up the project locally, follow these steps:

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine.
- Ensure you have a package manager like [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed.

### Clone the Repository

```bash
git clone <repository_url>
cd counter-app
```

### Install Dependencies

Run the following command to install the required packages:

```bash
npm install
```

### Start the Application

Run the following command to start the development server:

```bash
npm run dev
```

Then, open your browser and navigate to `http://localhost:5174` (or the port you're running on) to see the application in action.

## Conclusion

This simple **Counter App** is an easy-to-understand demonstration of how React can be used for state management and handling user interactions. It can be extended by adding more features such as resetting the counter or setting custom limits.

