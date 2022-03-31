// Format Performance Data ******************************************************************************
/**
 * [formatPerformanceData description]
 *
 * @param   {object}  data  Performance Data
 *
 * @return  {array}        Performance data.data
 */
function formatPerformanceData(data) {
  const frenchTranslation = [
    'Cardio',
    'Energie',
    'Endurance',
    'Force',
    'Vitesse',
    'Intensité',
  ];
  for (let i = 0; i < frenchTranslation.length; i++) {
    data.kind[i + 1] = frenchTranslation[i];
  }
  data.data.forEach((el, index) => (el.kind = data.kind[index + 1]));
  data.data.reverse();
  return data.data;
}

// Format Average Data ********************************************************************************
/**
 * Add days of average sessions
 *
 * @param   {object}  data  Average data
 *
 * @return  {array}       Average sessions data
 */
function addDaysAverageSessions(data) {
  const { sessions } = data;

  if (data.sessions.length !== 7) {
    data.sessions.shift();
    data.sessions.pop();
  }
  sessions.unshift({
    day: '',
    sessionLength: 15,
  });
  sessions.push({
    day: '',
    sessionLength: 15,
  });
  return sessions;
}

/**
 * Format average sessions date into letter
 *
 * @param   {array}  sessions  Average sessions data
 *
 * @return  {array}           Format average sessions data
 */
function formatAverageSessionDate(sessions) {
  const weekDay = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', ''];
  for (let i = 0; i < weekDay.length; i++) {
    sessions[i].day = weekDay[i];
  }
  return sessions;
}

// Format Activity Data *******************************************************************************
/**
 * Format activity sessions date into number
 *
 * @param   {object}  data  Average data
 *
 * @return  {array}       Activity sessions data
 */
function formatActivityDate(data) {
  const { sessions } = data;
  sessions.forEach((session) => {
    let result = session.day.substring(
      session.day.length - 2,
      session.day.length
    );
    result[0] === '0' ? session.day = result[1] : session.day = result;
  });
  return sessions;
}

// Format User Data **********************************************************************************
/**
 * Format todayScore attribute into score attribute
 *
 * @param   {object}  data  User data
 *
 * @return  {object}        Format user data
 */
function formatTodayScoreAttribute(data) {
  if (data.todayScore) {
    data.score = data.todayScore;
    delete data.todayScore;
  }
  return data;
}

function formatScore(data) {
  data.score < 1 && (data.score = data.score * 100);
  return data;
}

export {
  formatPerformanceData,
  addDaysAverageSessions,
  formatAverageSessionDate,
  formatActivityDate,
  formatTodayScoreAttribute,
  formatScore,
};
