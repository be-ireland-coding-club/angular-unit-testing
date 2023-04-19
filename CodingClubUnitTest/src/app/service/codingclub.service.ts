import { Injectable } from '@angular/core';
import { CodingClubPractices } from '../models/codingclubpractices';
import { of,Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CodingClubService {

  constructor() { }

  getCodingClubPratices():Observable<CodingClubPractices[]>
  {
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
    return of(codingclubpractices);
  }
}

