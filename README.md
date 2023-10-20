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

> cron-comparison@1.3.3 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-20T08:16:58.278Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.1`
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

croner          x 97,275 ops/sec ±1.18% (85 runs sampled)
cronosjs        x 52,134 ops/sec ±1.41% (89 runs sampled)
node-schedule   x 268 ops/sec ±1.71% (80 runs sampled)

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

cron            x 4,573 ops/sec ±1.73% (84 runs sampled)
croner          x 101,913 ops/sec ±0.89% (87 runs sampled)
cronosjs        x 36,607 ops/sec ±3.91% (84 runs sampled)
node-schedule   x 2,230 ops/sec ±2.25% (86 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-20 09:00:00
croner          - OK    - 2023-10-20 09:00:00
cronosjs        - OK    - 2023-10-20 09:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-20 09:00:00

Benchmark (only OK)

cron            x 20,740 ops/sec ±1.42% (91 runs sampled)
croner          x 106,826 ops/sec ±1.04% (92 runs sampled)
cronosjs        x 25,392 ops/sec ±0.74% (91 runs sampled)
node-schedule   x 16,513 ops/sec ±1.55% (88 runs sampled)

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

cron            x 7,669 ops/sec ±1.40% (89 runs sampled)
croner          x 124,969 ops/sec ±1.07% (92 runs sampled)
cronosjs        x 43,367 ops/sec ±1.09% (89 runs sampled)
node-schedule   x 3,691 ops/sec ±1.17% (88 runs sampled)

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

cron            x 2,245 ops/sec ±1.56% (89 runs sampled)
croner          x 123,144 ops/sec ±0.98% (91 runs sampled)
cronosjs        x 50,174 ops/sec ±0.92% (86 runs sampled)
node-schedule   x 557 ops/sec ±1.32% (86 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-20 09:15:15
croner          - OK    - 2023-10-20 09:15:15
cronosjs        - OK    - 2023-10-20 09:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-20 09:15:15

Benchmark (only OK)

cron            x 3,751 ops/sec ±1.50% (87 runs sampled)
croner          x 120,144 ops/sec ±0.85% (88 runs sampled)
cronosjs        x 28,126 ops/sec ±0.82% (87 runs sampled)
node-schedule   x 1,654 ops/sec ±1.48% (86 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2023-10-21 00:15:15
croner          - OK    - 2023-10-21 00:15:15
cronosjs        - OK    - 2023-10-21 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-21 00:15:15

Benchmark (only OK)

cron            x 3,807 ops/sec ±1.93% (84 runs sampled)
croner          x 109,940 ops/sec ±1.26% (85 runs sampled)
cronosjs        x 43,067 ops/sec ±1.30% (87 runs sampled)
node-schedule   x 1,967 ops/sec ±1.51% (87 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-22 00:15:15
croner          - OK    - 2023-10-22 00:15:15
cronosjs        - OK    - 2023-10-22 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-22 00:15:15

Benchmark (only OK)

cron            x 3,773 ops/sec ±1.76% (86 runs sampled)
croner          x 63,335 ops/sec ±0.95% (88 runs sampled)
cronosjs        x 31,221 ops/sec ±0.86% (91 runs sampled)
node-schedule   x 1,743 ops/sec ±1.38% (88 runs sampled)

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
