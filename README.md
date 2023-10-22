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

> cron-comparison@1.3.4 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-22T12:39:52.660Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.2`
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

croner          x 103,626 ops/sec ±0.52% (91 runs sampled)
cronosjs        x 53,853 ops/sec ±0.46% (94 runs sampled)
node-schedule   x 306 ops/sec ±1.56% (88 runs sampled)

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

cron            x 4,755 ops/sec ±1.77% (92 runs sampled)
croner          x 114,890 ops/sec ±0.10% (93 runs sampled)
cronosjs        x 42,935 ops/sec ±3.40% (92 runs sampled)
node-schedule   x 1,945 ops/sec ±0.96% (92 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-22 12:42:00
croner          - OK    - 2023-10-22 12:42:00
cronosjs        - OK    - 2023-10-22 12:42:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-22 12:42:00

Benchmark (only OK)

cron            x 16,623 ops/sec ±1.61% (93 runs sampled)
croner          x 102,928 ops/sec ±0.10% (94 runs sampled)
cronosjs        x 25,857 ops/sec ±0.10% (92 runs sampled)
node-schedule   x 12,928 ops/sec ±1.02% (93 runs sampled)

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

cron            x 7,256 ops/sec ±1.00% (93 runs sampled)
croner          x 121,386 ops/sec ±0.30% (95 runs sampled)
cronosjs        x 44,135 ops/sec ±0.14% (91 runs sampled)
node-schedule   x 3,919 ops/sec ±0.91% (94 runs sampled)

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

cron            x 2,169 ops/sec ±0.85% (95 runs sampled)
croner          x 120,214 ops/sec ±0.50% (96 runs sampled)
cronosjs        x 52,607 ops/sec ±0.14% (95 runs sampled)
node-schedule   x 578 ops/sec ±0.94% (94 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-22 15:15:15
croner          - OK    - 2023-10-22 15:15:15
cronosjs        - OK    - 2023-10-22 15:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-22 15:15:15

Benchmark (only OK)

cron            x 2,429 ops/sec ±1.07% (91 runs sampled)
croner          x 106,074 ops/sec ±0.10% (97 runs sampled)
cronosjs        x 31,320 ops/sec ±0.21% (92 runs sampled)
node-schedule   x 1,108 ops/sec ±0.74% (94 runs sampled)

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

cron            x 2,793 ops/sec ±1.01% (93 runs sampled)
croner          x 108,377 ops/sec ±0.26% (93 runs sampled)
cronosjs        x 45,298 ops/sec ±0.11% (95 runs sampled)
node-schedule   x 1,642 ops/sec ±0.93% (94 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-22 15:15:15
croner          - OK    - 2023-10-22 15:15:15
cronosjs        - OK    - 2023-10-22 15:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-22 15:15:15

Benchmark (only OK)

cron            x 2,463 ops/sec ±1.26% (92 runs sampled)
croner          x 47,721 ops/sec ±0.12% (95 runs sampled)
cronosjs        x 31,826 ops/sec ±0.27% (90 runs sampled)
node-schedule   x 1,144 ops/sec ±0.86% (92 runs sampled)

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
