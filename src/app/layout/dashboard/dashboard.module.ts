import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatCardModule, MatIconModule, MatTableModule } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';

import { StatModule } from '../../shared/modules/stat/stat.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { SuggestionsComponent } from '../components/suggestions/suggestions.component';
import { HelpComponent } from '../components/help/help.component';
import { PostDetailsComponent } from '../components/post-details/post-details.component';
import { TopProfilesComponent} from '../components/top-profiles/top-profiles.component';
import { TrackTimeComponent } from '../components/tracktime/tracktime.component';
import { TopJobComponent } from '../components/topjobs/topjobs.component';
import { ViewedProfileComponent } from '../components/viewed-profile/viewdprofile.component';
import { ViewedPeopleComponent } from '../components/viewedpeople/viewedpeople.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatGridListModule,
        StatModule,
        MatCardModule,
        MatCardModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        FlexLayoutModule.withConfig({addFlexToParent: false})
    ],
    declarations: [DashboardComponent,ProfileComponent,SuggestionsComponent,HelpComponent,
        PostDetailsComponent,TopProfilesComponent,
        TrackTimeComponent,TopJobComponent,ViewedProfileComponent,ViewedPeopleComponent]
})
export class DashboardModule {}
