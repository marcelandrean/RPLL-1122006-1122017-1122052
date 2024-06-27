import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import commentRoutes from './routes/commentRoutes';
import postLikeRoutes from './routes/postLikeRoutes';
import messageRoutes from './routes/messageRoutes';
import logRoutes from './routes/logRoutes';
import matchRoutes from './routes/matchRoutes';
import notificationRoutes from './routes/notificationRoutes';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(bodyParser.json());

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/postlikes', postLikeRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/matches', matchRoutes);
app.use('/api/notifications', notificationRoutes);

app.listen(PORT, 'localhost', () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

