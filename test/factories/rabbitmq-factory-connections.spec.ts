import * as amqp from 'amqplib';
import { RabbitMQConnectionFactory } from '../../src/factories/rabbitmq-connection.factory';

describe('# RabbitMQ Connection Factory', (): void => {
  describe('factory tests', (): void => {
    let spy;
    beforeAll((): void => {
      spy = jest.spyOn(amqp, 'connect');
    });

    afterAll((): void => {
      (amqp['connect'] as any).restore();
    });

    it('should be able to build connection with options', async (): Promise<
      void
    > => {
      let error;
      try {
        const connectionFactory = new RabbitMQConnectionFactory();
        connectionFactory.setOptions({});

        await connectionFactory.newConenction();
      } catch (error) {
        error = error;
      }

      expect(error).toBeUndefined;
    });

    it('should be able to build connection with uri', async (): Promise<
      void
    > => {
      let error;
      try {
        const connectionFactory = new RabbitMQConnectionFactory();
        connectionFactory.setUri('amqp://localhost:5627');

        await connectionFactory.newConenction();
      } catch (error) {
        error = error;
      }

      expect(error).toBeUndefined;
    });

    it('should throw an error in case no options or no uri provided', async (): Promise<
      void
    > => {
      let error;
      try {
        await new RabbitMQConnectionFactory().newConenction();
      } catch (error) {
        error = error;
      }

      expect(error).not.toBeUndefined;
    });
  });
});
