import { RabbitMQReconnectError } from '../../../src/handlers/reconnects/rabbitmq-reconnect.error';

describe('# Reconnect handlers', (): void => {
  describe('# Error Handler', (): void => {
    let rabbitMQReconnectError: RabbitMQReconnectError;

    beforeAll((): void => {
      rabbitMQReconnectError = new RabbitMQReconnectError('test');
    });

    it('should be able to call error handler and generate chain', (): void => {
      expect(rabbitMQReconnectError).not.toBeUndefined;
      expect(rabbitMQReconnectError.name).toEqual('RabbitMQReconnectError');
      expect(rabbitMQReconnectError.message).toEqual('test');
    });
  });
});
