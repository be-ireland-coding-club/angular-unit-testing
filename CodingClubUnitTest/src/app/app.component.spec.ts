import { Component } from '@angular/core';
import { ComponentFixture,TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AuthService } from './service/auth.service';
import { TrimtextPipe } from './common/pipe/trimtext.pipe';

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        TrimtextPipe
                
      ],
      
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

it('Should return feedback after session is completed',()=>
{
  //Arrange
  spyOn(component,'getStatus').and.returnValue('completed');
  //Act
  component.getFeedback();
  fixture.detectChanges();
  //Assert
  expect(component.feedback.rating).toBe(4);
})


it('Should return feedback after session not started yet',()=>
{
  //Arrange
  spyOn(component,'getStatus').and.returnValue('in-progress');
  //Act
  component.getFeedback();
  fixture.detectChanges();
  //Assert
  expect(component.feedback.rating).toBe(0);
})


it('Should return feedback if session is in Progress',()=>
{
  //Arrange
  spyOn(component,'getStatus').and.returnValue('not-started');
  //Act
  component.getFeedback();
  fixture.detectChanges();
  //Assert
  expect(component.feedback.rating).toBe(0);
})


  it('should create the app', () => {
    
    expect(component).toBeTruthy();
  });

  it(`should have as title 'CodingClubUnitTest'`, () => {
  
    expect(component.title).toEqual('CodingClubUnitTest');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('CodingClubUnitTest app is running!');
  });


  
});
