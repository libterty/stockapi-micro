import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQChannelClosedError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQChannelClosedError';
    Object.setPrototypeOf(this, RabbitMQChannelClosedError.prototype); // restore prototype chain
  }
}
