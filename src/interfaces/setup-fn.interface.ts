import { Channel, Connection } from 'amqplib';

export interface CustomSetupValues {
  channel: Channel;
}

export interface ConsumerSetupValues extends CustomSetupValues {
  queue: string;
  prefetch?: number;
  autoAck?: boolean;
}

export interface PublisherSetupValues extends CustomSetupValues {
  exchange: string;
  publisherConfirms?: boolean;
}

export type RabbitMQConsumerSetupFn = (
  connection: Connection,
) => Promise<ConsumerSetupValues>;
export type RabbitMQPublishSetupFn = (
  connection: Connection,
) => Promise<PublisherSetupValues>;
