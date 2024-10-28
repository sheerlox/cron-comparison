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

> cron-comparison@1.3.18 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-10-28T16:41:39.459Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.7`
- [croner](https://github.com/hexagon/croner) `v8.1.2`
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

croner          x 204,473 ops/sec ±0.59% (95 runs sampled)
cronosjs        x 79,709 ops/sec ±0.43% (90 runs sampled)
node-schedule   x 500 ops/sec ±1.69% (90 runs sampled)

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

cron            x 7,484 ops/sec ±0.95% (91 runs sampled)
croner          x 188,815 ops/sec ±0.73% (97 runs sampled)
cronosjs        x 59,190 ops/sec ±0.58% (97 runs sampled)
node-schedule   x 3,598 ops/sec ±0.80% (92 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2024-10-28 18:00:00
croner          - OK    - 2024-10-28 18:00:00
cronosjs        - OK    - 2024-10-28 18:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-10-28 18:00:00

Benchmark (only OK)

cron            x 24,898 ops/sec ±0.48% (96 runs sampled)
croner          x 181,029 ops/sec ±0.26% (99 runs sampled)
cronosjs        x 37,857 ops/sec ±0.15% (95 runs sampled)
node-schedule   x 18,317 ops/sec ±0.50% (93 runs sampled)

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

cron            x 13,783 ops/sec ±0.60% (96 runs sampled)
croner          x 201,798 ops/sec ±0.15% (98 runs sampled)
cronosjs        x 63,765 ops/sec ±0.13% (97 runs sampled)
node-schedule   x 6,485 ops/sec ±0.83% (97 runs sampled)

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

cron            x 783 ops/sec ±0.59% (94 runs sampled)
croner          x 108,824 ops/sec ±0.22% (98 runs sampled)
cronosjs        x 61,860 ops/sec ±0.13% (98 runs sampled)
node-schedule   x 97.29 ops/sec ±0.55% (83 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2024-10-28 18:15:15
croner          - OK    - 2024-10-28 18:15:15
cronosjs        - OK    - 2024-10-28 18:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-10-28 18:15:15

Benchmark (only OK)

cron            x 5,431 ops/sec ±0.75% (96 runs sampled)
croner          x 215,540 ops/sec ±0.16% (98 runs sampled)
cronosjs        x 46,247 ops/sec ±0.15% (99 runs sampled)
node-schedule   x 2,602 ops/sec ±0.58% (95 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2024-10-31 00:15:15
croner          - OK    - 2024-10-31 00:15:15
cronosjs        - OK    - 2024-10-31 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-10-31 00:15:15

Benchmark (only OK)

cron            x 5,112 ops/sec ±0.66% (97 runs sampled)
croner          x 186,504 ops/sec ±0.24% (96 runs sampled)
cronosjs        x 64,019 ops/sec ±1.24% (96 runs sampled)
node-schedule   x 2,878 ops/sec ±0.60% (95 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2024-10-28 18:15:15
croner          - OK    - 2024-10-28 18:15:15
cronosjs        - OK    - 2024-10-28 18:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-10-28 18:15:15

Benchmark (only OK)

cron            x 5,430 ops/sec ±0.69% (96 runs sampled)
croner          x 98,295 ops/sec ±0.20% (98 runs sampled)
cronosjs        x 47,827 ops/sec ±0.33% (98 runs sampled)
node-schedule   x 2,589 ops/sec ±2.02% (96 runs sampled)

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
