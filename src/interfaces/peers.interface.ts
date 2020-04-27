import { Observable } from 'rxjs/internal/Observable';
import { Channel, Connection } from 'amqplib';

export interface RabbitMQPeer {
  init(...args: any[]): void | Promise<void>;
  reconnect(): Observable<void>;
  closeChannel(): void;
  getActiveChannel(): Channel;
  getActiveConnection(): Connection;
}
