// Prepare require for modules who require it...
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

// Prepare benchmark
var Benchmark = require("benchmark");

// Commonjs modules
const NodeSchedule = require("./interfaces/node-schedule.cjs");
const Cron = require("./interfaces/cron.cjs");
const NodeCron = require("./interfaces/nodecron.cjs");

// ES modules
import Croner from "./interfaces/croner.js";
import CronosJS from "./interfaces/cronosjs.js";

const subjects = [Croner, NodeCron, NodeSchedule, CronosJS, Cron];

for (const scheduler of subjects) {
  let job = new scheduler.interface("* * * * * *");
  job.init();
  job.next();
  job.stop();
}
