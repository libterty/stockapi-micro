import { Channel, Message } from 'amqplib';
import { ReplaySubject } from 'rxjs';
import { RabbitMQConnection } from './index';
import {
  RabbitMQPeer,
  ConsumerConfigs,
  RabbitMQConsumerSetupFn,
} from '../interfaces/index';

export class Consumer implements RabbitMQPeer {
  private channel!: Channel;
  private subject!: ReplaySubject<Message>;
  private connection!: RabbitMQConnection;
  private rawConfigs!: ConsumerConfigs;
  private configs!: ConsumerConfigs;
  private consumerSetupFn!: RabbitMQConsumerSetupFn;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
}
