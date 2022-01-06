import { By } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';

describe(ActionDirective.name, () => {
  let fixture: ComponentFixture<ActionDirectiveTestComponent>;
  let component: ActionDirectiveTestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActionDirectiveTestComponent, ActionDirective],
    }).compileComponents();

    fixture = TestBed.createComponent(ActionDirectiveTestComponent);
    component = fixture.componentInstance;
  });

  it('should create an instance', () => {
    const directive = new ActionDirective();
    expect(directive).toBeTruthy();
  });

  it('(D) (@Output appAction()) should emit event with payload when ENTER key is pressed', () => {
    const div: HTMLElement = fixture.debugElement.query(
      By.directive(ActionDirective)
    ).nativeElement;
    const event = new KeyboardEvent('keyup', { key: 'Enter' });
    div.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });

  it('(D) (@Output appAction()) should emit event with payload when clicked', () => {
    const div: HTMLElement =
      fixture.nativeElement.querySelector('.dummy-component');
    const event = new MouseEvent('click');
    div.dispatchEvent(event);
    expect(component.hasEvent()).toBeTrue();
  });
});

@Component({
  template: `<div
    class="dummy-component"
    (appAction)="actionHandler($event)"
  ></div>`,
})
class ActionDirectiveTestComponent {
  private event: Event = null;
  public actionHandler($event: any): void {
    this.event = $event;
  }
  public hasEvent(): boolean {
    return !!this.event;
  }
}
