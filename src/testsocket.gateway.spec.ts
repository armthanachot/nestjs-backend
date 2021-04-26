import { Test, TestingModule } from '@nestjs/testing';
import { TestsocketGateway } from './testsocket.gateway';

describe('TestsocketGateway', () => {
  let gateway: TestsocketGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestsocketGateway],
    }).compile();

    gateway = module.get<TestsocketGateway>(TestsocketGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
