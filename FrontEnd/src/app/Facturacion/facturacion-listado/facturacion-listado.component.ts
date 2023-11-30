import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/Models/Cliente';
import { ParqServicesService } from 'src/app/ParqServices/parq-services.service';
import { ImgbbService } from 'src/app/Service_IMG/imgbb-service.service';
import { ToastUtils } from 'src/app/Utilities/ToastUtils';

@Component({
  selector: 'app-facturacion-listado',
  templateUrl: './facturacion-listado.component.html',
  styleUrls: ['./facturacion-listado.component.css']
})
export class FacturacionListadoComponent {
  Cliente!: Cliente[];
  updateCliente: Cliente = new Cliente();
  createCliente: Cliente = new Cliente();
  deleteCliente: Cliente = new Cliente();
  Id: any;
  showModal = false;
  showModalU = false;
  showModalD = false;
  filtro: string = '';
  p: number = 1;
  selectedPageSize = 10;
  pageSizeOptions: number[] = [10, 20, 50];


  Cliente_Create_Requerido = false;
  RTN_Create_Requerido = false;
  Direccion_Create_Requerido = false;

  Cliente_Update_Requerido = false;
  RTN_Update_Requerido = false;
  Direccion_Update_Requerido = false;

  constructor(
    private service: ParqServicesService,
    private elementRef: ElementRef,
    private renderer2: Renderer2,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.getCliente();
    this.showModal = false;
    this.showModalU = false;
    this.showModalD = false;
  }

  getCliente() {
    this.service.getCliente().subscribe(data => {
      console.log(data);
      this.Cliente = data;
    });
  }

  filtrarCliente(): Cliente[] {
    const filtroLowerCase = this.filtro.toLowerCase();

    return this.Cliente.filter(Cliente => {
      const nombreValido = Cliente.Nombre.toLowerCase().includes(filtroLowerCase);
      const idValido = Cliente.Id.toString().includes(this.filtro);
      const rtnvalido = Cliente.RTN.toString().includes(this.filtro);
      const DireccionValido = Cliente.Direccion.toString().includes(this.filtro);
      return nombreValido || idValido || rtnvalido || DireccionValido;
    });
  };

  RedirectCreate() {
    //    this.router.navigate(['/Facturacion/Crear']);

  }

  //#region UPDATE

  onUpdate(Cliente: Cliente) {

    this.updateCliente.Id = Cliente.Id;
    this.updateCliente.Nombre = Cliente.Nombre;
    this.updateCliente.RTN = Cliente.RTN;
    this.updateCliente.Direccion = Cliente.Direccion;
    //    this.router.navigate(['/Facturacion/Crear']);

  }
  //#endregion UPDATE

  //#region MODAL DELETE 
  onDelete(id: number) {
    this.deleteCliente.Id = id;
    this.openDeleteModal();
  }

  openDeleteModal() {
    const modalDelete = this.elementRef.nativeElement.querySelector('#modalDelete');
    this.renderer2.setStyle(modalDelete, 'display', 'block');
    setTimeout(() => {
      this.renderer2.addClass(modalDelete, 'show');
      this.showModalD = true;
    }, 0);
  }

  closeDeleteModal() {
    const modalDelete = this.elementRef.nativeElement.querySelector('#modalDelete');
    this.renderer2.removeClass(modalDelete, 'show');
    setTimeout(() => {
      this.renderer2.setStyle(modalDelete, 'display', 'none');
      this.showModalD = false;
    }, 300); // Ajusta el tiempo para que coincida con la duración de la transición en CSS
  }


  confirmDelete() {
    this.service.deleteCliente(this.deleteCliente).subscribe((response: any) => {
      if (response.code == 200) {
        ToastUtils.showSuccessToast(response.message);
        this.getCliente();
        this.closeDeleteModal();
      } else if (response.code == 409) {
        ToastUtils.showWarningToast(response.message);
      } else {
        ToastUtils.showErrorToast(response.message);
      }
    })
  }

  //#endregion MODAL DELETE


}
