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

> cron-comparison@1.3.2 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-12T23:38:10.742Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.1`
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

croner          x 102,660 ops/sec ±0.51% (93 runs sampled)
cronosjs        x 45,093 ops/sec ±5.40% (93 runs sampled)
node-schedule   x 267 ops/sec ±3.70% (86 runs sampled)

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

cron            x 4,602 ops/sec ±0.97% (94 runs sampled)
croner          x 111,757 ops/sec ±0.28% (94 runs sampled)
cronosjs        x 38,697 ops/sec ±0.33% (92 runs sampled)
node-schedule   x 2,100 ops/sec ±1.14% (88 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-13 00:00:00
croner          - OK    - 2023-10-13 00:00:00
cronosjs        - OK    - 2023-10-13 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-13 00:00:00

Benchmark (only OK)

cron            x 19,711 ops/sec ±0.66% (92 runs sampled)
croner          x 101,682 ops/sec ±0.40% (96 runs sampled)
cronosjs        x 22,459 ops/sec ±1.41% (91 runs sampled)
node-schedule   x 16,733 ops/sec ±0.69% (94 runs sampled)

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

cron            x 7,194 ops/sec ±0.92% (94 runs sampled)
croner          x 113,229 ops/sec ±0.37% (95 runs sampled)
cronosjs        x 38,333 ops/sec ±0.42% (88 runs sampled)
node-schedule   x 3,299 ops/sec ±0.91% (95 runs sampled)

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

cron            x 2,078 ops/sec ±0.93% (94 runs sampled)
croner          x 116,806 ops/sec ±0.49% (95 runs sampled)
cronosjs        x 44,826 ops/sec ±0.28% (91 runs sampled)
node-schedule   x 502 ops/sec ±0.96% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-13 00:15:15
croner          - OK    - 2023-10-13 00:15:15
cronosjs        - OK    - 2023-10-13 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-13 00:15:15

Benchmark (only OK)

cron            x 3,638 ops/sec ±1.23% (92 runs sampled)
croner          x 123,048 ops/sec ±0.24% (97 runs sampled)
cronosjs        x 27,909 ops/sec ±0.38% (93 runs sampled)
node-schedule   x 1,781 ops/sec ±0.73% (93 runs sampled)

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

cron            x 2,602 ops/sec ±1.01% (92 runs sampled)
croner          x 110,200 ops/sec ±0.26% (91 runs sampled)
cronosjs        x 38,382 ops/sec ±0.24% (93 runs sampled)
node-schedule   x 1,572 ops/sec ±0.72% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-15 00:15:15
croner          - OK    - 2023-10-15 00:15:15
cronosjs        - OK    - 2023-10-15 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-15 00:15:15

Benchmark (only OK)

cron            x 3,250 ops/sec ±1.04% (94 runs sampled)
croner          x 72,723 ops/sec ±0.30% (94 runs sampled)
cronosjs        x 29,442 ops/sec ±0.24% (92 runs sampled)
node-schedule   x 1,697 ops/sec ±1.10% (93 runs sampled)

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
