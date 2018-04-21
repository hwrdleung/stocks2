import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StockService } from '../stock.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myform: FormGroup;
  errorMsgs;

  private alphaVantageApiKey = 'QA392CBZXI80H0IX';
  private alphaVantageApi = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&apikey=' + this.alphaVantageApiKey + '&symbol=';

  constructor(private stockService: StockService, private http:HttpClient) {
  }

  ngOnInit() {
    //Initialize form
    this.myform = new FormGroup({
      stockSymbol: new FormControl('')
    });

    this.stockService.updateStocks();
    this.stockService.socketListener();
  }

  formSubmit() {
    var newStock = this.myform.value.stockSymbol;
    //Check if it's a valid stock symbol
    this.http.get(this.alphaVantageApi + newStock).subscribe((res)=>{ 
      console.log(res);     
      if(res['Error Message']){
        this.errorMsgs = "Stock not found";
      }else {
        this.errorMsgs = "";
        this.stockService.addNewStock(newStock);
        this.myform.reset();
      }
    });
  }

}
