import { Component, OnInit } from '@angular/core';
import { PercentageService } from '../percentage.service';
import { PercentPayload } from '../PercentPayload';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {

  covidData : PercentPayload;
  constructor(private percentageService: PercentageService) { }

  ngOnInit(): void {
    this.covidData = {recoverd: "0", death: "0"};
    this.covidData.recoverd = "0";
    this.covidData.death = "0"
    this.getPercentage();
  }

  getPercentage() {
    this.percentageService.getPercentage().subscribe(data => {
      var recoverd = data.totalRecoverd/data.totalCase;
      var death = data.totalDeath/data.totalCase;
      this.covidData.recoverd = parseFloat((recoverd*100).toString()).toFixed(2);
      this.covidData.death = parseFloat((death*100).toString()).toFixed(2)
    }, error => {
      console.log("this. is error area");
    });
  }

}
