# cron-comparison

Automated benchmark of all JavaScript `cron` implementations, using [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://docs.github.com/en/actions).

## Running locally

Run benchmark and show output in console

`npm run benchmark`

Run benchmark and update readme with results

`npm run update-readme`

## Credits

This repository was originaly forked from [Hexagon/cron-comparison](https://github.com/Hexagon/cron-comparison)@[`57132f7`](https://github.com/Hexagon/cron-comparison/commit/57132f73323630ac2bc5d1022189b07be08ac773) on 2023-09-29.

## Latest results

> cron-comparison@1.2.1 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-09-30T00:36:30.052Z

Tested libraries:

- [cron](https://github.com/kelektiv/node-cron) `v2.4.4`
- [croner](https://github.com/hexagon/croner) `v7.0.1`
- [cronosjs](https://github.com/jaclarke/cronosjs) `v1.7.1`
- [node-cron](https://github.com/node-cron/node-cron) `v3.0.2`
- [node-schedule](https://github.com/node-schedule/node-schedule) `v2.1.1`

#### Pattern `0 0 0 L 2 *`

```
Tests

cron            - FAIL  - Error: Unknown alias: l
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

croner          x 86,784 ops/sec ±0.76% (89 runs sampled)
cronosjs        x 43,246 ops/sec ±7.55% (91 runs sampled)
node-schedule   x 225 ops/sec ±1.13% (87 runs sampled)

Fastest is croner
```

#### Pattern `1 2 3 4 5 6`

```
Tests

cron            - FAIL  - 2024-06-01 03:02:01
croner          - OK    - 2024-05-04 03:02:01
cronosjs        - OK    - 2024-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-05-04 03:02:01

Benchmark (only OK)

croner          x 95,987 ops/sec ±0.35% (90 runs sampled)
cronosjs        x 36,079 ops/sec ±2.63% (93 runs sampled)
node-schedule   x 1,750 ops/sec ±3.27% (88 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 00:39:00
croner          - OK    - 2023-09-30 00:39:00
cronosjs        - OK    - 2023-09-30 00:39:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 00:39:00

Benchmark (only OK)

cron            x 14,208 ops/sec ±1.44% (88 runs sampled)
croner          x 90,240 ops/sec ±0.35% (92 runs sampled)
cronosjs        x 21,978 ops/sec ±1.34% (88 runs sampled)
node-schedule   x 11,170 ops/sec ±1.28% (87 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 1`

```
Tests

cron            - FAIL  - 2024-03-04 00:00:00
croner          - OK    - 2024-02-05 00:00:00
cronosjs        - OK    - 2024-02-05 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-05 00:00:00

Benchmark (only OK)

croner          x 104,011 ops/sec ±0.38% (94 runs sampled)
cronosjs        x 37,759 ops/sec ±0.34% (96 runs sampled)
node-schedule   x 3,353 ops/sec ±0.98% (90 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 *`

```
Tests

cron            - FAIL  - 2024-03-29 00:00:00
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

croner          x 103,359 ops/sec ±0.28% (95 runs sampled)
cronosjs        x 45,041 ops/sec ±0.35% (93 runs sampled)
node-schedule   x 443 ops/sec ±1.26% (86 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 03:15:15
croner          - OK    - 2023-09-30 03:15:15
cronosjs        - OK    - 2023-09-30 03:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 03:15:15

Benchmark (only OK)

cron            x 1,923 ops/sec ±1.07% (90 runs sampled)
croner          x 91,718 ops/sec ±0.40% (93 runs sampled)
cronosjs        x 27,137 ops/sec ±0.46% (90 runs sampled)
node-schedule   x 926 ops/sec ±1.05% (90 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - FAIL  - 2023-11-01 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

croner          x 98,733 ops/sec ±0.31% (93 runs sampled)
cronosjs        x 38,483 ops/sec ±0.34% (93 runs sampled)
node-schedule   x 1,824 ops/sec ±1.12% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - FAIL  - 2023-11-05 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

croner          x 74,628 ops/sec ±0.30% (91 runs sampled)
cronosjs        x 27,444 ops/sec ±0.23% (96 runs sampled)
node-schedule   x 1,605 ops/sec ±1.13% (91 runs sampled)

Fastest is croner
```

## Test summary

|    Library    | OK  | FAIL | % OK |
| :-----------: | :-: | :--: | :--: |
|     cron      |  2  |  6   | 25%  |
|    croner     |  8  |  0   | 100% |
|   cronosjs    |  8  |  0   | 100% |
|   node-cron   |  0  |  8   |  0%  |
| node-schedule |  8  |  0   | 100% |
