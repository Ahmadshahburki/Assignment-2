
TO START WORKING ON THIS PROJECT, FOLLOW THESE STEPS:

1. Install Node.js:
   Ensure you have Node.js installed on your system. You can download it from https://nodejs.org/.

2. Install MongoDB:
   Ensure MongoDB is installed and running locally on your machine.
   Alternatively, use a cloud MongoDB service like MongoDB Atlas.

3. Update the .env File:
   - Open the backend/config/.env file.
   - Update the MONGO_URI to point to your MongoDB connection string.
   - Replace 'your_jwt_secret' in JWT_SECRET with a strong secret key.

4. Install Dependencies:
   Open a terminal in the backend folder and run:
       npm install

5. Start the Server:
   To start the server in production mode, run:
       npm start
   For development mode with automatic restarts, run:
       npm run dev

6. Test the APIs:
   Use Postman or any other API testing tool to test the following routes:
   - POST /api/signup: Create a new user.
   - POST /api/signin: Sign in an existing user and receive a JWT.
   - GET /api/protected: Access a protected route using a valid JWT.

7. Check MongoDB:
   Ensure data is being saved correctly in your MongoDB database.

8. Additional Notes:
   - Do not forget to secure your JWT_SECRET and MongoDB credentials.
   - You can customize the server port in the .env file.
