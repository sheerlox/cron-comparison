import cron from "cron";

function CronInterface(pattern, options, fn) {
  let job;
  return {
    init: () => (job = new cron.CronJob(pattern, fn ?? (() => {}))),
    next: () => job.nextDates(),
    stop: () => {},
  };
}

export default {
  id: "cron",
  url: "https://github.com/kelektiv/node-cron",
  interface: CronInterface,
};
