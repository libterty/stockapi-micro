import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQConsumerSetupError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQConsumerSetupError';
    Object.setPrototypeOf(this, RabbitMQConsumerSetupError.prototype); // Restore chain prototype
  }
}
