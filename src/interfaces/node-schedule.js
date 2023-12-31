import schedule from "node-schedule";

function CronInterface(pattern, options, fn) {
  let job;
  return {
    init: () => (job = schedule.scheduleJob(pattern, fn ?? (() => {}))),
    next: () => job.nextInvocation(),
    stop: () => job.cancel(),
  };
}

export default {
  id: "node-schedule",
  url: "https://github.com/node-schedule/node-schedule",
  interface: CronInterface,
};
