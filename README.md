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

> cron-comparison@1.3.9 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-11-02T22:04:38.876Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.6`
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

croner          x 120,722 ops/sec ±0.55% (90 runs sampled)
cronosjs        x 52,849 ops/sec ±6.41% (89 runs sampled)
node-schedule   x 355 ops/sec ±1.76% (89 runs sampled)

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

cron            x 5,646 ops/sec ±1.13% (91 runs sampled)
croner          x 124,258 ops/sec ±0.36% (97 runs sampled)
cronosjs        x 42,937 ops/sec ±4.93% (96 runs sampled)
node-schedule   x 2,704 ops/sec ±1.11% (93 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-11-03 00:00:00
croner          - OK    - 2023-11-03 00:00:00
cronosjs        - OK    - 2023-11-03 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-11-03 00:00:00

Benchmark (only OK)

cron            x 18,459 ops/sec ±1.01% (95 runs sampled)
croner          x 114,611 ops/sec ±0.12% (96 runs sampled)
cronosjs        x 25,503 ops/sec ±0.47% (94 runs sampled)
node-schedule   x 14,157 ops/sec ±0.82% (93 runs sampled)

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

cron            x 8,941 ops/sec ±0.91% (93 runs sampled)
croner          x 135,368 ops/sec ±0.36% (91 runs sampled)
cronosjs        x 43,950 ops/sec ±0.15% (95 runs sampled)
node-schedule   x 5,057 ops/sec ±0.96% (93 runs sampled)

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

cron            x 2,454 ops/sec ±0.99% (94 runs sampled)
croner          x 141,883 ops/sec ±0.20% (98 runs sampled)
cronosjs        x 52,661 ops/sec ±0.17% (93 runs sampled)
node-schedule   x 678 ops/sec ±0.99% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-11-03 00:15:15
croner          - OK    - 2023-11-03 00:15:15
cronosjs        - OK    - 2023-11-03 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-11-03 00:15:15

Benchmark (only OK)

cron            x 4,209 ops/sec ±1.04% (93 runs sampled)
croner          x 138,765 ops/sec ±0.12% (97 runs sampled)
cronosjs        x 31,064 ops/sec ±0.26% (98 runs sampled)
node-schedule   x 1,881 ops/sec ±0.96% (93 runs sampled)

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

cron            x 2,919 ops/sec ±1.04% (93 runs sampled)
croner          x 119,656 ops/sec ±0.19% (96 runs sampled)
cronosjs        x 43,570 ops/sec ±0.14% (96 runs sampled)
node-schedule   x 1,401 ops/sec ±0.81% (94 runs sampled)

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

cron            x 2,860 ops/sec ±1.03% (95 runs sampled)
croner          x 91,107 ops/sec ±0.14% (99 runs sampled)
cronosjs        x 32,310 ops/sec ±0.18% (97 runs sampled)
node-schedule   x 1,094 ops/sec ±0.89% (91 runs sampled)

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
