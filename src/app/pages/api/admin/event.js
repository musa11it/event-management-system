
import { verifyToken } from './auth';

export default async function handler(req, res) {
  const isAdmin = verifyToken(req.headers.authorization);
  if (!isAdmin) return res.status(401).json({ message: 'Unauthorized' });
  
  
}
