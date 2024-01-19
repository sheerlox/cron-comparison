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

> cron-comparison@1.3.12 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-01-19T13:32:50.718Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.6`
- [croner](https://github.com/hexagon/croner) `v8.0.0`
- [cronosjs](https://github.com/jaclarke/cronosjs) `v1.7.1`
- [node-cron](https://github.com/node-cron/node-cron) `v3.0.3`
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

croner          x 183,673 ops/sec ±0.63% (90 runs sampled)
cronosjs        x 85,000 ops/sec ±0.58% (92 runs sampled)
node-schedule   x 1,429 ops/sec ±1.32% (90 runs sampled)

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

cron            x 8,462 ops/sec ±0.67% (95 runs sampled)
croner          x 190,960 ops/sec ±0.53% (96 runs sampled)
cronosjs        x 67,042 ops/sec ±0.20% (97 runs sampled)
node-schedule   x 4,748 ops/sec ±0.78% (92 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2024-01-19 15:00:00
croner          - OK    - 2024-01-19 15:00:00
cronosjs        - OK    - 2024-01-19 15:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-01-19 15:00:00

Benchmark (only OK)

cron            x 24,095 ops/sec ±0.69% (96 runs sampled)
croner          x 179,778 ops/sec ±0.28% (96 runs sampled)
cronosjs        x 37,053 ops/sec ±0.15% (97 runs sampled)
node-schedule   x 18,180 ops/sec ±0.47% (95 runs sampled)

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

cron            x 14,762 ops/sec ±0.68% (94 runs sampled)
croner          x 197,854 ops/sec ±0.36% (96 runs sampled)
cronosjs        x 65,513 ops/sec ±0.31% (95 runs sampled)
node-schedule   x 10,666 ops/sec ±0.88% (96 runs sampled)

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

cron            x 3,533 ops/sec ±0.63% (97 runs sampled)
croner          x 212,031 ops/sec ±0.28% (98 runs sampled)
cronosjs        x 79,994 ops/sec ±0.09% (99 runs sampled)
node-schedule   x 2,609 ops/sec ±0.82% (95 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2024-01-19 15:15:15
croner          - OK    - 2024-01-19 15:15:15
cronosjs        - OK    - 2024-01-19 15:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-01-19 15:15:15

Benchmark (only OK)

cron            x 5,400 ops/sec ±0.81% (95 runs sampled)
croner          x 212,853 ops/sec ±0.20% (98 runs sampled)
cronosjs        x 45,274 ops/sec ±0.13% (95 runs sampled)
node-schedule   x 2,567 ops/sec ±0.59% (95 runs sampled)

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

cron            x 4,100 ops/sec ±0.70% (92 runs sampled)
croner          x 179,860 ops/sec ±0.30% (99 runs sampled)
cronosjs        x 63,872 ops/sec ±0.16% (97 runs sampled)
node-schedule   x 2,295 ops/sec ±0.60% (96 runs sampled)

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

cron            x 4,021 ops/sec ±0.71% (96 runs sampled)
croner          x 140,212 ops/sec ±0.10% (99 runs sampled)
cronosjs        x 48,170 ops/sec ±0.15% (97 runs sampled)
node-schedule   x 1,627 ops/sec ±0.73% (95 runs sampled)

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
