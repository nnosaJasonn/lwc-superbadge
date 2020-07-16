import { LightningElement, api, track, wire } from 'lwc';
import getBoatTypes from '@salesforce/apex/BoatDataService.getBoatTypes';

export default class BoatSearchForm extends LightningElement {
    selectedBoatTypeId = '';
    @track selectedBoatTypeId = "";
    @track error = undefined;
    @track searchOptions;   
    @wire(getBoatTypes) boatTypes(error, data){
      if (data) {
        this.searchOptions = data.map(type => {
            return {
                label: type.Name,
                value: type.Id
                };
        });
        this.searchOptions.unshift({ label: 'All Types', value: '' });
      } else if (error) {
        this.searchOptions = undefined;
        this.error = error;
      }
    }
    
    // Fires event that the search option has changed.
    // passes boatTypeId (value of this.selectedBoatTypeId) in the detail
    handleSearchOptionChange(event) {
        event.preventDefault();
      // searchEvent must be the new custom event search
      this.selectedBoatTypeId = event.detail.value;
        const searchEvent = new CustomEvent("search", {
        detail: {
            boatTypeId: this.selectedBoatTypeId
        }
        });
      this.dispatchEvent(searchEvent);
    }
  }