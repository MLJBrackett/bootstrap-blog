import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { BlogPost } from './BlogPost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  perPage: number = 6;

  constructor(private http: HttpClient) { }

  getPosts(page,tag,category): Observable<BlogPost[]>{
    let path = `/api/posts?page=${page}&perPage=${this.perPage}`;
    if(tag!=null && tag!=undefined){
      path+=`&tag=${tag}`;
    }
    if(category!=null && category!=undefined){
      path+=`&category=${category}`;
    }
    return this.http.get<BlogPost[]>(`https://mighty-cove-19049.herokuapp.com${path}`);
  }

  getPostById(id): Observable<BlogPost>{
    return this.http.get<BlogPost>(`https://mighty-cove-19049.herokuapp.com/api/posts/${id}`);
  }

  getCategories(): Observable<any>{
    return this.http.get<any>(`https://mighty-cove-19049.herokuapp.com/api/categories`);
  }

  getTags(): Observable<any>{
    return this.http.get<any>(`https://mighty-cove-19049.herokuapp.com/api/tags`)
  }

  getAllPosts(): Observable<BlogPost[]>{
    return this.http.get<BlogPost[]>(`https://mighty-cove-19049.herokuapp.com/api/posts?page=1&perPage=${Number.MAX_SAFE_INTEGER}`)
  }

  newPost(data: BlogPost): Observable<any>{
    return this.http.post<any>(`https://mighty-cove-19049.herokuapp.com/api/posts/`,data)
  }

  updatePostById(id: string, data: BlogPost):Observable<any>{
    return this.http.put<any>(`https://mighty-cove-19049.herokuapp.com/api/posts/${id}`,data)
  }

  deletePostById(id: string):Observable<any>{
    return this.http.delete<any>(`https://mighty-cove-19049.herokuapp.com/api/posts/${id}`)
  }

}
