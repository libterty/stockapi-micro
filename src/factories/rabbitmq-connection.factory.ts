import * as amqp from 'amqplib';
import { RabbitMQConnection } from '../models/rabbitmq-connection.model';
import { RabbitMQConnectionError } from '../handlers/connections/rabbitmq-connection.error';

/**
 * Factory for building RabbitMQ Connection Instacne
 */
export class RabbitMQConnectionFactory {
  private uri!: string;
  private options!: amqp.Options.Connect;

  /**
   * Sets uri to connect to
   * @param uri connection string
   */
  public setUri(uri: string) {
    this.uri = uri;
  }

  /**
   * Sets options of amqplib to build a connection
   * @param options connection options
   */
  public setOptions(options: amqp.Options.Connect) {
    this.options = options;
  }

  /**
   * Builds a RabbitMQ Conenction Instacne
   * @returns {RabbitMQConnection}
   * @throws {RabbitMqConnectionError}
   */
  public async newConenction() {
    try {
      if (!this.options && !this.uri)
        throw new Error('Either options or connection uri must be provided');
      const amqpConnection = await amqp.connect(this.options || this.uri);
      return new RabbitMQConnection(amqpConnection, this.options || this.uri);
    } catch (err) {
      throw new RabbitMQConnectionError(
        `Error while building connection to RabbitMQ: ${err.message}`,
      );
    }
  }
}
