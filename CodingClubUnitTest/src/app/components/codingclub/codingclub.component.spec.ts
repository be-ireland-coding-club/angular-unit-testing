import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { CodingclubComponent } from './codingclub.component';
import { CodingClubPractices } from 'src/app/models/codingclubpractices';
import { CodingClubService } from 'src/app/service/codingclub.service';
import { of, throwError } from 'rxjs';
import { RowHighlightDirective } from 'src/app/common/directives/row-highlight.directive';

describe('CodingclubComponent', () => {
  let component: CodingclubComponent;
  let fixture: ComponentFixture<CodingclubComponent>;
  let codingClubServiceSpy:jasmine.SpyObj<CodingClubService>;

  beforeEach(async () => {
    codingClubServiceSpy = jasmine.createSpyObj('CodingClubService',['getCodingClubPratices']);
    let codingclubpractices: CodingClubPractices[]=[
          {
            id:1,
            name:'Test',
            noOfSessionConducted:1,
            noOfSessionPending:2
          }
         ]
    codingClubServiceSpy.getCodingClubPratices.and.returnValue(of(codingclubpractices));
   //codingClubServiceSpy.getCodingClubPratices.and.returnValue(throwError("error"));
    await TestBed.configureTestingModule({
      declarations: [ CodingclubComponent,RowHighlightDirective ],
      providers:[
        {
          provide:CodingClubService,
          useValue:codingClubServiceSpy
        }
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CodingclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should call getCodingClubPratices',()=>
  {
   //Arrange
    let codingclubpractices: CodingClubPractices[]=[
      {
        id:1,
        name:'Test',
        noOfSessionConducted:1,
        noOfSessionPending:2
      }
     ]
    codingClubServiceSpy.getCodingClubPratices.and.returnValue(of(codingclubpractices));    
    //Act
    component.getCodingClubPratices();
    fixture.detectChanges();    
    //Assert
    expect(codingClubServiceSpy.getCodingClubPratices).toHaveBeenCalled();
    expect(component.codingClubPractices[0].totalSession).toBe(3);
  })

  

  it('Should call getCodingClubPratices with Exception',()=>
  {

    codingClubServiceSpy.getCodingClubPratices.and.returnValue(throwError(()=>new Error('error')));
    fixture.detectChanges();
    component.getCodingClubPratices();    
    fixture.detectChanges();    
    expect(component.codingClubPractices.length).toBe(0);
    expect(codingClubServiceSpy.getCodingClubPratices).toHaveBeenCalled();  
  })

});
