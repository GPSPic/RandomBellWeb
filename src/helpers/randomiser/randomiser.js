import WarningText from "../../components/texts/WarningText";

export const getRandomTimesForValidDays = function (data) {
  const dailyTimes = data.daysSelected;

  for (const el in data.daysSelected) {
    if (data.daysSelected[el]) {
      dailyTimes[el] = getRandomArray(data);
    }
  }

  return dailyTimes;
};

export const minuteConverter = function (str) {
  if (typeof str !== "string") {
    throw new Error(str + ": Input is not a string");
  }
  const timeParts = str.split(":");
  return Number(timeParts[0]) * 60 + Number(timeParts[1]);
};

export const totalLengthOfTime = function (start, end) {
  if (end > start) {
    return end - start;
  } else {
    return (
      <WarningText
        mainAlert="Warning! "
        text="Your end time needs to be before your start time (for now)"
      ></WarningText>
    );
  }
};

export const getIntervalLength = function (start, end, ringNum) {
  return Math.floor(totalLengthOfTime(start, end) / ringNum);
};

export const getIntervalsEdges = function (start, end, ringNum) {
  const totalTime = totalLengthOfTime(start, end);

  if (ringNum > 0) {
    const intervalLength = Math.floor(totalTime / ringNum);
    const remainingMinutes = totalTime % ringNum;
    const intervals = [start];
    let newValue = start;

    for (let i = 0; i < ringNum; i++) {
      newValue = newValue + intervalLength + (i < remainingMinutes ? 1 : 0);
      intervals.push(newValue);
    }
    return intervals;
  }
};

export const getRandomValue = function (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getRandomArray = data => {
  const start = minuteConverter(data.startTime)
  const end = minuteConverter(data.endTime)
  const ringNum = data.ringNum
  let minInterval = minuteConverter(data.minInterval)
  
  if (getIntervalLength(start, end, ringNum) < minInterval) {
    return
  }
  const edges = getIntervalsEdges(start, end, ringNum)
  
  const randomArr = []
  let overTime = 0
  for (let i = 0; i < data.ringNum; i++) {
    const randomTime = getRandomValue(edges[i] + overTime, edges[i+1])
    randomArr.push(randomTime)
    if (edges[i] + minInterval > edges[i+1]) {
      overTime = randomTime + minInterval - edges[i+1]
    } else {
      overTime = 0
    }
  }
  return randomArr
}
