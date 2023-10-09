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

> cron-comparison@1.3.1 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-09T13:00:35.300Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.0`
- [croner](https://github.com/hexagon/croner) `v7.0.2`
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

croner          x 101,978 ops/sec ±1.68% (96 runs sampled)
cronosjs        x 51,584 ops/sec ±0.92% (95 runs sampled)
node-schedule   x 281 ops/sec ±1.44% (89 runs sampled)

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

cron            x 4,801 ops/sec ±0.96% (94 runs sampled)
croner          x 107,852 ops/sec ±0.55% (93 runs sampled)
cronosjs        x 41,815 ops/sec ±2.87% (96 runs sampled)
node-schedule   x 1,942 ops/sec ±1.11% (92 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-09 15:00:00
croner          - OK    - 2023-10-09 15:00:00
cronosjs        - OK    - 2023-10-09 15:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-09 15:00:00

Benchmark (only OK)

cron            x 17,016 ops/sec ±0.77% (95 runs sampled)
croner          x 102,561 ops/sec ±0.13% (98 runs sampled)
cronosjs        x 25,349 ops/sec ±0.15% (95 runs sampled)
node-schedule   x 12,714 ops/sec ±1.01% (93 runs sampled)

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

cron            x 7,385 ops/sec ±0.99% (92 runs sampled)
croner          x 121,359 ops/sec ±0.13% (94 runs sampled)
cronosjs        x 42,945 ops/sec ±0.31% (91 runs sampled)
node-schedule   x 4,073 ops/sec ±0.90% (92 runs sampled)

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

cron            x 2,189 ops/sec ±0.94% (94 runs sampled)
croner          x 120,059 ops/sec ±0.61% (94 runs sampled)
cronosjs        x 50,216 ops/sec ±0.26% (94 runs sampled)
node-schedule   x 519 ops/sec ±1.41% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-09 15:15:15
croner          - OK    - 2023-10-09 15:15:15
cronosjs        - OK    - 2023-10-09 15:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-09 15:15:15

Benchmark (only OK)

cron            x 3,850 ops/sec ±1.11% (93 runs sampled)
croner          x 127,228 ops/sec ±0.21% (98 runs sampled)
cronosjs        x 31,020 ops/sec ±0.13% (95 runs sampled)
node-schedule   x 1,679 ops/sec ±1.17% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2023-10-11 00:15:15
croner          - OK    - 2023-10-11 00:15:15
cronosjs        - OK    - 2023-10-11 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-11 00:15:15

Benchmark (only OK)

cron            x 3,767 ops/sec ±1.16% (90 runs sampled)
croner          x 111,700 ops/sec ±0.46% (96 runs sampled)
cronosjs        x 44,202 ops/sec ±0.14% (92 runs sampled)
node-schedule   x 1,942 ops/sec ±1.15% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-09 15:15:15
croner          - OK    - 2023-10-09 15:15:15
cronosjs        - OK    - 2023-10-09 15:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-09 15:15:15

Benchmark (only OK)

cron            x 3,838 ops/sec ±1.19% (93 runs sampled)
croner          x 77,311 ops/sec ±0.20% (95 runs sampled)
cronosjs        x 31,681 ops/sec ±0.12% (97 runs sampled)
node-schedule   x 1,727 ops/sec ±1.02% (91 runs sampled)

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
