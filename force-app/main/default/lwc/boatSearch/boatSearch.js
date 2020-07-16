import { LightningElement, track } from 'lwc';

export default class BoatSearch extends LightningElement {
    @track isLoading = false;

  // Handles loading event
  handleLoading() {
    this.isLoading = true;
  }
  
  // Handles done loading event
  handleDoneLoading() { 
    this.isLoading = false;
  }
  
  // Handles search boat event
  // This custom event comes from the form
  searchBoats(event) { 
    const boatTypeId = event.detail.value;
    this.template.querySelector("c-boat-search-results").searchBoats(boatTypeId);
  }
}