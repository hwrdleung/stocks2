import { Component, OnInit, enableProdMode } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { StockService } from '../stock.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myform: FormGroup;
  errorMsgs;


  constructor(private stockService: StockService) {
  }

  ngOnInit() {
    //Initialize form
    this.myform = new FormGroup({
      stockSymbol: new FormControl('')
    });

    this.stockService.updateStocks();
    this.stockService.socketListener();

  }

  isValid() {
    var alphaVantageApiKey = 'QA392CBZXI80H0IX';
    var alphaVantageApi = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=QA392CBZXI80H0IX';
    
  }

  formSubmit() {
    var isValid = false;

    if (!isValid) {
      this.errorMsgs = "Stock not found";
    } else if (isValid) {
      this.errorMsgs = "";
      var newStock = this.myform.value.stockSymbol;
      this.stockService.addNewStock(newStock);
      this.myform.reset();
    }

  }

}
