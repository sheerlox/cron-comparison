import { scheduleTask, validate, CronosExpression } from "cronosjs";

function CronInterface(pattern, options, fn) {
  let job;
  return {
    init: () => (job = scheduleTask(pattern, fn, options)),
    next: () => CronosExpression.parse(pattern).nextDate(options),
    enumerate: () => CronosExpression.parse(pattern).nextNDates(options),
    stop: () => job.stop(),
  };
}

export default {
  id: "cronosjs",
  url: "https://github.com/jaclarke/cronosjs",
  interface: CronInterface,
};
