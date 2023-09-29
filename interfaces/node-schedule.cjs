const schedule = require("node-schedule");

function CronInterface(pattern, options, fn) {
  let job;
  return {
    init: () => (job = schedule.scheduleJob(pattern, fn ?? (() => {}))),
    next: () => job.nextInvocation(),
    enumerate: () => {
      throw new Error("Not suppported");
    },
    stop: () => job.cancel(),
  };
}

module.exports = {
  id: "node-schedule",
  url: "https://github.com/node-schedule/node-schedule",
  interface: CronInterface,
};
