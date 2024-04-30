// server.js
const http = require('http');
const url = require('url');
const fs = require('fs');
const mysql2 = require('mysql2');
const bcrypt = require('bcrypt');

// Create MySQL connection
const connection = mysql2.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'users'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Create HTTP server
const server = http.createServer((req, res) => {
  const path = url.parse(req.url).pathname;
  
  if (path === '/') {
    // Serve HTML file
    fs.readFile('index.html', (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else if (path === '/signup' && req.method === 'POST') {
    // Handle signup
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { username, email, password } = JSON.parse(body);
      const hashedPassword = bcrypt.hashSync(password, 10);

      const sql = 'INSERT INTO signup (username, email, password) VALUES (?, ?, ?)';
      connection.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) {
          console.error('Error creating user:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Error creating user' }));
        } else {
          console.log('User created successfully');
          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: 'User created successfully' }));
        }
      });
    });
  } else if (path === '/login' && req.method === 'POST') {
    // Handle login
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const { email, password } = JSON.parse(body);

      const sql = 'SELECT * FROM login WHERE email = ?';
      connection.query(sql, [email], (err, results) => {
        if (err) {
          console.error('Error fetching user:', err);
          res.writeHead(500, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Error fetching user' }));
        } else if (results.length === 0) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'User not found' }));
        } else {
          const user = results[0];
          const isValidPassword = bcrypt.compareSync(password, user.password);

          if (!isValidPassword) {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Invalid password' }));
          } else {
            console.log('Login successful');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Login successful' }));
          }
        }
      });
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
