export class RabbitMQError extends Error {
  name: string = '';

  constructor(message?: string) {
    super(message); // 'Error' breaks prototype chain
    this.name = 'RabbitMQError';
    Object.setPrototypeOf(this, RabbitMQError.prototype); // restore prototype chain
  }
}
