import { Component } from '@angular/core';
import { Post, PostService } from '../../services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'request-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss'
})
export class PostListComponent {
  constructor(private postServices: PostService) {}
  
  public posts$?: Observable<Post[]>

  public ngOnInit(): void {
    this.posts$ = this.postServices.getPosts()
   }
}
