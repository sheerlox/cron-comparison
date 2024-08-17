# cron-comparison

Automated benchmark of all JavaScript `cron` implementations, using [Renovate](https://github.com/renovatebot/renovate) and [GitHub Actions](https://docs.github.com/en/actions).

## Running locally

Run benchmark and show output in console

`npm run benchmark`

Run benchmark and update readme with results

`npm run update-readme`

## Credits

This repository was originaly forked from [Hexagon/cron-comparison](https://github.com/Hexagon/cron-comparison) on commit [`57132f7`](https://github.com/Hexagon/cron-comparison/tree/57132f73323630ac2bc5d1022189b07be08ac773) on 2023-09-29.

## Latest results

> cron-comparison@1.3.17 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-08-17T08:59:43.901Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.7`
- [croner](https://github.com/hexagon/croner) `v8.1.1`
- [cronosjs](https://github.com/jaclarke/cronosjs) `v1.7.1`
- [node-cron](https://github.com/node-cron/node-cron) `v3.0.3`
- [node-schedule](https://github.com/node-schedule/node-schedule) `v2.1.1`

#### Pattern `0 0 0 L 2 *`

```
Tests

cron            - FAIL  - Error: Unknown alias: l
croner          - OK    - 2025-02-28 00:00:00
cronosjs        - OK    - 2025-02-28 00:00:00
node-cron       - FAIL  - Error: L is a invalid expression for day of month
node-schedule   - OK    - 2025-02-28 00:00:00

Benchmark (only OK)

croner          x 209,757 ops/sec ±0.71% (94 runs sampled)
cronosjs        x 80,720 ops/sec ±1.18% (91 runs sampled)
node-schedule   x 334 ops/sec ±1.04% (88 runs sampled)

Fastest is croner
```

#### Pattern `1 2 3 4 5 6`

```
Tests

cron            - OK    - 2025-05-03 03:02:01
croner          - OK    - 2025-05-03 03:02:01
cronosjs        - OK    - 2025-05-03 03:02:01
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2025-05-03 03:02:01

Benchmark (only OK)

cron            x 6,901 ops/sec ±1.36% (90 runs sampled)
croner          x 194,018 ops/sec ±0.53% (93 runs sampled)
cronosjs        x 64,929 ops/sec ±0.57% (96 runs sampled)
node-schedule   x 3,189 ops/sec ±0.93% (92 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2024-08-17 09:00:24
croner          - OK    - 2024-08-17 09:00:24
cronosjs        - OK    - 2024-08-17 09:00:24
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-08-17 09:00:24

Benchmark (only OK)

cron            x 33,452 ops/sec ±2.58% (82 runs sampled)
croner          x 190,274 ops/sec ±0.59% (92 runs sampled)
cronosjs        x 38,356 ops/sec ±0.67% (91 runs sampled)
node-schedule   x 18,415 ops/sec ±3.77% (72 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 1`

```
Tests

cron            - OK    - 2025-02-03 00:00:00
croner          - OK    - 2025-02-03 00:00:00
cronosjs        - OK    - 2025-02-03 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2025-02-03 00:00:00

Benchmark (only OK)

cron            x 11,560 ops/sec ±0.74% (93 runs sampled)
croner          x 201,998 ops/sec ±0.31% (93 runs sampled)
cronosjs        x 65,110 ops/sec ±0.55% (91 runs sampled)
node-schedule   x 4,048 ops/sec ±0.79% (92 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 *`

```
Tests

cron            - OK    - 2028-02-29 00:00:00
croner          - OK    - 2028-02-29 00:00:00
cronosjs        - OK    - 2028-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2028-02-29 00:00:00

Benchmark (only OK)

cron            x 782 ops/sec ±0.82% (92 runs sampled)
croner          x 106,192 ops/sec ±2.54% (91 runs sampled)
cronosjs        x 60,526 ops/sec ±0.37% (94 runs sampled)
node-schedule   x 90.86 ops/sec ±0.58% (77 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2024-08-17 09:15:15
croner          - OK    - 2024-08-17 09:15:15
cronosjs        - OK    - 2024-08-17 09:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-08-17 09:15:15

Benchmark (only OK)

cron            x 6,094 ops/sec ±0.66% (93 runs sampled)
croner          x 224,033 ops/sec ±0.89% (94 runs sampled)
cronosjs        x 47,683 ops/sec ±0.57% (93 runs sampled)
node-schedule   x 3,006 ops/sec ±0.66% (94 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2024-10-01 00:15:15
croner          - OK    - 2024-10-01 00:15:15
cronosjs        - OK    - 2024-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-10-01 00:15:15

Benchmark (only OK)

cron            x 5,466 ops/sec ±0.69% (91 runs sampled)
croner          x 187,716 ops/sec ±1.52% (92 runs sampled)
cronosjs        x 65,999 ops/sec ±1.34% (93 runs sampled)
node-schedule   x 2,703 ops/sec ±0.74% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2024-10-01 00:15:15
croner          - OK    - 2024-10-01 00:15:15
cronosjs        - OK    - 2024-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-10-01 00:15:15

Benchmark (only OK)

cron            x 5,472 ops/sec ±0.73% (94 runs sampled)
croner          x 146,580 ops/sec ±0.55% (94 runs sampled)
cronosjs        x 49,202 ops/sec ±0.45% (94 runs sampled)
node-schedule   x 2,680 ops/sec ±0.87% (89 runs sampled)

Fastest is croner
```

## Test summary

|    Library    | OK  | FAIL | % OK  |
| :-----------: | :-: | :--: | :---: |
|     cron      |  7  |  1   | 87.5% |
|    croner     |  8  |  0   | 100%  |
|   cronosjs    |  8  |  0   | 100%  |
|   node-cron   |  0  |  8   |  0%   |
| node-schedule |  8  |  0   | 100%  |
