import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RowHighlightDirective } from './row-highlight.directive';

@Component({
  template: `
  <h2 appRowHighlight>Something </h2>
 `
})
class TestComponent { }

describe('RowHighlightDirective', () => {

  
  let fixture: ComponentFixture<TestComponent> 
  let component: TestComponent 
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowHighlightDirective, TestComponent] 
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('h2'));
  });
   it('should create an instance', () => {
    
    inputEl.triggerEventHandler('mouseover');
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('red');

    inputEl.triggerEventHandler('mouseleave');
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('transparent');
  
   });
});
