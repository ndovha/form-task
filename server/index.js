const express = require('express');
const feedbackRouter = require('./routes/feedback.routes');

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json())
app.use('/api', feedbackRouter)


app.listen(PORT, () => console.log(`Streaming service is running on http://localhost:${PORT}`))