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

> cron-comparison@1.3.8 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-29T21:10:30.028Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.5`
- [croner](https://github.com/hexagon/croner) `v7.0.4`
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

croner          x 113,293 ops/sec ±0.40% (95 runs sampled)
cronosjs        x 53,121 ops/sec ±8.53% (93 runs sampled)
node-schedule   x 345 ops/sec ±3.58% (88 runs sampled)

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

cron            x 5,385 ops/sec ±1.73% (92 runs sampled)
croner          x 125,713 ops/sec ±0.31% (97 runs sampled)
cronosjs        x 43,859 ops/sec ±4.65% (96 runs sampled)
node-schedule   x 2,413 ops/sec ±1.35% (91 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-29 21:12:00
croner          - OK    - 2023-10-29 21:12:00
cronosjs        - OK    - 2023-10-29 21:12:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-29 21:12:00

Benchmark (only OK)

cron            x 21,624 ops/sec ±0.84% (94 runs sampled)
croner          x 113,857 ops/sec ±0.19% (93 runs sampled)
cronosjs        x 25,438 ops/sec ±0.15% (95 runs sampled)
node-schedule   x 17,830 ops/sec ±0.75% (93 runs sampled)

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

cron            x 8,279 ops/sec ±1.16% (93 runs sampled)
croner          x 132,550 ops/sec ±0.18% (92 runs sampled)
cronosjs        x 44,063 ops/sec ±0.21% (94 runs sampled)
node-schedule   x 4,553 ops/sec ±1.00% (94 runs sampled)

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

cron            x 2,465 ops/sec ±0.83% (94 runs sampled)
croner          x 136,426 ops/sec ±0.41% (94 runs sampled)
cronosjs        x 52,894 ops/sec ±0.63% (95 runs sampled)
node-schedule   x 669 ops/sec ±1.17% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-29 21:15:15
croner          - OK    - 2023-10-29 21:15:15
cronosjs        - OK    - 2023-10-29 21:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-29 21:15:15

Benchmark (only OK)

cron            x 7,861 ops/sec ±0.98% (93 runs sampled)
croner          x 154,613 ops/sec ±0.10% (97 runs sampled)
cronosjs        x 31,364 ops/sec ±0.44% (95 runs sampled)
node-schedule   x 3,180 ops/sec ±0.74% (91 runs sampled)

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

cron            x 4,253 ops/sec ±1.11% (94 runs sampled)
croner          x 123,807 ops/sec ±0.47% (95 runs sampled)
cronosjs        x 44,861 ops/sec ±0.34% (97 runs sampled)
node-schedule   x 2,169 ops/sec ±0.97% (95 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-29 21:15:15
croner          - OK    - 2023-10-29 21:15:15
cronosjs        - OK    - 2023-10-29 21:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-29 21:15:15

Benchmark (only OK)

cron            x 8,283 ops/sec ±1.13% (87 runs sampled)
croner          x 69,961 ops/sec ±0.18% (95 runs sampled)
cronosjs        x 33,124 ops/sec ±0.13% (93 runs sampled)
node-schedule   x 3,430 ops/sec ±0.80% (94 runs sampled)

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
