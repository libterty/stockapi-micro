import * as amqp from 'amqplib';

export interface PublisherConfigs {
  exchange: {
    name: string;
    type?: string;
    options: amqp.Options.AssertExchange; // options set to true where means exchange persistance is enabled
  };
  publisherConfirms?: boolean; // publisher confirmations are enabled by default
  reconnectTimeoutMillis?: number; // -1 by default for infinite retry
  reconnectAttempts?: number; // retry timer
}
