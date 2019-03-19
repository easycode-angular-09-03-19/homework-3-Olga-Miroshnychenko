import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarComponent } from './car.component';


describe('CarComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        CarComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(CarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'myaCar'`, () => {
    const fixture = TestBed.createComponent(CarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('myCar');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(CarComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to myCar!');
  });
});


