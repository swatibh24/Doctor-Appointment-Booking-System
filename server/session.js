const { v4: uuidv4 } = require('uuid');

const uuid = () => {
  const uId = uuidv4();
  return uId;
};

const users = {
  "11": {
    username: "ABC",
    uid: '11',
    docIdList:[0,'ABC'],
  }
};
const addUser = ( username) => {
  const id = uuidv4();
  const usersList = Object.values(users);
  for(const user of usersList){
    if(user.username === username){
      return 401;
    }
  }
  users[id] = {username: username,uid: id, docIdList: [] };
  return users[id];
};
const addDocIdToCreatedList = (username, docId) => {
  const usersList = Object.values(users);
  let userObject = {};
  for(const user of usersList){
    if(user.username === username){
      userObject = user;
      break;
    }
  }
  userObject.docIdList.push(docId);
};

const validateSameAppoinment = (username, docId) => {
  const usersList = Object.values(users);
  let userObject = {};
  for(const user of usersList){
    if(user.username === username){
      userObject = user;
      break;
    }
  }if(userObject){
    for(let index = 0; index < userObject.docIdList.length; index++){
      if(userObject.docIdList[index] == docId){
        return "DUPLICATE_FOUND";
      }
    }
  }

};

const cancelBooking = (username, docId) => {
  const usersList = Object.values(session.users);
  let userObject = {};
  for(const user of usersList){
    if(user.username === username){
      userObject = user;
      break;
    }
  }
  if(userObject){
    for(let index = 0; index < userObject.docIdList.length; index++){
      if(userObject.docIdList[index] == docId){
        userObject.docIdList.splice(index,1);
        break;
      }
    }
  }
  return true;
};



const session = {
  users,
  addUser,
  addDocIdToCreatedList,
  cancelBooking,
  validateSameAppoinment,
};

module.exports = session;