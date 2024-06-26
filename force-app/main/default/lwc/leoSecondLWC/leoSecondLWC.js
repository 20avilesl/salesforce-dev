import { LightningElement, track } from 'lwc';
import getOrdersByAccountId from '@salesforce/apex/LeoThirdApex.getOrdersByAccountId';

export default class LeoSecondLWC extends LightningElement {
    @track data = [];
    @track columns = [
        { label: 'Id', fieldName: 'Id' },
        { 
            label: 'Date Created', 
            fieldName: 'CreatedDate', 
            type: 'date', 
            typeAttributes: { 
                year: 'numeric', 
                month: '2-digit', 
                day: '2-digit' 
            } 
        },
        { 
            label: 'Total Amount', 
            fieldName: 'TotalAmount', 
            type: 'currency', 
            typeAttributes: { 
                currencyCode: 'USD', 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
            } 
        }
    ];

    connectedCallback(){
        getOrdersByAccountId()
        .then(result => {
            this.data = result;
            console.log('data: ', this.data[0]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    }
}
