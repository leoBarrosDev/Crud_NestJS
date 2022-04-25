import { EmployeeEntity } from './employee.entity';

describe('Employee', () => {
  it('should be defined', () => {
    expect(new EmployeeEntity()).toBeDefined();
  });
});
