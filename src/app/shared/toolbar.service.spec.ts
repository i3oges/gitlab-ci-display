import { TestBed } from '@angular/core/testing';
import { expect } from 'chai';
import { ToolbarService } from './toolbar.service';

describe('ToolbarService', () => {
  let service: ToolbarService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(ToolbarService);
  });

  it('should be created', () => {
    expect(service).to.be.ok;
  });

  it('should emit group name', done => {
    service.group.subscribe(name => {
      expect(name).to.equal('AFTAC');
      done();
    });
    service.updateGroup('AFTAC');
  });

  it('should emit job name', done => {
    service.job.subscribe(name => {
      expect(name).to.equal('gradle test');
      done();
    });
    service.updateJob('gradle test');
  });
});
