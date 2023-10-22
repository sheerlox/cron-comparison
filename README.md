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

> cron-comparison@1.3.5 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-22T21:35:55.011Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.3`
- [croner](https://github.com/hexagon/croner) `v7.0.3`
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

croner          x 101,189 ops/sec ±0.52% (93 runs sampled)
cronosjs        x 50,248 ops/sec ±5.25% (90 runs sampled)
node-schedule   x 289 ops/sec ±2.74% (87 runs sampled)

Fastest is croner
```

#### Pattern `1 2 3 4 5 6`

```
Tests

cron            - OK    - 2024-05-04 03:02:01
croner          - OK    - 2024-05-04 03:02:01
cronosjs        - OK    - 2024-05-04 03:02:01
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-05-04 03:02:01

Benchmark (only OK)

cron            x 4,642 ops/sec ±1.72% (92 runs sampled)
croner          x 114,057 ops/sec ±0.31% (95 runs sampled)
cronosjs        x 42,068 ops/sec ±2.63% (91 runs sampled)
node-schedule   x 1,899 ops/sec ±1.08% (93 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-22 21:36:36
croner          - OK    - 2023-10-22 21:36:36
cronosjs        - OK    - 2023-10-22 21:36:36
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-22 21:36:36

Benchmark (only OK)

cron            x 21,287 ops/sec ±1.97% (84 runs sampled)
croner          x 103,007 ops/sec ±0.25% (94 runs sampled)
cronosjs        x 24,070 ops/sec ±0.23% (94 runs sampled)
node-schedule   x 12,624 ops/sec ±3.98% (78 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 1`

```
Tests

cron            - OK    - 2024-02-05 00:00:00
croner          - OK    - 2024-02-05 00:00:00
cronosjs        - OK    - 2024-02-05 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-05 00:00:00

Benchmark (only OK)

cron            x 7,245 ops/sec ±0.87% (93 runs sampled)
croner          x 120,954 ops/sec ±0.15% (96 runs sampled)
cronosjs        x 41,051 ops/sec ±3.18% (96 runs sampled)
node-schedule   x 3,802 ops/sec ±1.04% (93 runs sampled)

Fastest is croner
```

#### Pattern `0 0 0 29 2 *`

```
Tests

cron            - OK    - 2024-02-29 00:00:00
croner          - OK    - 2024-02-29 00:00:00
cronosjs        - OK    - 2024-02-29 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-02-29 00:00:00

Benchmark (only OK)

cron            x 2,149 ops/sec ±0.86% (94 runs sampled)
croner          x 119,177 ops/sec ±0.19% (97 runs sampled)
cronosjs        x 50,245 ops/sec ±0.14% (93 runs sampled)
node-schedule   x 564 ops/sec ±1.13% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-23 00:15:15
croner          - OK    - 2023-10-23 00:15:15
cronosjs        - OK    - 2023-10-23 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-23 00:15:15

Benchmark (only OK)

cron            x 2,204 ops/sec ±1.09% (91 runs sampled)
croner          x 98,403 ops/sec ±0.49% (95 runs sampled)
cronosjs        x 29,516 ops/sec ±0.12% (97 runs sampled)
node-schedule   x 1,023 ops/sec ±0.97% (92 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2023-10-31 00:15:15
croner          - OK    - 2023-10-31 00:15:15
cronosjs        - OK    - 2023-10-31 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-31 00:15:15

Benchmark (only OK)

cron            x 2,721 ops/sec ±1.19% (90 runs sampled)
croner          x 106,421 ops/sec ±0.14% (98 runs sampled)
cronosjs        x 43,101 ops/sec ±0.17% (90 runs sampled)
node-schedule   x 1,623 ops/sec ±0.92% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-23 00:15:15
croner          - OK    - 2023-10-23 00:15:15
cronosjs        - OK    - 2023-10-23 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-23 00:15:15

Benchmark (only OK)

cron            x 2,230 ops/sec ±1.15% (92 runs sampled)
croner          x 38,028 ops/sec ±0.40% (91 runs sampled)
cronosjs        x 30,700 ops/sec ±0.19% (97 runs sampled)
node-schedule   x 1,054 ops/sec ±0.92% (92 runs sampled)

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
