import PackageJSON from "../../package.json" with { type: "json" };

import Cron from "./cron.js";
import Croner from "./croner.js";
import CronosJS from "./cronosjs.js";
import NodeCron from "./node-cron.js";
import NodeSchedule from "./node-schedule.js";

const subjects = [Cron, Croner, CronosJS, NodeCron, NodeSchedule];

for (const subject of subjects) {
  console.debug(`Testing package ${subject.id}`);
  subject.version = PackageJSON.dependencies[subject.id];
  if (subject.version == null) {
    throw new Error(
      `Package "${subject.id}" version not found in package.json!`,
    );
  }
}

console.debug("OK");

export default subjects;
