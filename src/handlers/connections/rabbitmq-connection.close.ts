import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQConnectionClosedError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQConnectionClosedError';
    Object.setPrototypeOf(this, RabbitMQConnectionClosedError.prototype); // restore prototype chain
  }
}
