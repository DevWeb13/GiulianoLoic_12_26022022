import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';

const mockedData = true;
const userId = 12;

const server = 'http://localhost:3001/';

async function getAverageSession() {
  // if (mockedData) return findInData(USER_ACTIVITY, 'userId', userId);
  if (mockedData) return findInData(USER_AVERAGE_SESSIONS, userId);
  return await getFromApi('user/' + userId + '/average-sessions').then(
    (response) => response.data
  );
}

async function getActivity() {
  // if (mockedData) return findInData(USER_ACTIVITY, 'userId', userId);
  if (mockedData) return findInData(USER_ACTIVITY, userId);
  return await getFromApi('user/' + userId + '/activity').then(
    (response) => response.data
  );
}

async function getUserData() {
  // if (mockedData) return findInData(USER_MAIN_DATA, 'userId', userId);
  if (mockedData) return findInData(USER_MAIN_DATA, userId);
  return await getFromApi('user/' + userId).then((response) => response.data);
}

// function findInData(src, type, where) {
//   for (const value of Object.values(src)) {
//     if (value[type] === where) return value;
//   }
// }
function findInData(src, id) {
  for (const value of src) {
    if (value.userId === id) return value;
  }
}

async function getFromApi(src) {
  const response = await fetch(server + src);
  return await response.json();
}

export { getUserData, getActivity,getAverageSession };
