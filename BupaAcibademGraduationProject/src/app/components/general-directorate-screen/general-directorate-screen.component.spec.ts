import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDirectorateScreenComponent } from './general-directorate-screen.component';

describe('GeneralDirectorateScreenComponent', () => {
  let component: GeneralDirectorateScreenComponent;
  let fixture: ComponentFixture<GeneralDirectorateScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDirectorateScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralDirectorateScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
