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

> cron-comparison@1.3.15 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-04-13T20:34:21.811Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.7`
- [croner](https://github.com/hexagon/croner) `v8.0.2`
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

croner          x 186,292 ops/sec ±0.40% (95 runs sampled)
cronosjs        x 76,839 ops/sec ±0.49% (95 runs sampled)
node-schedule   x 193 ops/sec ±1.58% (82 runs sampled)

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

cron            x 10,740 ops/sec ±0.93% (93 runs sampled)
croner          x 181,399 ops/sec ±0.20% (96 runs sampled)
cronosjs        x 63,036 ops/sec ±0.17% (98 runs sampled)
node-schedule   x 8,475 ops/sec ±1.29% (93 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2024-04-13 21:00:00
croner          - OK    - 2024-04-13 21:00:00
cronosjs        - OK    - 2024-04-13 21:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-04-13 21:00:00

Benchmark (only OK)

cron            x 28,899 ops/sec ±0.45% (97 runs sampled)
croner          x 173,939 ops/sec ±0.19% (97 runs sampled)
cronosjs        x 36,171 ops/sec ±0.19% (99 runs sampled)
node-schedule   x 23,366 ops/sec ±0.40% (96 runs sampled)

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

cron            x 8,162 ops/sec ±0.68% (97 runs sampled)
croner          x 185,694 ops/sec ±0.15% (96 runs sampled)
cronosjs        x 60,896 ops/sec ±0.43% (98 runs sampled)
node-schedule   x 2,579 ops/sec ±0.67% (96 runs sampled)

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

cron            x 741 ops/sec ±0.52% (95 runs sampled)
croner          x 103,144 ops/sec ±0.35% (98 runs sampled)
cronosjs        x 58,171 ops/sec ±0.18% (97 runs sampled)
node-schedule   x 82.23 ops/sec ±0.64% (71 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2024-04-13 21:15:15
croner          - OK    - 2024-04-13 21:15:15
cronosjs        - OK    - 2024-04-13 21:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-04-13 21:15:15

Benchmark (only OK)

cron            x 5,633 ops/sec ±0.56% (98 runs sampled)
croner          x 204,773 ops/sec ±0.23% (95 runs sampled)
cronosjs        x 43,486 ops/sec ±0.15% (98 runs sampled)
node-schedule   x 2,681 ops/sec ±0.54% (96 runs sampled)

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

cron            x 4,588 ops/sec ±0.66% (96 runs sampled)
croner          x 174,708 ops/sec ±0.40% (95 runs sampled)
cronosjs        x 60,222 ops/sec ±0.32% (97 runs sampled)
node-schedule   x 2,184 ops/sec ±0.81% (96 runs sampled)

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

cron            x 4,509 ops/sec ±0.63% (95 runs sampled)
croner          x 132,047 ops/sec ±0.36% (97 runs sampled)
cronosjs        x 45,850 ops/sec ±0.16% (98 runs sampled)
node-schedule   x 1,960 ops/sec ±0.71% (97 runs sampled)

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
