import { ExistingUserNameValidator } from './existing-user-name-validator';

describe('ExistingUserNameValidator', () => {
  it('should create an instance', () => {
    expect(new ExistingUserNameValidator()).toBeTruthy();
  });
});
