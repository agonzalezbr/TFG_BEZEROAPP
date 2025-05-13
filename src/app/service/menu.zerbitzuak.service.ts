import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuZerbitzuakService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  private izena: string | null = null;

  getZerbitzuak(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/zerbitzuak`);
  }
  setHitzordua(izena:string,abizena:string,email:string,zerbitzuak:string[],data:string): Observable<any> {
    const payload = {
      izena: izena,
      abizena: abizena,
      email: email,
      zerbitzuak: zerbitzuak,
      data: data
    };
    return this.http.post<any>(`${this.apiUrl}/hitzorduak`, payload);
  }
}
