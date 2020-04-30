# Stock Market Prediction Trading Bot

[![CircleCI](https://circleci.com/gh/libterty/stockapi-micro/tree/master.svg?style=shield)](https://circleci.com/gh/libterty/stockapi-micro/tree/master)

- **Stock Market Prediction Trading Bot**, gathering machine learning and deep learning for stock mocket. And a trading bot system simulations.

## Environment Requirements

- gcc (we will use C++20)
- node
- RabitMQ
- docker
- REDIS
- MONGODB

## Environment Variable

- Hold On~~

## How To Use

### Installation

1. Clone

```bash=
$ git clone https://github.com/libterty/stockapi-micro.git
```

2. Install Dependencies

```bash=
$ npm i
```

### Available Script

1. Build for production

```bash=
$ npm run build
```

2. Prestart before prod

```bash=
$ npm run prestart
```

3. Run Production Environment

```bash=
$ npm run start
```

4. Run Devlopment Environment

```bash=
$ npm run start:dev
```

5. Run Test local

```bash=
$ npm run test:watch
```

6. Run on CI/CD Server with 2 CPU

```bash=
$ npm run test
```

7. Format Code

```bash=
$ npm run format
```

8. Linting Code

```bash=
$ npm run lint
```

9. Half Automation Commit

```bash=
$ ./commit.sh commit <your branch name>
```

** if you meet permission denied **

```bash=
$ chmod +x commit.sh
```

## Architecture

<p align="center"><img src="https://i.imgur.com/jrl1plu.png" /></p>

## User Stories

- User can trade stock markets without any knowledge
- User can view stock markets information
- User can input secret setting which includes trading account and BankAPI Id/secret
- Core Trade Engine will do the stuff for user to perform best pratice of trading
- Trading Model will train every time when every request coming in and update data
