const app = require('./App');
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0'; // Allows access from network devices

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://localhost:${PORT} and accessible on your IP`);
});
