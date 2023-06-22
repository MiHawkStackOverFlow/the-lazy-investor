import { AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from '../../../shared/model/card';
import { Assets } from '../../../shared/model/assets';
import { assets, liabilities } from '../../../shared/model/assets-and-liabilities';
import { CardComponent } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, AfterViewInit {
  // Data
  allAssets: Card[] = [];
  allLiabilities: Card[] = [];

  @ViewChildren(CardComponent) private cardChildren!: QueryList<CardComponent>;

  constructor(private router: Router, private renderer: Renderer2) { }

  ngOnInit() {
    this.allAssets = assets;
    this.allLiabilities = liabilities;
  }

  navigateToAssetPage(cardName: string) {
    switch ( cardName ) {
      case Assets.MutualFunds:
        this.router.navigateByUrl('/asset-mutual-funds');
        break;
      case Assets.Crypto:
        this.router.navigateByUrl('/asset-crypto');
        break;
      case Assets.FixedDeposits:
        this.router.navigateByUrl('/asset-fd');
        break;
      case Assets.Stocks:
        this.router.navigateByUrl('/asset-stocks');
        break;
      default:
        break;
    }
  }

  ngAfterViewInit(): void {
    this.cardChildren.forEach(item => {
      console.log('test', item.card.name);
    })
  }

}
