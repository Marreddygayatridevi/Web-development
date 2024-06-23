import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidscareComponent } from './kidscare.component';

describe('KidscareComponent', () => {
  let component: KidscareComponent;
  let fixture: ComponentFixture<KidscareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidscareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KidscareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
