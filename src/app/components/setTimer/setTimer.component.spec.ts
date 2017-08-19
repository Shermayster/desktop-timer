import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SetTimerComponent } from './setTimer.component';


fdescribe('SetTimerComponent', () => {
  let component: SetTimerComponent;
  let fixture: ComponentFixture<SetTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should show 3 number controls', () => {
  //   const timerControls = fixture.debugElement.queryAll(By.css)
  //   const controlsNumber = timerControls.length;
  //   expect(controlsNumber).toBe(3);
  // })
});
