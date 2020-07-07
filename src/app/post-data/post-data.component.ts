import { Component, OnInit, OnDestroy} from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../Comment';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css']
})
export class PostDataComponent implements OnInit, OnDestroy {

  querySub: any;
  post: BlogPost;
  commentName: string;
  commentText: string;


  constructor(private postData: PostService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe(params =>{
      this.postData.getPostById(params['id']).subscribe(data=> {
        this.post=data;
        this.post.views++;
        this.postData.updatePostById(this.post._id,this.post).subscribe();
      });
    })
  }

  ngOnDestroy(): void{
    if(this.querySub) this.querySub.unsubscribe();
  }

  submitComment(){
    let newComment= new Comment();
    newComment.author=this.commentName;
    newComment.comment=this.commentText;
    newComment.date=new Date().toLocaleDateString();
    this.post.comments.push(newComment);
    this.postData.updatePostById(this.post._id,this.post).subscribe(data=>{
      this.commentName=""
      this.commentText=""
    })
  }
}
