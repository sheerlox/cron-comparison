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

> cron-comparison@1.3.16 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-07-13T08:16:22.929Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.7`
- [croner](https://github.com/hexagon/croner) `v8.1.0`
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

croner          x 198,096 ops/sec ±0.54% (87 runs sampled)
cronosjs        x 79,333 ops/sec ±2.20% (92 runs sampled)
node-schedule   x 270 ops/sec ±0.79% (88 runs sampled)

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

cron            x 6,319 ops/sec ±1.00% (95 runs sampled)
croner          x 185,378 ops/sec ±0.10% (96 runs sampled)
cronosjs        x 63,110 ops/sec ±0.22% (97 runs sampled)
node-schedule   x 2,881 ops/sec ±0.72% (94 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2024-07-13 09:00:00
croner          - OK    - 2024-07-13 09:00:00
cronosjs        - OK    - 2024-07-13 09:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-07-13 09:00:00

Benchmark (only OK)

cron            x 28,979 ops/sec ±0.62% (95 runs sampled)
croner          x 183,690 ops/sec ±0.22% (94 runs sampled)
cronosjs        x 37,796 ops/sec ±0.24% (98 runs sampled)
node-schedule   x 23,576 ops/sec ±0.37% (96 runs sampled)

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

cron            x 10,287 ops/sec ±0.52% (97 runs sampled)
croner          x 199,346 ops/sec ±0.10% (96 runs sampled)
cronosjs        x 64,229 ops/sec ±0.25% (96 runs sampled)
node-schedule   x 3,377 ops/sec ±0.89% (94 runs sampled)

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

cron            x 762 ops/sec ±0.61% (94 runs sampled)
croner          x 106,484 ops/sec ±0.86% (97 runs sampled)
cronosjs        x 62,064 ops/sec ±0.18% (95 runs sampled)
node-schedule   x 89.49 ops/sec ±0.65% (77 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2024-07-13 09:15:15
croner          - OK    - 2024-07-13 09:15:15
cronosjs        - OK    - 2024-07-13 09:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-07-13 09:15:15

Benchmark (only OK)

cron            x 5,645 ops/sec ±0.77% (95 runs sampled)
croner          x 213,468 ops/sec ±0.91% (97 runs sampled)
cronosjs        x 45,783 ops/sec ±0.14% (97 runs sampled)
node-schedule   x 2,702 ops/sec ±0.52% (97 runs sampled)

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

cron            x 5,190 ops/sec ±0.70% (96 runs sampled)
croner          x 187,496 ops/sec ±0.15% (99 runs sampled)
cronosjs        x 63,525 ops/sec ±0.19% (98 runs sampled)
node-schedule   x 2,382 ops/sec ±0.56% (97 runs sampled)

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

cron            x 5,108 ops/sec ±0.61% (96 runs sampled)
croner          x 140,476 ops/sec ±1.32% (94 runs sampled)
cronosjs        x 47,457 ops/sec ±0.23% (98 runs sampled)
node-schedule   x 2,275 ops/sec ±0.96% (94 runs sampled)

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
