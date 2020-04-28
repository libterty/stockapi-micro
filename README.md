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

## Architecture

<p align="center"><img src="https://i.imgur.com/jrl1plu.png" /></p>

## User Stories

- User can trade stock markets without any knowledge
- User can view stock markets information
- User can input secret setting which includes trading account and BankAPI Id/secret
- Trading Model will train every time when every request coming in and update data
