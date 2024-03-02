import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent {
  private symbols: number = 250;

  @Input() article!: Article;
  @Input() articleDesc!: string;

  descToShow: string;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = 'Show Image';
  constructor() {
    this.articleDescLen = 0;
    this.descToShow = '';
  }

  readMore(): void {
    // Increase the article description length by 250 symbols
    this.articleDescLen += this.symbols;
  
    // Check if the new length exceeds or equals the full article description length
    if (this.articleDescLen >= this.articleDesc.length) {
      // If it does, set articleDescLen to the full article description length
      this.articleDescLen = this.articleDesc.length;
      // Show the 'Hide' button and hide the 'Read More' button
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    }
  
    // Set the descToShow to the substring of the articleDesc up to articleDescLen
    this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
  }

  toggleImage(): void {
    this.imageIsShown = !this.imageIsShown; // Toggle the boolean value
  
    // Update the button title based on the new state
    if (this.imageIsShown) {
      this.imageButtonTitle = 'Hide Image';
    } else {
      this.imageButtonTitle = 'Show Image';
    }
  }

  hideDesc(): void {
    
    // Reset the description to show to an empty string or the initial state
    this.descToShow = '';
    // Reset the description length to zero
    this.articleDescLen = 0;
  
    // Switch the visibility of the buttons
    this.showReadMoreBtn = true;
    this.showHideBtn = false;
  }
  

}
