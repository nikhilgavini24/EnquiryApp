import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Define types for API responses if known
interface EnquiryResponse {
  data: any; // Replace `any` with the actual data type
}

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private apiUrl: string = 'https://freeapi.gerasim.in/api/youtube/';
  private http = inject(HttpClient);

  constructor() { }

  // Method to get all enquiries
  getAllEnqury(): Observable<EnquiryResponse> {
    return this.http.get<EnquiryResponse>(`${this.apiUrl}GetAllEnquries`);
  }

  // Method to get all enquiry statuses
  getAllEnquryStatus(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}GetAllEnquiryStatus`);
  }

  // Method to get all enquiry subjects
  getAllSubjects(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}GetAllEnquirySubject`);
  }

  // Method to create a new enquiry
  createNewEnquiry(obj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}AddNewEnquiry`, obj);
  }

  // Method to delete an enquiry

}
