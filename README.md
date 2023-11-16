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

> cron-comparison@1.3.11 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-11-16T10:34:13.761Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.6`
- [croner](https://github.com/hexagon/croner) `v7.0.5`
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

croner          x 175,256 ops/sec ±0.62% (94 runs sampled)
cronosjs        x 80,489 ops/sec ±0.73% (96 runs sampled)
node-schedule   x 586 ops/sec ±1.08% (92 runs sampled)

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

cron            x 7,570 ops/sec ±0.79% (95 runs sampled)
croner          x 182,329 ops/sec ±0.17% (94 runs sampled)
cronosjs        x 62,435 ops/sec ±0.49% (96 runs sampled)
node-schedule   x 3,682 ops/sec ±0.77% (95 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-11-16 12:00:00
croner          - OK    - 2023-11-16 12:00:00
cronosjs        - OK    - 2023-11-16 12:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-11-16 12:00:00

Benchmark (only OK)

cron            x 24,848 ops/sec ±0.42% (98 runs sampled)
croner          x 173,627 ops/sec ±1.41% (94 runs sampled)
cronosjs        x 37,277 ops/sec ±0.19% (98 runs sampled)
node-schedule   x 18,750 ops/sec ±0.51% (91 runs sampled)

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

cron            x 12,184 ops/sec ±0.52% (95 runs sampled)
croner          x 189,065 ops/sec ±0.16% (98 runs sampled)
cronosjs        x 62,481 ops/sec ±0.25% (97 runs sampled)
node-schedule   x 6,824 ops/sec ±0.81% (96 runs sampled)

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

cron            x 3,414 ops/sec ±0.66% (95 runs sampled)
croner          x 203,093 ops/sec ±0.24% (97 runs sampled)
cronosjs        x 75,658 ops/sec ±0.15% (94 runs sampled)
node-schedule   x 1,072 ops/sec ±0.66% (95 runs sampled)

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

cron            x 5,491 ops/sec ±1.08% (96 runs sampled)
croner          x 210,075 ops/sec ±0.19% (97 runs sampled)
cronosjs        x 45,561 ops/sec ±0.17% (98 runs sampled)
node-schedule   x 2,607 ops/sec ±0.64% (96 runs sampled)

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

cron            x 3,919 ops/sec ±1.08% (96 runs sampled)
croner          x 172,579 ops/sec ±0.38% (96 runs sampled)
cronosjs        x 61,343 ops/sec ±0.45% (99 runs sampled)
node-schedule   x 2,128 ops/sec ±0.73% (97 runs sampled)

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

cron            x 3,838 ops/sec ±1.08% (94 runs sampled)
croner          x 135,039 ops/sec ±0.12% (95 runs sampled)
cronosjs        x 46,853 ops/sec ±0.11% (99 runs sampled)
node-schedule   x 1,531 ops/sec ±0.66% (95 runs sampled)

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
