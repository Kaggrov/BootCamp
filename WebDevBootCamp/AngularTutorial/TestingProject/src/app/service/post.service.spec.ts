import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
import { of } from 'rxjs';

describe('PostService', () => { // Demo for Http applications testing
  let service: PostService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  let POSTS = [
    {
      id: 1,
      body: 'body 1',
      title: 'title 1',
    },
    {
      id: 2,
      body: 'body 2',
      title: 'title 2',
    },
    {
      id: 3,
      body: 'body 3',
      title: 'title 3',
    },
  ];
  beforeEach(() => {
    let HttpClientSpyObj = jasmine.createSpyObj('HttpClient', ['get']);
    TestBed.configureTestingModule({
      providers: [
        PostService,
        {
          provide: HttpClient,
          useValue: HttpClientSpyObj,
        },
      ],
    });
    service = TestBed.inject(PostService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('Post service  be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected posts when getposts is called', (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(POSTS));
    service.getPosts().subscribe({
      next: (posts) => {
        expect(posts).toEqual(POSTS);
        done();
      },
      error: () => {
        done.fail;
      },
    });
    expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
  });


});
