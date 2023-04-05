
const allowedDomains = ['http://localhost:5173', 'https://v43-frontend.ahmedlotfy.me/', 'https://v43-tier2-team14-frontend.onrender.com'];
export const corsOptions = {
  origin: function (origin, callback) {
    if (allowedDomains.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

export const headers = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Origin', 'https://https://v43-frontend.ahmedlotfy.me/');
  res.header('Access-Control-Allow-Origin', 'https://v43-tier2-team14-frontend.onrender.com');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Headers', 'Authorization');
  next();
}