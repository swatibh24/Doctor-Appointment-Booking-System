const auth = {
  isPermitted: (username) => {
    if(!username) {
      return false;
    }
    if(username.toLowerCase() === 'dog') {
      return false;
    }
    if(! username.match(/^[A-Za-z0-9_-]{2,26}$/)) {
      return false;
    }
    return true;
  },
};

module.exports = auth;