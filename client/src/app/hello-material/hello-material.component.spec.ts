import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloMaterialComponent } from './hello-material.component';

describe('HelloMaterialComponent', () => {
  let component: HelloMaterialComponent;
  let fixture: ComponentFixture<HelloMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloMaterialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
