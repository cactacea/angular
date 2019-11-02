import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { ChannelsService } from './api/channels.service';
import { CommentLikesService } from './api/commentLikes.service';
import { CommentsService } from './api/comments.service';
import { FriendRequestsService } from './api/friendRequests.service';
import { InvitationsService } from './api/invitations.service';
import { MediumsService } from './api/mediums.service';
import { MessagesService } from './api/messages.service';
import { NotificationsService } from './api/notifications.service';
import { PasswordService } from './api/password.service';
import { SessionService } from './api/session.service';
import { SessionsService } from './api/sessions.service';
import { SettingsService } from './api/settings.service';
import { SystemService } from './api/system.service';
import { TweetLikesService } from './api/tweetLikes.service';
import { TweetsService } from './api/tweets.service';
import { UsersService } from './api/users.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    ChannelsService,
    CommentLikesService,
    CommentsService,
    FriendRequestsService,
    InvitationsService,
    MediumsService,
    MessagesService,
    NotificationsService,
    PasswordService,
    SessionService,
    SessionsService,
    SettingsService,
    SystemService,
    TweetLikesService,
    TweetsService,
    UsersService ]
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
