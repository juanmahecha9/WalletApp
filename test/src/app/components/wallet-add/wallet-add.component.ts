import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataUser } from 'src/app/models/data.user';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.scss'],
  providers: [DataService]
})
export class WalletAddComponent implements OnInit {

  public DataForm: FormGroup;
  public income: number = 0.00
  public total: number;
  public idPage: any;
  public dataUser: DataUser;
  constructor(private router: Router, private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idPage = this.route.snapshot.params['id'];

    this.dataService.findById(this.idPage).subscribe(
      res => {
        this.dataUser = res;
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
    this.DataForm = new FormGroup({
      ValueAdd: new FormControl(),
    });
    this.subscribirAEntrada("ValueAdd", value => {
      this.income = value
      this.total = this.income + this.dataUser.balance;
    })
  }

  subscribirAEntrada(entrada: string, fn: any) {
    const obs = this.DataForm.get(entrada);
    if (obs != null) {
      obs.valueChanges.subscribe({
        next: fn,
      });
    }
  }

  retunData(control: string) {
    return this.DataForm.get(control).value;
  }

  add() {
    let isTrue = confirm("Ar you sure?");
    this.dataUser.balance = this.total
    if (isTrue) {
      this.dataService.upgradeData(this.idPage, this.dataUser).subscribe();
    } else {
    }
  }
  back(){
    this.router.navigate(['/wallet', this.idPage]);
  }

}