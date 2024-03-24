import { Test, TestingModule } from '@nestjs/testing';
import { HealthController } from '../../src/modules/health/health.controller';
import { HealthService } from '../../src/modules/health/health.service';

describe('HealthController', () => {
  let controller: HealthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HealthController],
      providers: [HealthService],
    }).compile();

    controller = module.get<HealthController>(HealthController);
  });

  describe('root', () => {
    it('should return ping', () => {
      expect(controller.ping()).toBe('ping');
    });
  });
});
