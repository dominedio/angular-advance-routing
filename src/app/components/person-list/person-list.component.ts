import { Component, OnInit } from '@angular/core';
import { datapersonService } from '../../service/dataservice'
import { person } from '../../model/personRepo';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  repos: person[];
  charged: boolean = false;
  errObj: { statusCode: number; message: string };

  constructor(public dataPersonService: datapersonService) {
    this.repos = [];
  }

  ngOnInit() {
    this.dataPersonService.getdataperson(null).subscribe({
      next: (res) => {
        if (res.length !== 0) {
          res.map((elem) => {
            this.repos.push({
              id: elem.id,
              firstname: elem.firstname,
              lastname: elem.lastname,
              email: elem.email,
            });
          });
          this.charged = false;
        }
      },
      error: (error) => {
        this.errObj = {
          statusCode: error.status,
          message: error.error.message,
        };
      },
      complete: () => {
        console.log('Request completed.');
        this.charged = true;
      }

    })
    }

    delete(id){
      this.dataPersonService.deletePerson(id);
    }
}