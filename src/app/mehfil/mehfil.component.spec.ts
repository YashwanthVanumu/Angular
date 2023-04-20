import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MehfilComponent } from './mehfil.component';

describe('MehfilComponent', () => {
  let component: MehfilComponent;
  let fixture: ComponentFixture<MehfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MehfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MehfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
