
import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-enquiry-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']  // Fixed property name
})
export class EnquiryListComponent implements OnInit {

  enquiryList: any[] = [];  // Use this for storing the list
  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllEnquiries();  // Corrected method call
  }

  // Correct method definition
  loadAllEnquiries() {
    this.masterService.getAllEnqury().subscribe(
      (res: any) => {
        this.enquiryList = res.data;
      },
      (error) => {
        console.error('Error fetching enquiries:', error);  // Log error to console
      }
    );
  }
}
