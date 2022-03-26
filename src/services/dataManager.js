










import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from '../data/data';

import {
  formatPerformanceData,
  addDaysAverageSessions,
  formatAverageSessionDate,
  formatActivityDate,
  formatTodayScoreAttribute,
  formatScore,
} from './dataFormatter';

const server = 'http://localhost:3001/';


// Get Data ********************************************************************************************
/**
 * Get user performance data
 *
 * @param   {number}  userId
 * @param   {boolean}  mockedData  If data mocked = true
 *
 * @return  {promise}              User performance data
 */
async function getUserPerformance(userId, mockedData) {
  if (mockedData)
    return formatPerformanceData(findInData(USER_PERFORMANCE, userId));
  return await getFromApi('user/' + userId + '/performance').then((data) =>
    formatPerformanceData(data)
  );
}

/**
 * Get user average sessions data
 *
 * @param   {number}  userId
 * @param   {boolean}  mockedData  If data mocked = true
 *
 * @return  {promise}              User average sessions data
 */
async function getAverageSession(userId, mockedData) {
  if (mockedData)
    return formatAverageSessionDate(
      addDaysAverageSessions(findInData(USER_AVERAGE_SESSIONS, userId))
    );
  return await getFromApi('user/' + userId + '/average-sessions')
    .then((data) => addDaysAverageSessions(data))
    .then((sessions) => formatAverageSessionDate(sessions));
}

/**
 * Get user activity data
 *
 * @param   {number}  userId
 * @param   {boolean}  mockedData  If data mocked = true
 *
 * @return  {promise}              User activity data
 */
async function getActivity(userId, mockedData) {
  if (mockedData) return formatActivityDate(findInData(USER_ACTIVITY, userId));
  return await getFromApi('user/' + userId + '/activity').then((data) =>
    formatActivityDate(data)
  );
}

/**
 * Get user data
 *
 * @param   {number}  userId
 * @param   {boolean}  mockedData  If data mocked = true
 *
 * @return  {promise}              User data
 */
async function getUserData(userId, mockedData) {
  if (mockedData)
    return formatScore(
      formatTodayScoreAttribute(findInData(USER_MAIN_DATA, userId))
    );
  return await getFromApi('user/' + userId).then((data) =>
    formatScore(formatTodayScoreAttribute(data))
  );
}

/**
 * Get mocked user data
 *
 * @param   {array}   usersData
 * @param   {number}  userId
 *
 * @return  {object}      User data
 */
function findInData(usersData, userId) {
  for (const value of usersData) {
    if (value.userId === userId || value.id === userId) {
      return value;
    }
  }
}

/**
 * Get API user data
 *
 * @param   {string}  uri  URI data
 *
 * @return  {promise}       User data
 */
async function getFromApi(uri) {
  
  // const response = await (await fetch(server + uri)).json();
  // return response.data;

  try {
    const datas = fetch(server + uri)
      .then((res) => res.json())
      .then((data) => data.data);
    return datas;
  } 
  catch (err) {
    
    
  throw err;
  }


}

// fetch('flowers.jpg').then(function(response) {
//   if(response.ok) {
//     response.blob().then(function(myBlob) {
//       var objectURL = URL.createObjectURL(myBlob);
//       myImage.src = objectURL;
//     });
//   } else {
//     console.log('Mauvaise réponse du réseau');
//   }
// })
// .catch(function(error) {
//   console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
// });

export { getUserData, getActivity, getAverageSession, getUserPerformance };
