import { Developer } from './developer.entity';

describe('DeveloperEntity', () => {
  it('should create an instance', () => {
    expect(new Developer('Andrea','Lucero')).toBeTruthy();
  });
});
