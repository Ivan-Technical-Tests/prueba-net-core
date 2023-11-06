import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TblFactura } from 'src/app/domain/models/tbl-factura/tbl-factura';
import { TblFacturaGateway } from 'src/app/domain/models/tbl-factura/gateway/tbl-factura-gateway';
import { Observable } from 'rxjs';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root',
})
export class TblFacturaApiService extends TblFacturaGateway {
  private _url = `${this.config.apiUrl}/TblFactura`;

  constructor(private http: HttpClient, private config: ConfigService) {
    super();
  }

  getByID(id: number): Observable<TblFactura> {
    return this.http.get<TblFactura>(`${this._url}/${id}`);
  }

  getAll(): Observable<TblFactura[]> {
    return this.http.get<TblFactura[]>(this._url);
  }

  saveNew(tblFactura: TblFactura): Observable<TblFactura> {
    // Implementa la lógica para guardar una nueva TblFactura
    // y devuelve un observable si es necesario.
    return this.http.post<TblFactura>(this._url, tblFactura);
  }
}
