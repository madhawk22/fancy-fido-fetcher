import { Component, OnInit } from '@angular/core';
import { FidoService } from '../fido.service';

@Component({
  selector: 'app-create-fido',
  templateUrl: './create-fido.component.html',
  styleUrls: ['./create-fido.component.css']
})
export class CreateFidoComponent implements OnInit {
  fidoService: FidoService;
  picUrl = '';
  subscription;

  constructor(fidoService: FidoService) {
    this.fidoService = fidoService;
  }

  ngOnInit(){
    this.subscription = this.fidoService.urlChanged.subscribe(
      (url)=> {
        this.picUrl = url;
      }
    );
  }

  onSubmit(submittedForm){
    if(submittedForm.invalid){
      return;
    }
    console.log(submittedForm.value);
    this.fidoService.addFido(submittedForm.value.name,
      submittedForm.value.age,
      submittedForm.value.profession,
      submittedForm.value.hometown,
      submittedForm.value.likes,
      submittedForm.value.dislikes,
      this.picUrl);
    submittedForm.reset();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
