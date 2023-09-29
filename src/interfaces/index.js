import PackageJSON from "../../package.json" assert { type: "json" };

import Cron from "./cron.cjs";
import Croner from "./croner.js";
import CronosJS from "./cronosjs.js";
import NodeCron from "./node-cron.cjs";
import NodeSchedule from "./node-schedule.cjs";

const subjects = [Cron, Croner, CronosJS, NodeCron, NodeSchedule];

for (const subject of subjects) {
  subject.version = PackageJSON.dependencies[subject.id];
  if (subject.version == null) {
    throw new Error(
      `Package "${subject.id}" version not found in package.json!`,
    );
  }
}

export default subjects;
