import { Component, OnInit } from '@angular/core';
import { DtoGeneralManagerScreen } from 'src/app/models/dto-general-manager-screen';
import { GeneralDirectorateScreenService } from 'src/app/services/general-directorate-screen.service';

@Component({
  selector: 'app-general-directorate-screen',
  templateUrl: './general-directorate-screen.component.html',
  styleUrls: ['./general-directorate-screen.component.scss']
})
export class GeneralDirectorateScreenComponent implements OnInit {
  dtoGeneralManagerScreens: DtoGeneralManagerScreen[] =[]

  i: number = 1;
  constructor(private generalDirectorateScreenService: GeneralDirectorateScreenService) { }

  ngOnInit(): void {
   this.getManagerScreens();
  }
  getI(): number{
    return this.i++;
   }
  getManagerScreens(){
    this.generalDirectorateScreenService.getManagerScreens().subscribe((response)=>{
      this.dtoGeneralManagerScreens = response.data
      console.log(response.data)
    });
  }
}
