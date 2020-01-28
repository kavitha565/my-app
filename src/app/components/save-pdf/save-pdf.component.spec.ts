import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePDFComponent } from './save-pdf.component';

describe('SavePDFComponent', () => {
  let component: SavePDFComponent;
  let fixture: ComponentFixture<SavePDFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePDFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
