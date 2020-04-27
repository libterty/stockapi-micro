import * as amqp from 'amqplib';

/**
 * Factory for building RabbitMQ Connection Instacne
 */
export class RabbitMQConnectionFactory {
  private _uri?: string;
  private _options?: amqp.Options.Connect;

  /**
   * Set URI to Connect
   * @param {uri: string} `conection string`
   * @returns {void}
   */
  public setUri(uri: string): void {
    this._uri = uri;
  }

  /**
   * Set Options to Connect
   * @param {options: amqp.Options.Connect} `conection option`
   * @returns {void}
   */
  public setOption(option: amqp.Options.Connect): void {
    this._options = option;
  }
}
