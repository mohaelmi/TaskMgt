// return difference from estimated start time and actual system for alert
const timeDifference = (task) => {
  // gett entire date
  function getDateFromTime(time) {
    time = time.split(":");
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), ...time);
  }

  // dispatch({ type: ACTIONS.SET_ALERT_LENGTH, payload: length });

  const stimatedTimeInMilliseconds = new Date(
    getDateFromTime(task.estimatedstarttime)
  ).getTime();
  const currentTime = new Date().getTime();
  const diff = ((stimatedTimeInMilliseconds - currentTime) / 1000 / 60).toFixed(
    0
  );
  return diff <= 5 ? diff : null;
};

export { timeDifference };
