# stuckSong 

Fullstack React and Node application for getting user's top tracks and artists on Spotify.

Live: https://stucksong.herokuapp.com

### User stories:

1. You can get your top tracks and artists on Spotify.

2. You can create a playlist of your top tracks and share it with your friends.


### Getting started

```
> git clone https://github.com/anya92/stucksong
> cd stucksong
> yarn install
```

#### Create `variables.env` file with:

`CLIENT_ID` - Spotify Web API Client ID

`CLIENT_SECRET` - Spotify Web API Client Secret

`DATABASE` - Mongo Database URL

`SECRET` - secret for express-session

`KEY` - key for express-session

```
> yarn dev
```

### Running the tests

```
> yarn test
```

### Built with:

- React & Redux
- Spotify Web API
- Spotify Authentication with Passport
- Glamorous for styling
- Jest & Enzyme for testing
- Code-splitting with react-loadable
