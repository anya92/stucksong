const axios = require('axios');

exports.isLoggedIn = (req, res, next) => {
   if (req.isAuthenticated()) { //middleware !!!
    next();
    return;
  } else {
    console.log('You have to be logged in');
    return res.redirect('/');
  }
}

exports.checkAccessToken = async (req, res, next) => {
  if (!req.cookies.accessToken) {
    const response = await axios({
      url: 'https://accounts.spotify.com/api/token',
      method: 'post',
      params: {
        grant_type: 'refresh_token',
        refresh_token: req.session.refreshToken
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      auth: {
        username: process.env.CLIENT_ID,
        password: process.env.CLIENT_SECRET
      }
    });
    res.cookie('accessToken', response.data.access_token, { maxAge: 3600 * 1000 });
    res.accessToken = response.data.access_token;
    next();
  } else {
    next();
    return;
  }  
}

exports.catchErrors = fn => {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
};

exports.getData = (type, time) => async (req, res) => {
  // let tracks = [];
  // console.log('cookie', req.cookies.accessToken || res.accessToken);
  // console.log('res', res.accessToken);
  const response = await axios.get(
    `https://api.spotify.com/v1/me/top/${type}?limit=10&time_range=${time}`, 
    { headers: { 'Authorization': `Bearer ${req.cookies.accessToken || res.accessToken}` } })
  // response.data.items.forEach(song => {
  //   tracks.push({
  //     title: song.name, 
  //     artist: song.artists[0].name, 
  //     album: song.album.name, 
  //     image: song.album.images[0].url 
  //   });
  // });
  res.json(response.data.items); // response data
}
