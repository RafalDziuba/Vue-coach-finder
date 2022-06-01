export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.logedOut = false;
  },
  didLogout(state) {
    state.didLogout = true;
  },
};
