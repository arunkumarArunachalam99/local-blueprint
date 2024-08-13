import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 31232,
  login: 'v',
};

export const sampleWithPartialData: IUser = {
  id: 28760,
  login: 'wv0',
};

export const sampleWithFullData: IUser = {
  id: 11108,
  login: 'nFx',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
