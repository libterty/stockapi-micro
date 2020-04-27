import * as amqplib from 'amqplib';
import { config } from 'dotenv';
import awaitWrapper from './utils/await-wrapper';

config();

const connectionURL: string = process.env.QUEUEURL || 'amqp://localhost:5627';

export class MQInit {
  _url: string;
  _connection: any;
  _channel: any;

  private constructor(private queueURL: string = connectionURL) {
    this._url = queueURL;
  }

  public async connect(): Promise<void> {
    this._connection = await awaitWrapper(amqplib.connect(this._url));
  }

  private async initProcessing(): Promise<void> {
    // create message queue channel
    this._channel = await awaitWrapper(this._connection.createChannel());
    // create exchange
    await awaitWrapper(this._channel.assertExchange());
    // create queue for handling requests
    await awaitWrapper(
      this._channel.assertQueue('processing.requests', { durable: true }),
    );
    // create queue for handling results
    await awaitWrapper(
      this._channel.assertQueue('processing.results', { durable: true }),
    );
    // queues binding
    await awaitWrapper(
      this._channel.bindQueue('processing.requests', 'processing', 'request'),
    );
    await awaitWrapper(
      this._channel.bindQueue('processing.results', 'processing', 'result'),
    );

    console.log('MQ Done....');

    process.exit();
  }
}
