import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Country } from '../../models/country';
import countries from '../../lib/countries.json';
import { ApiServiceService } from '../../services/api-service.service';
import { Router } from '@angular/router';

/**
 * @title Input with error messages
 */

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  public validacion: boolean;

  public mode: string = "form"
  public DataForm: FormGroup;
  public data: any = {
    name: "|",
    lastName: "|",
    country: "|",
    city: "|",
    adress: "|",
    telephone: "|",
    email: "|",
  }
  public formErrors = {
    Name: "",
    LastName: "",
    Telephone: "",
    Adress: "",
    City: "",
    Country: "",
    Email: "",
  };
  public codePhone: any;
  options: Country[] = countries;
  filteredOptions: Observable<Country[]>;

  constructor(private apiService: ApiServiceService, private router: Router) {
  }

  ngOnInit() {
    this.DataForm = new FormGroup({
      Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      LastName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Telephone: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Adress: new FormControl('', [Validators.required, Validators.minLength(5)]),
      City: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Country: new FormControl('', [Validators.required, Validators.minLength(5)]),
      Email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    });
    this.filteredOptions = this.DataForm.get("Country").valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice()),
      );
    this.subscribirAEntrada("Country", value => {
      this.codePhone = value.code;
    })
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  private _filter(name: string): Country[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  subscribirAEntrada(entrada: string, fn: any) {
    const obs = this.DataForm.get(entrada);
    if (obs != null) {
      obs.valueChanges.subscribe({
        next: fn,
      });
    }
  }

  validarRequerido(control: string) {
    const valor = this.DataForm.get(control).value;
    switch (control) {
      case "Name":
        if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
          this.formErrors.Name = "error";
          this.validacion = true;
        } else {
          this.formErrors.Name = ""
        }
        break;
      case "LastName":
        if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
          this.formErrors.LastName = "error";
          this.validacion = true;
        } else {
          this.formErrors.LastName = ""
        }
        break;
      case "Telephone":
        if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
          this.formErrors.Telephone = "error"
          this.validacion = true;
        } else {
          this.formErrors.Telephone = ""
        }
        break;
      case "City":
        if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
          this.formErrors.City = "error"
          this.validacion = true;
        } else {
          this.formErrors.City = ""
        }
        break;
      case "Adress":
        if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
          this.formErrors.Adress = "error"
          this.validacion = true;
        } else {
          this.formErrors.Adress = ""
        }
        break;
      case "Country":
        if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
          this.formErrors.Country = "error"
          this.validacion = true;
        } else {
          this.formErrors.Country = ""
        }
        break;
      case "Email":
        if (valor == null || valor == undefined || valor == "" || valor.length < 1) {
          this.formErrors.Email = "error"
          this.validacion = true;
        } else {
          this.formErrors.Email = "";
        }
        break;
      default:
        break;
    }

  }

  retunData(control: string) {
    return this.DataForm.get(control).value;
  }

  dataIsNotNull(name: string, lastName: string, country: string, city: string, adress: string, telephone: string, email: string) {
    if ((this.retunData(name) &&
      this.retunData(lastName) &&
      this.retunData(country) &&
      this.retunData(city) &&
      this.retunData(adress) &&
      this.retunData(telephone) &&
      this.retunData(email)) != null) {
      this.data.name = this.retunData(name);
      this.data.lastName = this.retunData(lastName);
      this.data.country = this.retunData(country).name;
      this.data.city = this.retunData(city);
      this.data.adress = this.retunData(adress);
      this.data.telephone = "+" + this.codePhone + this.retunData(telephone);
      this.data.email = this.retunData(email);
    }
  }

  onKeypressEvent(event: any) {
    var key = event.keyCode || event.which,
      tecla = String.fromCharCode(key).toLowerCase(),
      letras = " áéíóúabcdefghijklmnñopqrstuvwxyz.-",
      especiales = [8, 37, 39, 46],
      tecla_especial = false;
    for (var i in especiales) {
      if (key == especiales[i]) {
        tecla_especial = true;
        break;
      }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
      return false;
    }
  }

  submit() {

    this.validarRequerido("Name");
    this.validarRequerido("LastName");
    this.validarRequerido("Email");
    this.validarRequerido("Country");
    this.validarRequerido("City");
    this.validarRequerido("Adress");
    this.validarRequerido("Telephone");

    if (this.DataForm.valid) {
      this.validacion = true;
      this.dataIsNotNull("Name", "LastName", "Country", "City", "Adress", "Telephone", "Email",)
      this.mode = "preview"
    } else {
      this.validacion = false;
    }

    console.log(this.validacion)

  }

  onSubmit() {
    this.apiService.sendMail(this.data).subscribe(
      res => {
        this.router.navigate(['/home']);
        console.log(res)
      },
      err => console.log(err)
    )
  }

  onBack() {
    this.mode = "form"
  }



}
