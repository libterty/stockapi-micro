import { Connection, Options } from 'amqplib';

export class RabbitMQConnection {
  private readonly uri?: string;
  private readonly options?: Options.Connect;

  constructor(
    private readonly connection: Connection,
    connectOptions: string | Options.Connect,
  ) {
    typeof connectOptions !== 'string'
      ? (this.options = connectOptions)
      : (this.uri = connectOptions);
  }

  /**
   * @params
   * @return {connection: object} connection object for amqplib;
   */
  public getAmqpConnection(): Connection {
    return this.connection;
  }

  /**
   * @params
   * @return {uri: string || null} return uri conneciton string if it's established otherwise return null
   *
   */
  public getUri(): string | null {
    return this.uri || null;
  }

  /**
   * @params
   * @return {options: object || null} return connection Options as an object if it's established otherwise return null
   */
  public getOptions(): object | null {
    return this.options || null;
  }
}
