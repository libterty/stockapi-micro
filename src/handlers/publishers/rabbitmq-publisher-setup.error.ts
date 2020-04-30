import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQPublisherSetupError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQPublisherSetupError';
    Object.setPrototypeOf(this, RabbitMQPublisherSetupError.prototype); // Restore Chain prototype
  }
}
