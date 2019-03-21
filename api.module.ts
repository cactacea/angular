import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AccountsService } from './api/accounts.service';
import { BlocksService } from './api/blocks.service';
import { CommentLikesService } from './api/commentLikes.service';
import { CommentsService } from './api/comments.service';
import { FeedLikesService } from './api/feedLikes.service';
import { FeedsService } from './api/feeds.service';
import { FriendRequestsService } from './api/friendRequests.service';
import { GroupsService } from './api/groups.service';
import { InvitationsService } from './api/invitations.service';
import { MediumsService } from './api/mediums.service';
import { MessagesService } from './api/messages.service';
import { SessionService } from './api/session.service';
import { SessionsService } from './api/sessions.service';
import { SettingsService } from './api/settings.service';
import { SystemService } from './api/system.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AccountsService,
    BlocksService,
    CommentLikesService,
    CommentsService,
    FeedLikesService,
    FeedsService,
    FriendRequestsService,
    GroupsService,
    InvitationsService,
    MediumsService,
    MessagesService,
    SessionService,
    SessionsService,
    SettingsService,
    SystemService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import your base AppModule only.');
        }
    }
}
