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

> cron-comparison@1.3.10 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-11-16T09:21:20.726Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.6`
- [croner](https://github.com/hexagon/croner) `v7.0.5`
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

croner          x 176,490 ops/sec ±0.42% (92 runs sampled)
cronosjs        x 81,226 ops/sec ±0.49% (91 runs sampled)
node-schedule   x 588 ops/sec ±1.24% (91 runs sampled)

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

cron            x 7,675 ops/sec ±0.67% (95 runs sampled)
croner          x 183,862 ops/sec ±0.64% (99 runs sampled)
cronosjs        x 63,603 ops/sec ±1.03% (99 runs sampled)
node-schedule   x 3,731 ops/sec ±0.79% (95 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-11-16 09:24:00
croner          - OK    - 2023-11-16 09:24:00
cronosjs        - OK    - 2023-11-16 09:24:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-11-16 09:24:00

Benchmark (only OK)

cron            x 24,804 ops/sec ±0.96% (97 runs sampled)
croner          x 177,989 ops/sec ±0.23% (97 runs sampled)
cronosjs        x 37,595 ops/sec ±0.24% (99 runs sampled)
node-schedule   x 18,388 ops/sec ±1.00% (93 runs sampled)

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

cron            x 12,261 ops/sec ±0.66% (96 runs sampled)
croner          x 190,095 ops/sec ±0.24% (98 runs sampled)
cronosjs        x 63,348 ops/sec ±1.64% (95 runs sampled)
node-schedule   x 6,911 ops/sec ±0.77% (94 runs sampled)

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

cron            x 3,432 ops/sec ±0.65% (96 runs sampled)
croner          x 203,898 ops/sec ±0.34% (96 runs sampled)
cronosjs        x 77,773 ops/sec ±0.09% (98 runs sampled)
node-schedule   x 1,088 ops/sec ±0.66% (96 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-11-16 12:15:15
croner          - OK    - 2023-11-16 12:15:15
cronosjs        - OK    - 2023-11-16 12:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-11-16 12:15:15

Benchmark (only OK)

cron            x 2,542 ops/sec ±0.80% (96 runs sampled)
croner          x 171,252 ops/sec ±0.13% (99 runs sampled)
cronosjs        x 45,390 ops/sec ±0.33% (96 runs sampled)
node-schedule   x 1,282 ops/sec ±0.58% (96 runs sampled)

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

cron            x 3,959 ops/sec ±0.76% (96 runs sampled)
croner          x 171,485 ops/sec ±0.34% (100 runs sampled)
cronosjs        x 62,273 ops/sec ±0.42% (99 runs sampled)
node-schedule   x 2,146 ops/sec ±0.64% (96 runs sampled)

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

cron            x 3,911 ops/sec ±0.62% (96 runs sampled)
croner          x 136,185 ops/sec ±0.17% (97 runs sampled)
cronosjs        x 47,185 ops/sec ±0.24% (99 runs sampled)
node-schedule   x 1,531 ops/sec ±0.71% (95 runs sampled)

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
