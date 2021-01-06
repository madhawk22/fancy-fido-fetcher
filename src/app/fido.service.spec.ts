import { TestBed } from '@angular/core/testing';
import { FidoService } from "./fido.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { HttpClient } from '@angular/common/http';


describe('FidoService', () => {
  let service: FidoService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        FidoService,
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(FidoService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('addFido() should add new fido to front of list', () => {
    const fido = {
      name: "Test",
      age: 0,
      profession: "None",
      hometown: "None",
      likes: "Everything",
      dislikes: "Everything",
      pic: ""
    }

    service.addFido(fido.name, fido.age, fido.profession, fido.hometown, fido.likes, fido.dislikes, fido.pic);

    expect(service['fidos'][0]).toEqual(fido);
  });


  it('fetchNewFidoPic() should issue one http GET request', () => {

    const picUrl = "https://images.dog.ceo/breeds/pekinese/n02086079_2766.jpg";

    service.fetchNewFidoPic();

    const req = httpTestingController.expectOne(service.fidoApiUrl);
    expect(req.request.method).toEqual('GET');

    req.flush(picUrl);
  });

});
