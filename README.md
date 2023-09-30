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

> cron-comparison@1.2.3 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-09-30T01:36:37.815Z

Tested libraries:

- [cron](https://github.com/kelektiv/node-cron) `v3.0.0`
- [croner](https://github.com/hexagon/croner) `v7.0.2`
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

croner          x 79,240 ops/sec ±0.92% (94 runs sampled)
cronosjs        x 39,760 ops/sec ±6.81% (92 runs sampled)
node-schedule   x 222 ops/sec ±1.19% (86 runs sampled)

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

cron            x 3,714 ops/sec ±1.07% (91 runs sampled)
croner          x 89,215 ops/sec ±0.46% (96 runs sampled)
cronosjs        x 35,233 ops/sec ±3.53% (90 runs sampled)
node-schedule   x 1,683 ops/sec ±1.64% (88 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 03:00:00
croner          - OK    - 2023-09-30 03:00:00
cronosjs        - OK    - 2023-09-30 03:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 03:00:00

Benchmark (only OK)

cron            x 14,084 ops/sec ±0.91% (90 runs sampled)
croner          x 85,733 ops/sec ±0.10% (96 runs sampled)
cronosjs        x 20,892 ops/sec ±0.21% (92 runs sampled)
node-schedule   x 10,573 ops/sec ±0.88% (91 runs sampled)

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

cron            x 5,434 ops/sec ±1.28% (92 runs sampled)
croner          x 98,299 ops/sec ±0.59% (94 runs sampled)
cronosjs        x 35,208 ops/sec ±0.24% (91 runs sampled)
node-schedule   x 3,087 ops/sec ±1.22% (92 runs sampled)

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

cron            x 1,716 ops/sec ±1.32% (92 runs sampled)
croner          x 97,551 ops/sec ±0.14% (95 runs sampled)
cronosjs        x 40,958 ops/sec ±0.29% (93 runs sampled)
node-schedule   x 417 ops/sec ±0.95% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-09-30 03:15:15
croner          - OK    - 2023-09-30 03:15:15
cronosjs        - OK    - 2023-09-30 03:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-09-30 03:15:15

Benchmark (only OK)

cron            x 3,200 ops/sec ±1.28% (91 runs sampled)
croner          x 105,474 ops/sec ±0.17% (94 runs sampled)
cronosjs        x 25,253 ops/sec ±0.10% (98 runs sampled)
node-schedule   x 1,383 ops/sec ±0.95% (92 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2023-10-01 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

cron            x 3,351 ops/sec ±1.08% (93 runs sampled)
croner          x 93,426 ops/sec ±0.14% (92 runs sampled)
cronosjs        x 35,921 ops/sec ±0.32% (92 runs sampled)
node-schedule   x 1,672 ops/sec ±1.14% (91 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-01 00:15:15
croner          - OK    - 2023-10-01 00:15:15
cronosjs        - OK    - 2023-10-01 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-01 00:15:15

Benchmark (only OK)

cron            x 3,250 ops/sec ±1.33% (91 runs sampled)
croner          x 72,207 ops/sec ±0.66% (94 runs sampled)
cronosjs        x 25,904 ops/sec ±0.29% (94 runs sampled)
node-schedule   x 1,508 ops/sec ±1.22% (92 runs sampled)

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
