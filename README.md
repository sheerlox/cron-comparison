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

> cron-comparison@1.3.20 benchmark
> node --no-warnings src/benchmark.js

Testing package cron
Testing package croner
Testing package cronosjs
Testing package node-cron
Testing package node-schedule
OK
Tests performed at 2025-01-09T01:23:16.704Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.3.2`
- [croner](https://github.com/hexagon/croner) `v9.0.0`
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

croner          x 164,485 ops/sec ±0.62% (95 runs sampled)
cronosjs        x 92,946 ops/sec ±0.24% (97 runs sampled)
node-schedule   x 2,054 ops/sec ±1.08% (92 runs sampled)

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

cron            x 15,905 ops/sec ±0.43% (98 runs sampled)
croner          x 156,450 ops/sec ±0.29% (96 runs sampled)
cronosjs        x 68,221 ops/sec ±0.23% (97 runs sampled)
node-schedule   x 9,133 ops/sec ±0.62% (98 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2025-01-09 03:00:00
croner          - OK    - 2025-01-09 03:00:00
cronosjs        - OK    - 2025-01-09 03:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2025-01-09 03:00:00

Benchmark (only OK)

cron            x 36,365 ops/sec ±0.47% (96 runs sampled)
croner          x 145,484 ops/sec ±0.13% (97 runs sampled)
cronosjs        x 40,575 ops/sec ±0.63% (98 runs sampled)
node-schedule   x 24,557 ops/sec ±0.84% (95 runs sampled)

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

cron            x 31,651 ops/sec ±0.35% (99 runs sampled)
croner          x 166,229 ops/sec ±0.33% (95 runs sampled)
cronosjs        x 70,332 ops/sec ±0.17% (96 runs sampled)
node-schedule   x 19,180 ops/sec ±0.41% (94 runs sampled)

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

cron            x 1,309 ops/sec ±0.16% (96 runs sampled)
croner          x 97,983 ops/sec ±0.23% (96 runs sampled)
cronosjs        x 66,184 ops/sec ±0.16% (96 runs sampled)
node-schedule   x 166 ops/sec ±0.21% (85 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2025-01-09 03:15:15
croner          - OK    - 2025-01-09 03:15:15
cronosjs        - OK    - 2025-01-09 03:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2025-01-09 03:15:15

Benchmark (only OK)

cron            x 10,112 ops/sec ±0.59% (99 runs sampled)
croner          x 163,884 ops/sec ±0.30% (96 runs sampled)
cronosjs        x 49,396 ops/sec ±0.22% (97 runs sampled)
node-schedule   x 3,879 ops/sec ±0.50% (96 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2025-10-01 00:15:15
croner          - OK    - 2025-10-01 00:15:15
cronosjs        - OK    - 2025-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2025-10-01 00:15:15

Benchmark (only OK)

cron            x 7,581 ops/sec ±0.22% (98 runs sampled)
croner          x 149,454 ops/sec ±0.15% (99 runs sampled)
cronosjs        x 69,077 ops/sec ±0.35% (96 runs sampled)
node-schedule   x 3,700 ops/sec ±0.22% (97 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2025-10-05 00:15:15
croner          - OK    - 2025-10-05 00:15:15
cronosjs        - OK    - 2025-10-05 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2025-10-05 00:15:15

Benchmark (only OK)

cron            x 6,331 ops/sec ±0.50% (99 runs sampled)
croner          x 110,894 ops/sec ±1.03% (96 runs sampled)
cronosjs        x 52,480 ops/sec ±0.24% (96 runs sampled)
node-schedule   x 2,521 ops/sec ±0.41% (96 runs sampled)

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
