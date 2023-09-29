const cron = require("cron");

function CronInterface(pattern, options, fn) {
    let job;
    return {
        init: () => job = new cron.CronJob(pattern, fn ?? (() => { })),
        next: () => job.nextDates(),
        enumerate: (n) => job.nextDates(n),
        stop: () => {}
    };
}

module.exports = {
    id: "cron",
    url: "https://github.com/kelektiv/node-cron",
    interface: CronInterface
};