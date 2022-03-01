import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';

const mockedData = true;
const userId = 12;

const server = 'http://localhost:3001/';

async function getdailyActivity() {
  if (mockedData) return findInData(USER_ACTIVITY, 'id', userId);
  return await getFromApi('user/' + userId + '/activity').then(
    (response) => response.data
  );
}

async function getUserData() {
  if (mockedData) return findInData(USER_MAIN_DATA, 'id', userId);
  return await getFromApi('user/' + userId).then((response) => response.data);
}

function findInData(src, type, where) {
  for (const value of Object.values(src)) {
    if (value[type] === where) return value;
  }
}

async function getFromApi(src) {
  const response = await fetch(server + src);
  return await response.json();
}

export { getUserData, getdailyActivity };
