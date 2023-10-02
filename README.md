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

> cron-comparison@1.3.0 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2023-10-02T16:51:19.043Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

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

croner          x 103,725 ops/sec ±0.78% (94 runs sampled)
cronosjs        x 53,532 ops/sec ±0.94% (94 runs sampled)
node-schedule   x 271 ops/sec ±1.26% (85 runs sampled)

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

cron            x 4,904 ops/sec ±0.94% (94 runs sampled)
croner          x 113,045 ops/sec ±0.47% (93 runs sampled)
cronosjs        x 43,044 ops/sec ±7.50% (93 runs sampled)
node-schedule   x 2,231 ops/sec ±1.05% (91 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2023-10-02 18:00:00
croner          - OK    - 2023-10-02 18:00:00
cronosjs        - OK    - 2023-10-02 18:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-02 18:00:00

Benchmark (only OK)

cron            x 17,448 ops/sec ±0.79% (95 runs sampled)
croner          x 104,892 ops/sec ±0.20% (94 runs sampled)
cronosjs        x 25,302 ops/sec ±0.41% (94 runs sampled)
node-schedule   x 13,348 ops/sec ±0.86% (95 runs sampled)

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

cron            x 7,614 ops/sec ±1.04% (93 runs sampled)
croner          x 122,578 ops/sec ±0.09% (99 runs sampled)
cronosjs        x 43,946 ops/sec ±0.13% (95 runs sampled)
node-schedule   x 4,252 ops/sec ±1.03% (93 runs sampled)

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

cron            x 2,255 ops/sec ±0.97% (92 runs sampled)
croner          x 121,259 ops/sec ±0.14% (96 runs sampled)
cronosjs        x 52,269 ops/sec ±0.11% (99 runs sampled)
node-schedule   x 517 ops/sec ±0.97% (93 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2023-10-02 18:15:15
croner          - OK    - 2023-10-02 18:15:15
cronosjs        - OK    - 2023-10-02 18:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-02 18:15:15

Benchmark (only OK)

cron            x 3,951 ops/sec ±0.95% (93 runs sampled)
croner          x 130,240 ops/sec ±0.14% (92 runs sampled)
cronosjs        x 31,203 ops/sec ±0.11% (93 runs sampled)
node-schedule   x 1,789 ops/sec ±0.82% (94 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 */10 10 *`

```
Tests

cron            - OK    - 2023-10-11 00:15:15
croner          - OK    - 2023-10-11 00:15:15
cronosjs        - OK    - 2023-10-11 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-11 00:15:15

Benchmark (only OK)

cron            x 2,847 ops/sec ±1.07% (95 runs sampled)
croner          x 109,469 ops/sec ±0.15% (98 runs sampled)
cronosjs        x 45,507 ops/sec ±0.12% (96 runs sampled)
node-schedule   x 1,701 ops/sec ±0.95% (95 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * 10 SUN,MON,TUE`

```
Tests

cron            - OK    - 2023-10-02 18:15:15
croner          - OK    - 2023-10-02 18:15:15
cronosjs        - OK    - 2023-10-02 18:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2023-10-02 18:15:15

Benchmark (only OK)

cron            x 3,916 ops/sec ±1.07% (93 runs sampled)
croner          x 87,308 ops/sec ±0.81% (96 runs sampled)
cronosjs        x 32,629 ops/sec ±0.09% (98 runs sampled)
node-schedule   x 1,824 ops/sec ±0.76% (92 runs sampled)

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
