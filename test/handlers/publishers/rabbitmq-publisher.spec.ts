import { RabbitMQPublisherConfirmationError } from '../../../src/handlers/publishers/rabbitmq-publisher-confirmation.error';
import { RabbitMQPublisherSetupError } from '../../../src/handlers/publishers/rabbitmq-publisher-setup.error';

describe('# Publisher Handler', (): void => {
  let rabbitMQPublisherConfirmationError: RabbitMQPublisherConfirmationError;
  let rabbitMQPublisherSetupError: RabbitMQPublisherSetupError;

  beforeAll((): void => {
    rabbitMQPublisherConfirmationError = new RabbitMQPublisherConfirmationError(
      'test',
    );
    rabbitMQPublisherSetupError = new RabbitMQPublisherSetupError('test');
  });

  describe('# Confirmation Handler', (): void => {
    it('should be able to confirm handler and generate chain', (): void => {
      expect(rabbitMQPublisherConfirmationError).not.toBeUndefined;
      expect(rabbitMQPublisherConfirmationError.name).toEqual(
        'RabbitMQPublisherConfirmationError',
      );
      expect(rabbitMQPublisherConfirmationError.message).toEqual('test');
    });
  });

  describe('# Setup handler', (): void => {
    it('should be able to setup handler and generate chian', (): void => {
      expect(rabbitMQPublisherSetupError).not.toBeUndefined;
      expect(rabbitMQPublisherSetupError.name).toEqual(
        'RabbitMQPublisherSetupError',
      );
      expect(rabbitMQPublisherSetupError.message).toEqual('test');
    });
  });
});
