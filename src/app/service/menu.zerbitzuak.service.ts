import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuZerbitzuakService {

  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  private izena: String | null = null;
  private abizena: String | null = null;
  private email: String | null = null;
  private zerbitzuak: any[]=[];
  private data: String | null = null;

  getZerbitzuak(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/zerbitzuak`);
  }
  
  setHitzordua(izena:string,abizena:string,email:string,zerbitzuak:any[],data:string): Observable<any> {
    const payload = {
      "izena": izena + ' ' + abizena,
      "email": email,
      "deskribapena": zerbitzuak.map(s => s.izena).join(', '),
      "data": data,
      "hasieraOrdua": data
    };
    return this.http.post<any>(`${this.apiUrl}/hitzorduak/erreserba`, payload);
  }
}
