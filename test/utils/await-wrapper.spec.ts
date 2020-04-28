import awaitWrapper from '../../src/utils/await-wrapper';

interface TestData {
  successData?: any;
  failureData?: any;
}

describe('# Utils', (): void => {
  describe('# awaitWrapper function(): ', (): void => {
    let data: TestData;

    beforeAll(
      async (): Promise<void> => {
        const successAwait = jest
          .fn()
          .mockImplementation(
            (): Promise<object> => Promise.resolve({ hello: 'World!' }),
          );
        const failureAwait = jest
          .fn()
          .mockImplementation(
            (): Promise<object> => Promise.reject({ err: 'Fail!' }),
          );
        data = {
          successData: await awaitWrapper(successAwait()),
          failureData: await awaitWrapper(failureAwait()),
        };
      },
    );

    it('should be able to resolve async/await', (): void => {
      expect(data.successData[1]['hello']).toEqual('World!');
    });

    it('should be able to return reject async/await', (): void => {
      expect(data.failureData[0]['err']).toEqual('Fail!');
    });
  });
});
