import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from './index';
import * as types from './types';
import * as data from '../assets/sampleData';

const mockStore = configureMockStore([thunk]);

describe('fetchUser action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('calls fetch user action if the fetch response was successful', () => {
    const mockResponse = {
      _id: '2475hdsfh385',
      username: 'julia',
    };

    const expectedAction = [
      {
        type: types.FETCH_USER,
        payload: { _id: '2475hdsfh385', username: 'julia' },
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse,
      });
    });

    const store = mockStore();
    return store.dispatch(actions.fetchUser())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(1);
        expect(actions).toEqual(expectedAction);
      });
  });
});

describe('fetchTracks action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('calls pending and success actions if the fetch response was successful', () => {
    const mockResponse = {
      items: data.topTrackResponse,
      next: 'https://api.spotify.com/v1/me/top/tracks?limit=10&offset=10&time_range=short_term',
    };

    const expectedActions = [
      {
        type: types.FETCH_TOP_TRACKS_PENDING,
      },
      {
        type: types.FETCH_TOP_TRACKS_SUCCESS,
        payload: [data.topTracks[0]],
      },
      {
        type: types.FETCH_TOP_TRACKS_HAS_MORE,
        payload: true,
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse,
      });
    });

    const store = mockStore();
    return store.dispatch(actions.fetchTracks())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(3);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('calls pending and failed actions if the fetch response was not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        message: 'Request failed with status code 404',
      });
    });

    const expectedActions = [
      {
        type: types.FETCH_TOP_TRACKS_PENDING,
      },
      {
        type: types.FETCH_TOP_TRACKS_ERROR,
        payload: 'Request failed with status code 404',
      },
    ];

    const store = mockStore();
    return store.dispatch(actions.fetchTracks())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });
});

describe('fetchArtists action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('calls pending and success actions if the fetch response was successful', () => {
    const mockResponse = {
      items: data.topArtistResponse,
      next: 'https://api.spotify.com/v1/me/top/artists?limit=10&offset=10&time_range=short_term',
    };

    const expectedActions = [
      {
        type: types.FETCH_TOP_ARTISTS_PENDING,
      },
      {
        type: types.FETCH_TOP_ARTISTS_SUCCESS,
        payload: [data.topArtists[0]],
      },
      {
        type: types.FETCH_TOP_ARTISTS_HAS_MORE,
        payload: true,
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse,
      });
    });

    const store = mockStore();
    return store.dispatch(actions.fetchArtists())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(3);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('calls pending and failed actions if the fetch response was not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        message: 'Request failed with status code 404',
      });
    });

    const expectedActions = [
      {
        type: types.FETCH_TOP_ARTISTS_PENDING,
      },
      {
        type: types.FETCH_TOP_ARTISTS_ERROR,
        payload: 'Request failed with status code 404',
      },
    ];

    const store = mockStore();
    return store.dispatch(actions.fetchArtists())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });
});

describe('fetchRecentlyPlayed action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('calls pending and success actions if the fetch response was successful', () => {
    const mockResponse = {
      items: data.recentlyPlayedTrackResponse,
      next: 'https://api.spotify.com/v1/me/player/recently-played?before=1536579404330&limit=10',
      cursors: {
        before: '1536579404330',
      },
    };

    const expectedActions = [
      {
        type: types.FETCH_RECENTLY_PLAYED_TRACKS_PENDING,
      },
      {
        type: types.FETCH_RECENTLY_PLAYED_TRACKS_SUCCESS,
        payload: [data.recentlyPlayedTracks[0]],
      },
      {
        type: types.FETCH_RECENTLY_PLAYED_TRACKS_HAS_MORE,
        payload: true,
      },
      {
        type: types.FETCH_RECENTLY_PLAYED_TRACKS_BEFORE,
        payload: '1536579404330',
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse,
      });
    });

    const store = mockStore();
    return store.dispatch(actions.fetchRecentlyPlayed())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(4);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('calls pending and failed actions if the fetch response was not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        message: 'Request failed with status code 404',
      });
    });

    const expectedActions = [
      {
        type: types.FETCH_RECENTLY_PLAYED_TRACKS_PENDING,
      },
      {
        type: types.FETCH_RECENTLY_PLAYED_TRACKS_ERROR,
        payload: 'Request failed with status code 404',
      },
    ];

    const store = mockStore();
    return store.dispatch(actions.fetchRecentlyPlayed())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });
});

describe('createPlaylist action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('calls pending and success actions if the fetch response was successful', () => {
    const mockResponse = {
      playlist_info: data.playlistResponse,
    };

    const expectedActions = [
      {
        type: types.CREATE_PLAYLIST_PENDING,
      },
      {
        type: types.CREATE_PLAYLIST_SUCCESS,
        payload: data.playlist,
      },
    ];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockResponse,
      });
    });

    const store = mockStore();
    return store.dispatch(actions.createPlaylist())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });

  it('calls pending and failed actions if the fetch response was not successful', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.reject({
        status: 404,
        message: 'Request failed with status code 404',
      });
    });

    const expectedActions = [
      {
        type: types.CREATE_PLAYLIST_PENDING,
      },
      {
        type: types.CREATE_PLAYLIST_ERROR,
        payload: 'Request failed with status code 404',
      },
    ];

    const store = mockStore();
    return store.dispatch(actions.createPlaylist())
      .then(() => {
        const actions = store.getActions();
        expect(actions.length).toBe(2);
        expect(actions).toEqual(expectedActions);
      });
  });
});
