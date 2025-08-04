# --- Base Image ---
# Every Docker image starts from a base image.
# This line tells Docker to use the official Node.js version 18 image.
# 'alpine' is a lightweight version of Linux, which makes our final image smaller.
FROM node:18-alpine

# --- Set Working Directory ---
# This creates a folder named '/app' inside the container
# and sets it as the main directory for all subsequent commands.
WORKDIR /app

# --- Copy Dependency Information ---
# This copies your package.json and package-lock.json files into the container.
# This is done first to leverage Docker's layer caching.
COPY package*.json ./

# --- Install Dependencies ---
# This runs the 'npm install' command inside the container.
RUN npm install

# --- Copy Application Code ---
# Now, copy all the other files from your project folder (like app.js and index.html)
# into the container's /app directory.
COPY . .

# --- Expose Port ---
# This tells Docker that the application inside the container will be listening
# for traffic on port 3000.
EXPOSE 3000

# --- Define Startup Command ---
# This is the command that will be executed when the container starts.
CMD [ "npm", "start" ]
