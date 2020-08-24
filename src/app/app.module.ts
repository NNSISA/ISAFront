import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RequestComponent } from './zahtevi/requests.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './logovanje/login.component';
import { RegistrationComponent } from './registracija/registration.component';
import { HttpInterceptorService } from './logovanje/HttpInterceptorService';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DoctorComponent } from './profiles/doctor.component';
import { DoktorHomePageComponent } from './profiles/doktor-home-page.component';
import { PatientsListComponent } from './lista-pacijenta/patients-list.component';
import { AngularMaterialModule } from './angular-material.module';
import { ClinicCenterAdministratorComponent } from './profiles/clinic-center-administrator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClinicComponent } from './klinika/clinic.component';
import { NewAppointmentComponent } from './nov-pregled/new-appointment.component';
import { PatientProfleComponent } from './profiles/patient-profile.component';
import { NurseHomePageComponent } from './profiles/nurse-home-page/nurse-home-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SearchForPatientsComponent } from './pretraga-za-pacijenta/search-for-patients.component';
import { PatientHomePageComponent } from './profiles/patient-home-page/patient-home-page.component';
import { ClinicsListComponent } from './klinika-lista/clinics-list.component';
import { HospitalRoomSearchComponent } from './pretraga-soba/hospital-room-search.component';
import { MedicalRecordComponent } from './medicinski-izvestaj/medical-record.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HolidayRequestComponent } from './odmor-zahtev/holiday-request.component';
import { CalendarComponent } from './kalendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { LogoutComponent } from './odjava/logout.component';
import { HistoryOfAppointmentsComponent } from './istorija-pregleda/history-of-appointments.component';
import { RequestHolidayViewComponent } from './pregled-zahteva-odmor/request-holiday-view.component';
import { ClinicAdminHomePageComponent } from './profiles/clinic-admin-home-page/clinic-admin-home-page.component';
import { NewRoomComponent } from './nova-soba/new-room.component';
import { AuthRecipeComponent } from './overa-recepta/auth-recipe.component';
import { CdkTableModule } from '@angular/cdk/table';
import { AppointmentTypesComponent } from './pregled-tip/appointment-types.component';
import { SurgeryHospitalRoomComponent } from './operacija-soba/surgery-hospital-room.component';
import { DoctorsListComponent } from './doktori-lista/doctors-list.component';
import { DoctorsSearchComponent } from './pretraga-doktora/doctors-search.component';
import { AddDoctorComponent } from './dodaj-doktor/add-doctor.component';
import { ClinicAdminProfileComponent } from './admin-klinike/clinic-admin-profile.component';
import { PatientCreateAppointmentComponent } from './novi-zahtev/patient-create-appointment.component';
import { SurgeryRoomService } from './service/surgery-room.service';
import { PopUpDoctorsComponent } from './pop-up-doktori/pop-up-doctors.component';
import { NewSurgeryComponent } from './nova-operacija/new-surgery.component';
import { AppointmentReportComponent } from './pregled-izvestaj/appointment-report.component';
import { DialogPriceComponent } from './cena/dialog-price.component';
import { ClinicProfileComponent } from './klinika-profil/clinic-profile.component';
import { HolidayRequestsComponent } from './odmor-zahtevi/holiday-requests.component';
import { AdminReportsComponent } from './admin-izvestaji/admin-reports.component';
import { ChartsModule } from 'ng2-charts';
import { AppRequestsListComponent } from './lista-zahteva/app-requests-list.component';
import { FastAppointmentsComponent } from './brzi-pregledi/fast-appointments.component';
import { PopUpDoctorsAppointmentComponent } from './pop-up-pregledi/pop-up-doctors-appointment.component';
import { AlreadyCreatedAppointmentsComponent } from './zakazni-pregledi/already-created-appointments.component';
import { EditMedicalRecordComponent } from './izmena-medicinski-izvestaj/edit-medical-record.component';
import { EditOldAppointmentReportComponent } from './izmena-stari-pregled/edit-old-appointment-report.component';
import { ConfirmAccountComponent } from './potvrda-naloga/confirm-account.component';
import { TokenInterceptor } from './logovanje/TokenInterceptor';
import { PopUpMapComponent } from './pop-up-mapa/pop-up-map.component';

@NgModule({
  declarations: [
    AppComponent,
    ClinicCenterAdministratorComponent,
    RequestComponent,
    ClinicComponent ,
    LoginComponent,
    RegistrationComponent,
    DoctorComponent,
    DoktorHomePageComponent,
    PatientsListComponent,
    NewAppointmentComponent,
    PatientProfleComponent,
    NurseHomePageComponent,
    SearchForPatientsComponent,
    PatientHomePageComponent,
    ClinicsListComponent,
    HospitalRoomSearchComponent,
    MedicalRecordComponent,
    HolidayRequestComponent,
    CalendarComponent,
    LogoutComponent,
    HistoryOfAppointmentsComponent,
    RequestHolidayViewComponent,
    ClinicAdminHomePageComponent,
    NewRoomComponent,
    ClinicAdminHomePageComponent,
    AuthRecipeComponent,
    SurgeryHospitalRoomComponent,
    DoctorsListComponent,
    AppointmentTypesComponent,
    SurgeryHospitalRoomComponent,
    DoctorsSearchComponent,
    AddDoctorComponent,
    ClinicAdminProfileComponent,
    PatientCreateAppointmentComponent,
    PopUpDoctorsComponent,
    NewSurgeryComponent,
    AppointmentReportComponent,
    ClinicProfileComponent,
    DialogPriceComponent,
    HolidayRequestsComponent,
    AdminReportsComponent,
    AppRequestsListComponent,
    FastAppointmentsComponent,
    PopUpDoctorsAppointmentComponent,
    EditMedicalRecordComponent,
    EditOldAppointmentReportComponent,
    AlreadyCreatedAppointmentsComponent,
    EditMedicalRecordComponent,
    ConfirmAccountComponent,
    PopUpMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgbModule,
    ReactiveFormsModule,
    FullCalendarModule,
    CdkTableModule,
    ChartsModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents:[PopUpDoctorsComponent,DialogPriceComponent,PopUpDoctorsAppointmentComponent,PopUpMapComponent],

})
export class AppModule { }
