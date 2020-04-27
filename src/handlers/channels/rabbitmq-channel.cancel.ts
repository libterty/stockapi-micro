import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQChannelCancelledError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQChannelCancelledError';
    Object.setPrototypeOf(this, RabbitMQChannelCancelledError.prototype); // restore prototype chain
  }
}
