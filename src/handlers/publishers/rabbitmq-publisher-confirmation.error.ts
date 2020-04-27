import { RabbitMQError } from '../../models/rabbitmq-connection-error.model';

export class RabbitMQPublisherConfirmationError extends RabbitMQError {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks the prototype chain
    this.name = 'RabbitMQPublisherConfirmationError';
    Object.setPrototypeOf(this, RabbitMQPublisherConfirmationError.prototype); // Restore chain prototype
  }
}
