function millisecondToMinuteSecond(millisecond: number) {
  const minutes = Math.floor(millisecond / 60000);
  const seconds = Math.floor((millisecond % 60000) / 1000);

  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export { millisecondToMinuteSecond };
