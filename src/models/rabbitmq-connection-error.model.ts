export class RabbitMQError extends Error {
  name: string = '';

  constructor(message?: string) {
    super(message);
    this.name = 'RabbitMQError';
    Object.setPrototypeOf(this, RabbitMQError.prototype);
  }
}
