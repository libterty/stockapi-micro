import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQReconnectError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQReconnectError';

    Object.setPrototypeOf(this, RabbitMQReconnectError.prototype); // Restore Chian prototype
  }
}
