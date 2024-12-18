import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { RequestRoutingModule } from './request-routing.module';
import { PostService } from './services/post.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  imports: [CommonModule, RequestRoutingModule, HttpClientModule],
  declarations: [PostListComponent, PostItemComponent],
  exports: [PostListComponent, PostItemComponent],
  providers: [PostService]
})
export class RequestModule { }
