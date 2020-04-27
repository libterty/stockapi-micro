import * as amqp from 'amqplib';

export interface ConsumerConfigs {
  queue: {
    name: string;
    bindingPattern?: string; // queue key name: `${your queue name}`
    options?: {
      // queue option when durable is default to true where queue persistance is enable
      exclusive?: boolean;
      durable?: boolean;
      autoDelete?: boolean;
      arguments?: any;
      messageTtl?: number;
      expires?: number;
      maxLength?: number;
      maxPriority?: number;
    };
  };
  exchange: {
    name?: string; // exchange name `${your exchange queue name}`
    type?: string; // direct binding type default with `${name}`
    options?: amqp.Options.AssertExchange; // exchange option when durable is default to true where queue persistance is enable
  };
  prefetch?: number; // consumber perfetch
  autoAck?: boolean; // RabbitMQ acknowledgement is disabled when it sets to true. It will not commit when it sets to false
  defaultEncoding?: string;
  reconnectTimeoutMillis?: number; // retry timer
  reconnectAttempts?: number; // default -1 with infinite retry
  noDeadLetterQueue?: boolean;
  deadLetterQueue?: {
    queue?: {
      name?: string; // dead queue key name: `${your queue name}`
      bindingPattern?: string;
      options?: {
        // dead queue option when durable is default to true where queue persistance is enable
        exclusive?: boolean;
        durable?: boolean;
        autoDelete?: boolean;
        arguments?: any;
        messageTtl?: number;
        expires?: number;
        maxLength?: number;
        maxPriority?: number;
      };
    };
    exchange: {
      name?: string; // dead exchange name `${your exchange queue name}`
      type?: string; // dead direct binding type default with `${fanout}`
      options?: amqp.Options.AssertExchange; // dead exchange option when durable is default to true where queue persistance is enable
    };
  };
}
