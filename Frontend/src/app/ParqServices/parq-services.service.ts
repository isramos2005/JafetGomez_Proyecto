import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { Cargos } from '../Models/Cargos';
import { Golosinas } from '../Models/Golosinas';
import { Atracciones } from '../Models/Atracciones';
import { EstadosCiviles } from '../Models/EstadosCiviles';
import { VentasQuioscoDetalle } from '../Models/VentasQuioscoDetalle';
import { InsumosQuiosco } from '../Models/InsumosQuiosco';
import { ClientesRegistrados } from '../Models/ClientesRegistrados';
import { Empleados } from '../Models/Empleados';
import { ApiService } from '../api.service';
import { Areas } from '../Models/Areas';
import { Regiones } from '../Models/Regiones';
import { Quioscos } from '../Models/Quioscos';
import { AppComponent } from '../app.component';
import { VentasQuiosco } from '../Models/VentasQuiosco';
import { Pagos } from '../Models/Pagos';
import { Clientes } from '../Models/Clientes';
import { TicketsCliente } from '../Models/TicketsCliente';
import { HistorialVisitantesAtraccion, filterChartData } from '../Models/HistorialVisitantesAtraccion';
import { Ticket } from '../Models/Tikectks';
import { FullTicktesCliente } from '../Models/FullTicketsCliente';
import { Filas } from '../Models/Filas';
import { Observable, of } from 'rxjs';
import { temporizadores } from '../Models/Temporizadores';
import { Productos } from '../Models/Productos';
import { Cliente } from '../Models/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ParqServicesService {

  constructor(
    private http:HttpClient,
    private apiService: ApiService,
    ) { }


  // servicios de estados civiles //

  getEstadoCivil(){
    return this.http.get<EstadosCiviles[]>(this.apiService.apiUrl + 'EstadosCiviles/Index');
  }

  // servicios de cargos //
  getCargos(){
    return this.http.get<Cargos[]>(this.apiService.apiUrl + 'Cargo/List');
  }

  createCargos(cargos: Cargos){
    return this.http.post<Cargos[]>(this.apiService.apiUrl + 'Cargo/Insert', cargos)
  }

  getCargosId(idcargo?: number){
    return this.http.get<Cargos>(this.apiService.apiUrl + 'Cargo/Find/'+ idcargo)
  }

  
  // servicios de golosinas //
  getGolosinas(){
    return this.http.get<Golosinas[]>(this.apiService.apiUrl + 'Golosinas/Listado');
  }
  createGolosina(golosina: Golosinas){
    return this.http.post<Golosinas[]>(this.apiService.apiUrl + 'Golosinas/Insertar', golosina);
  }
  updateGolosina(golosina: Golosinas){
    return this.http.post<Golosinas[]>(this.apiService.apiUrl + 'Golosinas/Actualizar', golosina);
  }
  deleteGolosina(data: Golosinas){
    return this.http.post<Golosinas[]>(this.apiService.apiUrl + 'Golosinas/Delete/', data);
  }


  // servicios de atracciones//
  getAtracciones(){
    return this.http.get<Atracciones[]>(this.apiService.apiUrl + 'Atracciones/List');
  }
  insertAtracciones(atracciones: Atracciones){
    return this.http.post<Atracciones[]>(this.apiService.apiUrl + 'Atracciones/Insert', atracciones);
  }
  
  findAtracciones(atracciones: Atracciones){
    return this.http.post<Atracciones[]>(this.apiService.apiUrl + 'Atracciones/Find', atracciones);
  }
  
  editAtracciones(atracciones: Atracciones){
    return this.http.put<Atracciones[]>(this.apiService.apiUrl + 'Atracciones/Update', atracciones);
  }

  deleteAtracciones(id: number){
    return this.http.post<Atracciones[]>(this.apiService.apiUrl + 'Atracciones/Delete/'+id, id);
  }
  
  getAtraccionesPorId(AreaId: number){
    return this.http.get<Atracciones[]>(this.apiService.apiUrl + 'Atracciones/FindArea/'+ AreaId)
  }


  // servicios de quioscos// 
  getQuioscos(){
    return this.http.get<Quioscos[]>(this.apiService.apiUrl + 'Quioscos/Listado');
  }
  getInsumosByQuisco(id: number){
    return this.http.post<InsumosQuiosco[]>(this.apiService.apiUrl + 'InsumosQuiosco/InsumosByQuiosco/'+id , id)
  }
  createQuioscos(quiosco: Quioscos){
    return this.http.post<Quioscos[]>(this.apiService.apiUrl + 'Quioscos/Insertar', quiosco)
  }
  findQuiosco(id: number){
    return this.http.post<Quioscos[]>(this.apiService.apiUrl + 'Quioscos/Find/'+ id, id);    
  }  
  updateQuiosco(quiosco: Quioscos){
    return this.http.post<Quioscos[]>(this.apiService.apiUrl + 'Quioscos/Actualizar', quiosco)
  }
  deleteQuiosco(id: number){
    return this.http.post<Quioscos[]>(this.apiService.apiUrl + 'Quioscos/Delete/'+id, id)
  }

  // servicios de insumos quioscos//
  getInsumosQuiosco(){
    return this.http.get<InsumosQuiosco[]>(this.apiService.apiUrl + 'InsumosQuiosco/Listado');
  }
  sendInsumos(insumo: InsumosQuiosco){
    return this.http.post<InsumosQuiosco[]>(this.apiService.apiUrl + 'InsumosQuiosco/Insertar', insumo);
  }


  //servicio  de clientes
  getClientes(){
    return this.http.get<Clientes[]>(this.apiService.apiUrl + 'Clientes/List');
  }
  getClienteByDNI(data: Clientes){
    return this.http.post<Clientes[]>(this.apiService.apiUrl + 'Clientes/BuscarClienteDNI', data);
  }

  
  // servicios de clientes registrados//
  getClientesRegistrados(){
    return this.http.get<ClientesRegistrados[]>(this.apiService.apiUrl + 'ClientesRegistrados/List');
  }


  // servicios de ventas por quiosco//
  getVentas(){
    return this.http.get<VentasQuiosco[]>(this.apiService.apiUrl + 'VentasQuiosco/Listado');
  }

  findVenta(id: number){
    return this.http.post<VentasQuiosco[]>(this.apiService.apiUrl + 'VentasQuiosco/Find/'+id, id);
  }

  getDetallesByVenta(id: number){
    return this.http.post<VentasQuioscoDetalle[]>(this.apiService.apiUrl + 'VentasQuioscoDetalle/DetallesPorVenta/'+id, id);
  }

  createVenta(venta: VentasQuiosco){
    return this.http.post<VentasQuiosco[]>(this.apiService.apiUrl + 'VentasQuiosco/Insertar', venta);
  }

  createVentaDetalle(detalle: VentasQuioscoDetalle){
    return this.http.post<VentasQuioscoDetalle[]>(this.apiService.apiUrl + 'VentasQuioscoDetalle/Insertar', detalle);
  }

  deleteInsumo(detalle: VentasQuioscoDetalle){
    return this.http.post<VentasQuioscoDetalle[]>(this.apiService.apiUrl + 'VentasQuioscoDetalle/EliminarInsumo', detalle);
  }

  closeReceipt(id: number){
    return this.http.post<VentasQuiosco[]>(this.apiService.apiUrl + ''+id, id);
  }

  // Servicio de Pagos
  getPagos(){
    return this.http.get<Pagos[]>(this.apiService.apiUrl + 'VentasQuiosco/ListadoMetodosPago');
  }



  // servicios de Empleados //
  getEmpleados(){
    return this.http.get<Empleados[]>(this.apiService.apiUrl + 'Empleados/Listado')
  }

  insertEmpleados(empleados: Empleados){
    return this.http.post<Empleados[]>(this.apiService.apiUrl + 'Empleados/Insertar', empleados)
  }

  getEmpleadosId(idEmpleado?: number){
    return this.http.get<Empleados>(this.apiService.apiUrl + 'Empleados/Find/'+ idEmpleado)
  }

  deleteEmpleado(idEmpleado?: string){
    return this.http.post<Empleados[]>(this.apiService.apiUrl + 'Empleados/Delete/' + idEmpleado, idEmpleado)
  }

  editEmpleados(empleados: Empleados){
    return this.http.post<Empleados[]>(this.apiService.apiUrl + 'Empleados/Actualizar', empleados)
  }
 
  // servicios de areas//
  getAreas(){
    return this.http.get<Areas[]>(this.apiService.apiUrl + 'Areas/List');
  }



  // servicios de regiones//
  getRegiones(){
    return this.http.get<Regiones[]>(this.apiService.apiUrl + 'Regiones/List')
  }

  // servicios de tickets cliente //
  getTicketsCliente(){
    return this.http.get<TicketsCliente[]>(this.apiService.apiUrl + 'TicketClientes/List')
  }
  getReporte(id: number){
    return this.http.post<TicketsCliente[]>(this.apiService.apiUrl + 'TicketClientes/Reporte?id='+id ,id)
  }


    // servicios de tickets //
  getTicket(){
      return this.http.get<Ticket[]>(this.apiService.apiUrl + 'Ticket/List')
    }
  newTicket(data: FullTicktesCliente){
    return this.http.post<FullTicktesCliente[]>(this.apiService.apiUrl + 'TicketClientes/InsertTicket', data)
  }    

  //Gráfica
  getChartData(item: filterChartData){
    return this.http.post<HistorialVisitantesAtraccion[]>(this.apiService.apiUrl +'HistorialVisitantesAtraccion/ChartData', item);
  }

  //Filas
  getFilasPosiciones(tifi_ID:number,atra_ID:number) {
    const url = `${this.apiService.apiUrl}Filas/Listado?tifi_ID=${tifi_ID}&atra_ID=${atra_ID}`;
    return this.http.get<Filas[]>(url);
  }

  PostPosiciones(atra_ID: number, ticl_ID: string): Observable<Filas[]> {
    const url = `${this.apiService.apiUrl}Filas/Insert`;
    const params = new HttpParams()
      .set('atra_ID', Number(atra_ID))
      .set('ticl_ID', String(ticl_ID));
    return this.http.post<Filas[]>(url, null, { params });
  }
  
  DeletePosicion(fipo_ID: number): Observable<Filas[]> {
    const url = `${this.apiService.apiUrl}Filas/Delete`;
    const params = new HttpParams()
      .set('fipo_ID', String(fipo_ID));
    return this.http.delete<Filas[]>(url, { params });
  }
  
  
  DeletePosiciones(fipo_ID: number,fiat_ID:number): Observable<Filas[]> {
    const url = `${this.apiService.apiUrl}Filas/DeleteCompleto`;
    const params = new HttpParams()
      .set('fipo_ID', String(fipo_ID))
      .set('fiat_ID', String(fiat_ID));
    return this.http.delete<Filas[]>(url, { params });
  }

    //Temporizadores
    getTemporizadores(listado:number) {
      const url = `${this.apiService.apiUrl}Filas/ListadoTemporizadores?listado=${listado}`;
      return this.http.get<temporizadores[]>(url);
    }

    PostTemporizadores(ticl_ID: string, atra_ID: number, temp_Expiracion: string) {
      const url = `${this.apiService.apiUrl}Filas/InsertTemporizador?ticl_ID=${ticl_ID}&atra_ID=${atra_ID}&temp_Expiracion=${temp_Expiracion}`;
      return this.http.post<temporizadores[]>(url,null);
    }

    ExtenderTemporizadores(temp_ID: number, temp_Expiracion: string) {
      const url = `${this.apiService.apiUrl}Filas/ExtenderHora`;
      const params = { temp_ID: temp_ID, temp_Expiracion: temp_Expiracion };
      return this.http.put(url, params);
    }
    
    
    DeleteTemporizador(temp_ID: number): Observable<Filas[]> {
      const url = `${this.apiService.apiUrl}Filas/DeleteTemporizador`;
      const params = new HttpParams()
        .set('temp_ID', String(temp_ID));
      return this.http.delete<Filas[]>(url, { params });
    }

    DeleteCompletoTemporizador(): Observable<Filas[]> {
      const url = `${this.apiService.apiUrl}Filas/DeleteCompletoTemporizador`;
    
      return this.http.delete<Filas[]>(url);
    }


    getProductos(): Observable<any[]> {
      var listado = localStorage.getItem('listadoProductos');
    
      if (listado) {
        const productos: Productos[] = JSON.parse(listado);
        console.log(productos);
        return of(productos);
      } else {

        return of([]);
      }
    }
    
  
    createProducto(createProducto: Productos): Observable<any> {
      // Agregar createProducto al localStorage
      const listadoProductos = JSON.parse(localStorage.getItem('listadoProductos') || '[]');
      listadoProductos.push(createProducto);
      localStorage.setItem('listadoProductos', JSON.stringify(listadoProductos));
      
      return new Observable(observer => {
        const response = { code: 200, message: 'Registro Agregado Exitosamente', data: listadoProductos };
        observer.next(response);
        observer.complete();
      });
    };
  
    updateProducto(UpdateProducto: Productos): Observable<any> {
      const listadoProductos: Productos[] = JSON.parse(localStorage.getItem('listadoProductos') || '[]');
      const index = listadoProductos.findIndex(producto => producto.Id === UpdateProducto.Id);
    
      if (index !== -1) {
        listadoProductos.splice(index, 1);
    
        listadoProductos.push(UpdateProducto);
        localStorage.setItem('listadoProductos', JSON.stringify(listadoProductos));
    
        const response = { code: 200, message: 'Registro Actualizado Exitosamente', data: listadoProductos };
    
        return new Observable(observer => {
          observer.next(response);
          observer.complete();
        });
      } else {
        const response = { code: 404, message: 'No se encontró el producto para actualizar', data: null };
    
        return new Observable(observer => {
          observer.error(response);
        });
      }
    }
    
  
    deleteProducto(DeleteProducto: Productos) : Observable<any> {
      const listadoProductos: Productos[] = JSON.parse(localStorage.getItem('listadoProductos') || '[]');
      const index = listadoProductos.findIndex(producto => producto.Id === DeleteProducto.Id);
    
      if (index !== -1) {
        listadoProductos.splice(index, 1);
    
        localStorage.setItem('listadoProductos', JSON.stringify(listadoProductos));
    
        const response = { code: 200, message: 'Registro Eliminado Exitosamente', data: listadoProductos };
    
        return new Observable(observer => {
          observer.next(response);
          observer.complete();
        });
      } else {
        const response = { code: 404, message: 'No se encontró el producto para Eliminar', data: null };
    
        return new Observable(observer => {
          observer.error(response);
        });
      }
    }
    

    getCliente(): Observable<any[]> {
      var listado = localStorage.getItem('listadoClientes');
    
      if (listado) {
        const cliente: Cliente[] = JSON.parse(listado);
       
        return of(cliente);
      } else {

        return of([]);
      }
    }
    
  
    createCliente(createCliente: Cliente): Observable<any> {

      const listadoClientes = JSON.parse(localStorage.getItem('listadoClientes') || '[]');
      listadoClientes.push(createCliente);
      localStorage.setItem('listadoClientes', JSON.stringify(listadoClientes));
      
      return new Observable(observer => {
        const response = { code: 200, message: 'Registro Agregado Exitosamente', data: listadoClientes };
        observer.next(response);
        observer.complete();
      });
    };
  
    updateCliente(UpdateCliente: Cliente): Observable<any> {
      const listadoClientes: Cliente[] = JSON.parse(localStorage.getItem('listadoClientes') || '[]');
      const index = listadoClientes.findIndex(Cliente => Cliente.Id === UpdateCliente.Id);
    
      if (index !== -1) {
        listadoClientes.splice(index, 1);
    
        listadoClientes.push(UpdateCliente);
        localStorage.setItem('listadoClientes', JSON.stringify(listadoClientes));
    
        const response = { code: 200, message: 'Registro Actualizado Exitosamente', data: listadoClientes };
    
        return new Observable(observer => {
          observer.next(response);
          observer.complete();
        });
      } else {
        const response = { code: 404, message: 'No se encontró el producto para actualizar', data: null };
    
        return new Observable(observer => {
          observer.error(response);
        });
      }
    }
    
  
    deleteCliente(DeleteCliente: Cliente) : Observable<any> {
      const listadoClientes: Cliente[] = JSON.parse(localStorage.getItem('listadoProductos') || '[]');
      const index = listadoClientes.findIndex(Cliente => Cliente.Id === DeleteCliente.Id);
    
      if (index !== -1) {
        listadoClientes.splice(index, 1);
    
        localStorage.setItem('listadoClientes', JSON.stringify(listadoClientes));
    
        const response = { code: 200, message: 'Registro Eliminado Exitosamente', data: listadoClientes };
    
        return new Observable(observer => {
          observer.next(response);
          observer.complete();
        });
      } else {
        const response = { code: 404, message: 'No se encontró el producto para Eliminar', data: null };
    
        return new Observable(observer => {
          observer.error(response);
        });
      }
    }
}
