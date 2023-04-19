import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { CodingClubPractices } from '../models/codingclubpractices';
import { of,Observable } from 'rxjs';
import { CodingClubService } from './codingclub.service';

describe('CodingclubService', () => {
  let service: CodingClubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodingClubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should call method getCodingClubPratices',(done)=>{
    let codingclubpractices: CodingClubPractices[]=[
      {
        id:1,
        name:'Test',
        noOfSessionConducted:1,
        noOfSessionPending:2
      },
      {
        id:2,
        name:'Test 1',
        noOfSessionConducted:2,
        noOfSessionPending:3
      },
     ]
  
   service.getCodingClubPratices().subscribe(data=>{
    done();
    expect(data).toEqual(codingclubpractices);    
    
   });
  });
});
