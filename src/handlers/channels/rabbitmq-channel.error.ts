import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQChannelError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQChannelError';
    Object.setPrototypeOf(this, RabbitMQChannelError.prototype); // restore prototype chain
  }
}
