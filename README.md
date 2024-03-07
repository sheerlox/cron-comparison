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

> cron-comparison@1.3.13 benchmark
> node --no-warnings src/benchmark.js

Tests performed at 2024-03-07T22:16:27.844Z

Tested libraries ([npm trends](https://npmtrends.com/cron-vs-croner-vs-cronosjs-vs-node-cron-vs-node-schedule)):

- [cron](https://github.com/kelektiv/node-cron) `v3.1.6`
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

croner          x 193,836 ops/sec ±0.42% (96 runs sampled)
cronosjs        x 80,279 ops/sec ±0.49% (92 runs sampled)
node-schedule   x 174 ops/sec ±1.38% (80 runs sampled)

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

cron            x 9,908 ops/sec ±0.65% (94 runs sampled)
croner          x 187,716 ops/sec ±0.33% (96 runs sampled)
cronosjs        x 64,804 ops/sec ±0.43% (96 runs sampled)
node-schedule   x 5,705 ops/sec ±0.99% (93 runs sampled)

Fastest is croner
```

#### Pattern `*/3 */3 */3 * * *`

```
Tests

cron            - OK    - 2024-03-08 00:00:00
croner          - OK    - 2024-03-08 00:00:00
cronosjs        - OK    - 2024-03-08 00:00:00
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-03-08 00:00:00

Benchmark (only OK)

cron            x 24,234 ops/sec ±0.81% (96 runs sampled)
croner          x 169,131 ops/sec ±0.48% (96 runs sampled)
cronosjs        x 36,602 ops/sec ±0.16% (95 runs sampled)
node-schedule   x 18,071 ops/sec ±0.57% (92 runs sampled)

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

cron            x 7,673 ops/sec ±0.63% (96 runs sampled)
croner          x 192,214 ops/sec ±0.17% (99 runs sampled)
cronosjs        x 65,241 ops/sec ±0.17% (97 runs sampled)
node-schedule   x 2,392 ops/sec ±0.71% (94 runs sampled)

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

cron            x 737 ops/sec ±0.60% (92 runs sampled)
croner          x 104,188 ops/sec ±0.38% (95 runs sampled)
cronosjs        x 61,997 ops/sec ±0.19% (95 runs sampled)
node-schedule   x 79.06 ops/sec ±0.63% (69 runs sampled)

Fastest is croner
```

#### Pattern `15 15 */3 * * *`

```
Tests

cron            - OK    - 2024-03-08 00:15:15
croner          - OK    - 2024-03-08 00:15:15
cronosjs        - OK    - 2024-03-08 00:15:15
node-cron       - FAIL  - 1970-01-01 00:00:00
node-schedule   - OK    - 2024-03-08 00:15:15

Benchmark (only OK)

cron            x 5,377 ops/sec ±0.65% (97 runs sampled)
croner          x 199,891 ops/sec ±0.12% (97 runs sampled)
cronosjs        x 45,159 ops/sec ±0.30% (98 runs sampled)
node-schedule   x 2,577 ops/sec ±0.59% (96 runs sampled)

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

cron            x 4,386 ops/sec ±0.70% (94 runs sampled)
croner          x 181,151 ops/sec ±0.21% (98 runs sampled)
cronosjs        x 63,914 ops/sec ±0.26% (98 runs sampled)
node-schedule   x 2,325 ops/sec ±0.61% (96 runs sampled)

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

cron            x 4,340 ops/sec ±0.63% (96 runs sampled)
croner          x 139,906 ops/sec ±0.14% (99 runs sampled)
cronosjs        x 48,276 ops/sec ±0.21% (98 runs sampled)
node-schedule   x 1,795 ops/sec ±1.20% (93 runs sampled)

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
