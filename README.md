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

> cron-comparison@1.3.19 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-10-28T16:56:41.594Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.7`
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

croner          x 147,722 ops/sec ±0.50% (95 runs sampled)
cronosjs        x 78,576 ops/sec ±0.47% (91 runs sampled)
node-schedule   x 488 ops/sec ±1.84% (91 runs sampled)

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

cron            x 7,517 ops/sec ±0.95% (92 runs sampled)
croner          x 136,001 ops/sec ±0.24% (98 runs sampled)
cronosjs        x 60,974 ops/sec ±0.15% (99 runs sampled)
node-schedule   x 3,583 ops/sec ±0.79% (93 runs sampled)

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

cron            x 24,997 ops/sec ±0.47% (95 runs sampled)
croner          x 135,103 ops/sec ±0.24% (97 runs sampled)
cronosjs        x 37,077 ops/sec ±0.80% (96 runs sampled)
node-schedule   x 18,281 ops/sec ±0.50% (95 runs sampled)

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

cron            x 13,820 ops/sec ±0.63% (95 runs sampled)
croner          x 145,561 ops/sec ±0.14% (98 runs sampled)
cronosjs        x 61,947 ops/sec ±0.19% (97 runs sampled)
node-schedule   x 6,405 ops/sec ±0.74% (95 runs sampled)

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

cron            x 776 ops/sec ±0.69% (95 runs sampled)
croner          x 90,255 ops/sec ±0.29% (100 runs sampled)
cronosjs        x 60,508 ops/sec ±0.25% (99 runs sampled)
node-schedule   x 96.11 ops/sec ±0.71% (82 runs sampled)

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

cron            x 5,475 ops/sec ±0.67% (96 runs sampled)
croner          x 153,631 ops/sec ±0.63% (98 runs sampled)
cronosjs        x 44,865 ops/sec ±0.46% (93 runs sampled)
node-schedule   x 2,580 ops/sec ±0.55% (96 runs sampled)

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

cron            x 5,125 ops/sec ±0.61% (94 runs sampled)
croner          x 137,280 ops/sec ±0.49% (96 runs sampled)
cronosjs        x 62,679 ops/sec ±0.25% (99 runs sampled)
node-schedule   x 2,847 ops/sec ±0.65% (95 runs sampled)

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

cron            x 5,428 ops/sec ±0.78% (95 runs sampled)
croner          x 81,671 ops/sec ±0.24% (99 runs sampled)
cronosjs        x 47,655 ops/sec ±0.15% (97 runs sampled)
node-schedule   x 2,591 ops/sec ±0.59% (96 runs sampled)

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
