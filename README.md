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

> cron-comparison@1.3.7 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-25T18:42:29.523Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.4`
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

croner          x 123,599 ops/sec ±0.50% (95 runs sampled)
cronosjs        x 51,702 ops/sec ±4.91% (95 runs sampled)
node-schedule   x 356 ops/sec ±0.96% (89 runs sampled)

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

cron            x 5,288 ops/sec ±1.11% (95 runs sampled)
croner          x 126,125 ops/sec ±0.29% (97 runs sampled)
cronosjs        x 43,123 ops/sec ±0.12% (98 runs sampled)
node-schedule   x 2,406 ops/sec ±0.85% (93 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-25 18:45:00
croner          - OK    - 2023-10-25 18:45:00
cronosjs        - OK    - 2023-10-25 18:45:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-25 18:45:00

Benchmark (only OK)

cron            x 18,607 ops/sec ±0.67% (94 runs sampled)
croner          x 124,354 ops/sec ±0.09% (95 runs sampled)
cronosjs        x 26,203 ops/sec ±0.10% (98 runs sampled)
node-schedule   x 14,693 ops/sec ±0.70% (95 runs sampled)

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

cron            x 8,274 ops/sec ±0.85% (94 runs sampled)
croner          x 130,531 ops/sec ±0.12% (97 runs sampled)
cronosjs        x 42,711 ops/sec ±0.12% (96 runs sampled)
node-schedule   x 3,806 ops/sec ±0.91% (95 runs sampled)

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

cron            x 2,437 ops/sec ±0.75% (95 runs sampled)
croner          x 141,417 ops/sec ±0.39% (96 runs sampled)
cronosjs        x 50,868 ops/sec ±0.12% (96 runs sampled)
node-schedule   x 656 ops/sec ±0.77% (94 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-25 21:15:15
croner          - OK    - 2023-10-25 21:15:15
cronosjs        - OK    - 2023-10-25 21:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-25 21:15:15

Benchmark (only OK)

cron            x 2,703 ops/sec ±0.92% (96 runs sampled)
croner          x 130,287 ops/sec ±0.17% (99 runs sampled)
cronosjs        x 31,039 ops/sec ±0.38% (97 runs sampled)
node-schedule   x 1,320 ops/sec ±0.66% (94 runs sampled)

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

cron            x 3,354 ops/sec ±0.94% (94 runs sampled)
croner          x 127,865 ops/sec ±0.14% (95 runs sampled)
cronosjs        x 43,340 ops/sec ±0.11% (91 runs sampled)
node-schedule   x 1,985 ops/sec ±0.84% (94 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-29 00:15:15
croner          - OK    - 2023-10-29 00:15:15
cronosjs        - OK    - 2023-10-29 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-29 00:15:15

Benchmark (only OK)

cron            x 3,589 ops/sec ±0.83% (95 runs sampled)
croner          x 69,433 ops/sec ±0.13% (98 runs sampled)
cronosjs        x 32,943 ops/sec ±0.16% (97 runs sampled)
node-schedule   x 1,873 ops/sec ±0.73% (94 runs sampled)

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
