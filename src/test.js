import schedulers from "./interfaces/index.js";

for (const scheduler of schedulers) {
  let job = new scheduler.interface("* * * * * *");
  job.init();
  job.next();
  job.stop();
}
