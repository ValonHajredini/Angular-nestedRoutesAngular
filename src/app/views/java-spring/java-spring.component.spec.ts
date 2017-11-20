import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaSpringComponent } from './java-spring.component';

describe('JavaSpringComponent', () => {
  let component: JavaSpringComponent;
  let fixture: ComponentFixture<JavaSpringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavaSpringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavaSpringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
