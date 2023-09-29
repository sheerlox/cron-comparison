import cron from "node-cron";

function CronInterface(pattern, options, fn) {
  let job;
  return {
    init: () => {
      job = new cron.schedule(pattern, fn ?? (() => {}), { scheduled: true });
    },
    next: () => {
      return null;
    },
    stop: () => {
      job?.stop && job.stop();
    },
  };
}

export default {
  id: "node-cron",
  url: "https://github.com/node-cron/node-cron",
  interface: CronInterface,
};
