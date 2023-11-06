import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TblCliente } from 'src/app/domain/models/tbl-cliente/tbl-cliente';
import { TblClienteGateway } from 'src/app/domain/models/tbl-cliente/gateway/tbl-cliente-gateway';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class TblClienteApiService extends TblClienteGateway {
  private _url = `${this.config.apiUrl}/TblCliente`;

  constructor(private http: HttpClient, private config: ConfigService) {
    super();
  }

  getByID(id: number): Observable<TblCliente> {
    return this.http.get<TblCliente>(`${this._url}/${id}`);
  }

  getAll(): Observable<TblCliente[]> {
    return this.http.get<TblCliente[]>(this._url);
  }

  saveNew(tblCliente: TblCliente): Observable<TblCliente> {
    // Implementa la lógica para guardar un nuevo TblCliente
    // y devuelve un observable si es necesario.
    return this.http.post<TblCliente>(this._url, tblCliente);
  }
}
