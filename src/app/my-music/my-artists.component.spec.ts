import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyArtistsComponent } from './my-artists.component';

describe('MyArtistsComponent', () => {
  let component: MyArtistsComponent;
  let fixture: ComponentFixture<MyArtistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyArtistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
