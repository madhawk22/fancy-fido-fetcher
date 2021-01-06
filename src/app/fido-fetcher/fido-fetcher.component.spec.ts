import { TestBed, waitForAsync, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { FidoFetcherComponent } from './fido-fetcher.component';
import { FidoService } from '../fido.service';


describe('FidoFetcherComponent', () => {
  let component: FidoFetcherComponent;
  let fixture: ComponentFixture<FidoFetcherComponent>;
  let fidoService: FidoService;
  let testPicUrl = 'https://images.dog.ceo/breeds/terrier-patterdale/Patterdale.jpg';

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        FidoFetcherComponent
      ],
      providers : [
        FidoService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(FidoFetcherComponent);
    component = fixture.componentInstance;
    fidoService = TestBed.inject(FidoService);
  });


  it('should create the fetch component', () => {
    expect(component).toBeDefined();
  });

  it('should subscribe to the service urlChanged subject and update picUrl on change', () => {
    component.ngOnInit();
    fidoService.urlChanged.next(testPicUrl);
    fixture.detectChanges();
    expect(component.picUrl).toEqual(testPicUrl);
  });

  it('should call getNewPic() on button click', waitForAsync(() => {
    spyOn(component, 'getNewPic');

    let button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.getNewPic).toHaveBeenCalled();
    });
  }));

});
