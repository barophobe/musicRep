import { TestBed, inject } from '@angular/core/testing';

import { MyMusicService } from './my-music.service';

describe('MyMusicService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyMusicService]
    });
  });

  it('should be created', inject([MyMusicService], (service: MyMusicService) => {
    expect(service).toBeTruthy();
  }));
});
