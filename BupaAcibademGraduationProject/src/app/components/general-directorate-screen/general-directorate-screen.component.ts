import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DtoGeneralManagerScreen } from 'src/app/models/dto-general-manager-screen';
import { GeneralDirectorateScreenService } from 'src/app/services/general-directorate-screen.service';

@Component({
  selector: 'app-general-directorate-screen',
  templateUrl: './general-directorate-screen.component.html',
  styleUrls: ['./general-directorate-screen.component.scss'],
})
export class GeneralDirectorateScreenComponent implements OnInit {
  dtoGeneralManagerScreens: DtoGeneralManagerScreen[] = [];

  constructor(
    private generalDirectorateScreenService: GeneralDirectorateScreenService,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getManagerScreens();
  }

  getManagerScreens() {
    this.generalDirectorateScreenService
      .getManagerScreens()
      .subscribe((response) => {
        if ((this.dtoGeneralManagerScreens = response.data)) {
          this.toastrService.success(response.message, 'Başarılı');
        } else {
          this.toastrService.error(response.message, 'Hata!');
        }
      });
  }
}
