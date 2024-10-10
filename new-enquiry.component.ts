import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-enquiry',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-enquiry.component.html',
  styleUrl: './new-enquiry.component.css'
})
export class NewEnquiryComponent implements OnInit{
   enquiryStatusList: any []=[];
   enquirSubjectList: any[]=[];
   enquiryObj: any = {
    "enquiryId": 0,
    "customerName": "",
    "contactNo": "",
    "altContactNo": "",
    "email": "",
    "enquiryStatusId": "",
    "enquirySubjectId": "",
    "createdDate": new Date(),
    "naration": ""
   }
    
  masterService= inject(MasterService)
enquirySubjectList: any;

  ngOnInit(): void {
    this.getAllStatus();
    this.getAllSubject();

  }
getAllStatus() {
  this.masterService.getAllEnquryStatus().subscribe((res:any)=>{
    this.enquiryStatusList = res.data;
    
  })
}
getAllSubject() {
  this.masterService.getAllSubjects().subscribe((res:any)=>{
    this.enquirySubjectList = res.data;
})
}
onSave() {
  debugger;
  this.masterService.createNewEnquiry(this.enquiryObj).subscribe((res:any)=>{
    if(res.result) {
      alert('Enquiry Created')
    }else {
      alert(res.message)
  }
},error=>{
  debugger;
})
}

}