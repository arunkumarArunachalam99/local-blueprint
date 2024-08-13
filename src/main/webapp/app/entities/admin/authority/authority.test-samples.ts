import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b908e55c-760a-414b-a853-4a023ae60bcf',
};

export const sampleWithPartialData: IAuthority = {
  name: '1ace2957-a50f-47a0-bbbf-59ed60077378',
};

export const sampleWithFullData: IAuthority = {
  name: '79b2ec3c-1b78-4516-bdb9-6fe8f9b0c82d',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
