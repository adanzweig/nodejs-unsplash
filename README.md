# Random Picture Fetcher

## Description
This project is a simple Node.js application that uses the Unsplash API to fetch random pictures. It demonstrates the use of environment variables for API keys and Axios for making HTTP requests.

## Getting Started

### Dependencies
- Node.js
- npm (Node Package Manager)
- Axios for HTTP requests
- dotenv for loading environment variables

### Installing
- Clone the repository to your local machine.
- Navigate to the project directory.
- Run `npm install` to install the required dependencies.

### Environment Setup
- Create a `.env` file in the project root.
- Add your Unsplash API access token in the `.env` file:
  ```
  ACCESS_TOKEN=your_access_token_here
  ```

### Executing the program
- Run the script using Node.js:
  ```
  node index.js
  ```
- The program will fetch a random picture from Unsplash and display its details in the console.

## Features
- Fetches a random picture from Unsplash.
- Demonstrates the use of Axios for API requests.
- Uses dotenv for environment variable management.

## Help
Any advise for common problems or issues.

## Version History
- 0.1
  - Initial Release

## Acknowledgments
Inspiration, code snippets, etc.
- [Unsplash API](https://unsplash.com/developers)