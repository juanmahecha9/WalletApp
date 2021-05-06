import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataUser } from 'src/app/models/data.user';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss']
})
export class WalletComponent implements OnInit {
  current_date = new Date();
  idPage: any;
  dataUser: DataUser;

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idPage = this.route.snapshot.params['id'];

    localStorage.setItem('id', this.idPage);

    this.dataService.findById(this.idPage).subscribe(
      res => {
        this.dataUser = res;
        console.log(this.dataUser)
      },
      err => {
        console.log(err)
      }
    )
  }

  add() {
    let x = "add"
    this.router.navigate(['/wallet',this.idPage, x]);
  }

  remove(){
    let x = "remove"
    this.router.navigate(['/wallet',this.idPage, x]);
  }


}
