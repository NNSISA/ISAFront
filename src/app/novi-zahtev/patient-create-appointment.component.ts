import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../service/clinic.service';
import { Doctor } from '../model/Doctor';
import { Appointment } from '../model/Appointment';
import { RequestAppointmentService } from '../service/requestAppointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-create-appointment',
  templateUrl: './patient-create-appointment.component.html',
  styleUrls: ['./patient-create-appointment.component.css']
})
export class PatientCreateAppointmentComponent implements OnInit {

  imeKlinike: string;
  datumZakazivanja: string;
  vremeZakazivanja: string;
  doctor: Doctor;
  appointment: Appointment = new Appointment();
  usernameUlogovanog: string;
  tipPregleda: string;

  constructor(private clinicService: ClinicService, private rAservice: RequestAppointmentService, private router: Router) { }

  ngOnInit() {
    this.usernameUlogovanog = sessionStorage.getItem("authenticatedUser");
    this.imeKlinike = this.clinicService.imeKlinike1;
    this.tipPregleda = this.clinicService.tipPregleda;
    this.datumZakazivanja = this.clinicService.datumZakazivanja1;
    this.vremeZakazivanja = this.clinicService.vremeZakazivanja;
    this.doctor = this.clinicService.doctor;
    this.appointment.doctorUsername = this.doctor.username;
    this.appointment.date = this.datumZakazivanja + "T" + this.vremeZakazivanja;
    this.appointment.patient = this.usernameUlogovanog;
    this.appointment.type = this.tipPregleda;
    console.log(this.appointment.doctorUsername);
    console.log(this.appointment.patient);
  }

  onSubmit() {

    this.rAservice.addrequestAppointmentFromPatient(this.appointment).subscribe(
      data => {
        alert("Zahtev je uspešno poslat administratoru");
        this.router.navigateByUrl("/patient-home-page");
      }, error => {
        alert("Neko je već rezervisao taj termin. Odaberite drugog doktora ili drugi datum!");
        this.router.navigateByUrl("/clinics");
        console.log(error);
      }
    );
  }
}
