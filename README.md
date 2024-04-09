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

> cron-comparison@1.3.14 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-04-09T16:52:26.649Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.7`
- [croner](https://github.com/hexagon/croner) `v8.0.1`
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

croner          x 185,737 ops/sec ±0.41% (93 runs sampled)
cronosjs        x 77,631 ops/sec ±0.36% (93 runs sampled)
node-schedule   x 195 ops/sec ±1.33% (82 runs sampled)

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

cron            x 10,819 ops/sec ±0.75% (95 runs sampled)
croner          x 182,558 ops/sec ±0.50% (95 runs sampled)
cronosjs        x 63,203 ops/sec ±0.19% (95 runs sampled)
node-schedule   x 6,446 ops/sec ±1.54% (93 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2024-04-09 18:00:00
croner          - OK    - 2024-04-09 18:00:00
cronosjs        - OK    - 2024-04-09 18:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-04-09 18:00:00

Benchmark (only OK)

cron            x 24,262 ops/sec ±0.53% (95 runs sampled)
croner          x 172,272 ops/sec ±0.59% (96 runs sampled)
cronosjs        x 36,643 ops/sec ±0.24% (98 runs sampled)
node-schedule   x 18,389 ops/sec ±0.51% (93 runs sampled)

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

cron            x 8,250 ops/sec ±0.64% (96 runs sampled)
croner          x 184,868 ops/sec ±0.14% (97 runs sampled)
cronosjs        x 62,535 ops/sec ±0.23% (95 runs sampled)
node-schedule   x 2,390 ops/sec ±0.75% (95 runs sampled)

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

cron            x 752 ops/sec ±0.58% (94 runs sampled)
croner          x 102,466 ops/sec ±0.48% (96 runs sampled)
cronosjs        x 59,235 ops/sec ±0.15% (97 runs sampled)
node-schedule   x 83.39 ops/sec ±0.66% (72 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2024-04-09 18:15:15
croner          - OK    - 2024-04-09 18:15:15
cronosjs        - OK    - 2024-04-09 18:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-04-09 18:15:15

Benchmark (only OK)

cron            x 5,422 ops/sec ±0.75% (96 runs sampled)
croner          x 203,828 ops/sec ±0.19% (95 runs sampled)
cronosjs        x 44,587 ops/sec ±0.16% (96 runs sampled)
node-schedule   x 2,655 ops/sec ±0.55% (97 runs sampled)

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

cron            x 4,610 ops/sec ±0.58% (97 runs sampled)
croner          x 173,137 ops/sec ±0.15% (99 runs sampled)
cronosjs        x 61,308 ops/sec ±0.24% (95 runs sampled)
node-schedule   x 2,546 ops/sec ±0.62% (97 runs sampled)

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

cron            x 4,544 ops/sec ±0.66% (96 runs sampled)
croner          x 133,048 ops/sec ±0.12% (97 runs sampled)
cronosjs        x 45,514 ops/sec ±0.23% (96 runs sampled)
node-schedule   x 1,984 ops/sec ±2.11% (94 runs sampled)

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
