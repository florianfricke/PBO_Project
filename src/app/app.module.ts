import { FilterPipeProcess } from './shared/filter_process.pipe';
import { FilterPipeStakeholder } from './shared/filter_stakeholder.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { ProcessComponent } from './process/process.component';
import { StakeholderComponent } from './stakeholder/stakeholder.component';
import { LocationComponent } from './location/location.component';
import { FormsModule } from '@angular/forms';
import { ListProcessComponent } from './process/list-process/list-process.component';
import { DetailProcessComponent } from './process/detail-process/detail-process.component';
import { ProcessService } from './process.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkTableModule } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ListStakeholderComponent } from './stakeholder/list-stakeholder/list-stakeholder.component';

@NgModule({
  exports: [
    CdkTableModule,
    MatSortModule,
    FilterPipeProcess,
    FilterPipeStakeholder,
  ],
  declarations: [
    AppComponent,
    NavbarComponent,
    ProcessComponent,
    StakeholderComponent,
    LocationComponent,
    ListProcessComponent,
    DetailProcessComponent,
    FilterPipeProcess,
    FilterPipeStakeholder,
    ListStakeholderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    CdkTableModule,
    MatSortModule,
    HttpClientModule
  ],
  providers: [ProcessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
