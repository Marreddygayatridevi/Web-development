import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacewashComponent } from './facewash.component';

describe('FacewashComponent', () => {
  let component: FacewashComponent;
  let fixture: ComponentFixture<FacewashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacewashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacewashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
