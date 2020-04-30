import { RabbitMQConsumerSetupError } from '../../../src/handlers/consumers/rabbitmq-consumer-setup.error';

describe('# Consumer handler', (): void => {
  describe('# Setup Handler', (): void => {
    let rabbitMQConsumerSetupError: RabbitMQConsumerSetupError;

    beforeAll((): void => {
      rabbitMQConsumerSetupError = new RabbitMQConsumerSetupError('test');
    });

    it('should be able to call consumer setup handler and generate chain', (): void => {
      expect(rabbitMQConsumerSetupError).not.toBeUndefined;
      expect(rabbitMQConsumerSetupError.name).toEqual(
        'RabbitMQConsumerSetupError',
      );
      expect(rabbitMQConsumerSetupError.message).toEqual('test');
    });
  });
});
