import { InjectionToken } from '@nestjs/common';
import { MockMetadata, ModuleMocker } from 'jest-mock';

const moduleMocker = new ModuleMocker(global);

export const useDefaultMockerToken = (token: InjectionToken) => {
  if (typeof token === 'function') {
    const mockMetadata = moduleMocker.getMetadata(token) as MockMetadata<
      any,
      any
    >;
    const Mock = moduleMocker.generateFromMetadata(mockMetadata);
    return new Mock();
  }

  return null;
};
