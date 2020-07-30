import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import { CurrentPageReference } from 'lightning/navigation';

export default class BoatSearch extends NavigationMixin(LightningElement) {
    @track isLoading = false;
    @wire(CurrentPageReference)
    pageRef;
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

  createNewBoat() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName: 'Boat__c',
            actionName: 'new'
        }
    });
}
}