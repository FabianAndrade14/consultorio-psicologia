import { Component } from '@angular/core';

@Component({
  selector: 'app-page-services',
  imports: [],
  templateUrl: './page-services.component.html',
  styleUrl: './page-services.component.scss'
})
export class PageServicesComponent {
  servicios = [
    { titulo: 'Terapia Individual', descripcion: 'Atención personalizada para adultos y adolescentes.'},
    { titulo: 'Terapia de Pareja', descripcion: 'Fortalece la comunicación y el vínculo afectivo.'},
    { titulo: 'Atención Infantil', descripcion: 'Apoyo emocional para niños y niñas.'},
  ]
}
