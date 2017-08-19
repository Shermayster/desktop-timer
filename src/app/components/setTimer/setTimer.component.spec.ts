import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SetTimerComponent } from './setTimer.component';


describe('SetTimerComponent', () => {
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

  it('should show 3 number controls', () => {
    const timerControls = fixture.debugElement.nativeElement.querySelectorAll('input');
    const controlsNumber = timerControls.length;
    expect(controlsNumber).toBe(3);
  });

  it('should show 3 label for controls', () => {
    const timerLabels = fixture.debugElement.nativeElement.querySelectorAll('label');
    expect(timerLabels[0].innerText).toContain('Set Hours');
    expect(timerLabels[1].innerText).toContain('Set Minutes');
    expect(timerLabels[2].innerText).toContain('Set Seconds');
  });

});
