import { Component, OnInit } from '@angular/core';
import { CodingClubPractices } from 'src/app/models/codingclubpractices';
import { CodingClubService } from 'src/app/service/codingclub.service';
import { of,Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { RowHighlightDirective } from 'src/app/common/directives/row-highlight.directive';
@Component({
  selector: 'app-codingclub',
  templateUrl: './codingclub.component.html',
  styleUrls: ['./codingclub.component.scss']
})
export class CodingclubComponent implements OnInit {

  codingClubPractices: CodingClubPractices[]=[];
  logError:string='';
  constructor(private codingClubService:CodingClubService) { }

  ngOnInit(): void {
    this.getCodingClubPratices();
  }

  getCodingClubPratices()
  {
    this.codingClubService.getCodingClubPratices()
    .pipe(
      map((items)=>items.map((item=>{
        item.totalSession=item.noOfSessionConducted+item.noOfSessionPending;
        return item;
      })))    
    ).subscribe((data)=>{
      this.codingClubPractices=data;
      console.log(this.codingClubPractices);
    },  
    ()=>{
      this.codingClubPractices=[];      
    }    
    )   
  }
}
