export function timeToSeconds(time: string) {
  const [hour = "0", minute = "0", seconds = "0"] = time.split(":");

  const hoursInSeconds = Number(hour) * 3600;
  const minutesInSeconds = Number(minute) * 60;

  return hoursInSeconds + minutesInSeconds + Number(seconds);
}
