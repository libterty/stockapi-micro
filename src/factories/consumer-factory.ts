import { RabbitMQConnection } from '../models/rabbitmq-connection.model';
import { ConsumerConfigs } from '../interfaces/consumer-config.interface';
import { RabbitMQConsumerSetupFn } from '../interfaces/setup-fn.interface';
import { RabbitMQConsumerSetupError } from '../handlers';

export class ConsumerFactory {
  private consumerConfigs!: ConsumerConfigs;
  private consumerSetupFn!: RabbitMQConsumerSetupFn;

  /**
   *
   * @param connection connection, which every Publisher instance will use
   */
  constructor(private readonly connection: RabbitMQConnection) {}

  /**
   *
   * @param config consumer configuration
   */
  public setConsumerConfigs(config: ConsumerConfigs): void {
    this.consumerConfigs = config;
  }

  /**
   *
   * @param consumerSetupFn consumer Setup Function configuration
   */
  public setConsumerSetupFn(consumerSetupFn: RabbitMQConsumerSetupFn): void {
    this.consumerSetupFn = consumerSetupFn;
  }

  /**
   *
   * @returns {Consumer} // setup later
   * @throws {RabbitMqConsumerSetupError}
   */
  public async newConnection(): Promise<void> {
    try {
      // should init a consumer instance

      // check if configuration has been loaded or not
      if (!this.consumerConfigs && !this.consumerSetupFn) throw new Error('');

      // assign connection init base on config sets

      // Async processing
    } catch (error) {
      throw new RabbitMQConsumerSetupError(error.message);
    }
  }
}
