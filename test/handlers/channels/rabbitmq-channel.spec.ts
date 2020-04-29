import { RabbitMQChannelCancelledError } from '../../../src/handlers/channels/rabbitmq-channel.cancel';
import { RabbitMQChannelClosedError } from '../../../src/handlers/channels/rabbitmq-channel.close';
import { RabbitMQChannelError } from '../../../src/handlers/channels/rabbitmq-channel.error';

describe('# Channel Handlers', (): void => {
  describe('# Cancel Handlers', (): void => {
    let rabbitMQChannelCancelledError: RabbitMQChannelCancelledError;

    beforeAll((): void => {
      rabbitMQChannelCancelledError = new RabbitMQChannelCancelledError('test');
    });

    it('should be able to call RabbitCancel and Generate Chain', (): void => {
      expect(rabbitMQChannelCancelledError).not.toBeUndefined;
      expect(rabbitMQChannelCancelledError.name).toEqual(
        'RabbitMQChannelCancelledError',
      );
      expect(rabbitMQChannelCancelledError.message).toEqual('test');
    });
  });

  describe('# Close Handlers', (): void => {
    let rabbitMQChannelClosedError: RabbitMQChannelClosedError;

    beforeAll((): void => {
      rabbitMQChannelClosedError = new RabbitMQChannelClosedError('test');
    });

    it('should be able call close handlers without failure', (): void => {
      expect(rabbitMQChannelClosedError).not.toBeUndefined;
      expect(rabbitMQChannelClosedError.name).toEqual(
        'RabbitMQChannelClosedError',
      );
      expect(rabbitMQChannelClosedError.message).toEqual('test');
    });
  });

  describe('# Error Chian', (): void => {
    let rabbitMQChannelError: RabbitMQChannelError;

    beforeAll((): void => {
      rabbitMQChannelError = new RabbitMQChannelError('test');
    });

    it('should be able call error handlers without failure', (): void => {
      expect(rabbitMQChannelError).not.toBeUndefined;
      expect(rabbitMQChannelError.name).toEqual('RabbitMQChannelError');
      expect(rabbitMQChannelError.message).toEqual('test');
    });
  });
});
