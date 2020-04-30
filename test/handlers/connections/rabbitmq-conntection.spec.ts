import { RabbitMQConnectionClosedError } from '../../../src/handlers/connections/rabbitmq-connection.close';
import { RabbitMQConnectionError } from '../../../src/handlers/connections/rabbitmq-connection.error';

describe('# Connection Handlers', (): void => {
  describe('# Close Handler', (): void => {
    let rabbitMQConnectionClosedError: RabbitMQConnectionClosedError;

    beforeAll((): void => {
      rabbitMQConnectionClosedError = new RabbitMQConnectionClosedError('test');
    });

    it('should be able to call RabbitMQ Connection Close handler and generate chain', (): void => {
      expect(rabbitMQConnectionClosedError).not.toBeUndefined;
      expect(rabbitMQConnectionClosedError.name).toEqual(
        'RabbitMQConnectionClosedError',
      );
      expect(rabbitMQConnectionClosedError.message).toEqual('test');
    });
  });

  describe('# Error Handler', (): void => {
    let rabbitMQConnectionError: RabbitMQConnectionError;

    beforeAll((): void => {
      rabbitMQConnectionError = new RabbitMQConnectionError('test');
    });

    it('should be able to call RabbitMQ Connection Error handler and generate chain', (): void => {
      expect(rabbitMQConnectionError).not.toBeUndefined;
      expect(rabbitMQConnectionError.name).toEqual('RabbitMQConnectionError');
      expect(rabbitMQConnectionError.message).toEqual('test');
    });
  });
});
