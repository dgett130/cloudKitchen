import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  getId: any;
  menuData: any;

  constructor(private route: ActivatedRoute,
              private orderService: OrderDetailsService) { }

  ngOnInit(): void {
    this.getId = this.route.snapshot.paramMap.get('id');
    console.log(this.getId, 'getId');

    if(this.getId) {
      this.menuData = this.orderService.foodDetails.filter((value) => {
        if (value.id == this.getId) {
          return value;
        }
        return undefined;
      })
    }
  }
}
