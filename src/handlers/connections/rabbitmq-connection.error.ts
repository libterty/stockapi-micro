import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQConnectionError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // "Error" breaks prototype chain
    this.name = 'RabbitMQConnectionError';
    Object.setPrototypeOf(this, RabbitMQConnectionError.prototype); // Restore prototype chain
  }
}
