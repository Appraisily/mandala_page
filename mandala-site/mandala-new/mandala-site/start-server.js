const { exec } = require('child_process');
const http = require('http');

// Start the Next.js server
console.log('Starting the Next.js server...');
const server = exec('npm start');

// Show server output
server.stdout.on('data', (data) => {
  console.log(data.toString().trim());
});

server.stderr.on('data', (data) => {
  console.error(data.toString().trim());
});

// Function to check if the server is up
function checkServerStatus() {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000', (res) => {
      console.log(`Server is up! Status code: ${res.statusCode}`);
      resolve(true);
    });
    
    req.on('error', (err) => {
      console.log('Server not ready yet, retrying...');
      resolve(false);
    });
    
    req.end();
  });
}

// Wait for the server to be ready
async function waitForServer() {
  let isReady = false;
  
  while (!isReady) {
    isReady = await checkServerStatus();
    
    if (!isReady) {
      // Wait 2 seconds before retrying
      await new Promise(resolve => setTimeout(resolve, 2000));
    }
  }
  
  // Wait a bit more to make sure everything is loaded
  await new Promise(resolve => setTimeout(resolve, 3000));
  
  return isReady;
}

// Main function to run the audit
async function main() {
  try {
    const isServerReady = await waitForServer();
    
    if (isServerReady) {
      console.log('Server is ready! You can now run your audit scripts.');
      console.log('Press Ctrl+C when done to stop the server.');
    }
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

main();

// Handle process exit
process.on('SIGINT', () => {
  console.log('Stopping server...');
  server.kill();
  process.exit(0);
});