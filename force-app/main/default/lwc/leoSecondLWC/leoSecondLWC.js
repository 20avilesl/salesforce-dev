import { LightningElement } from 'lwc';
import getOrdersByAccountId from '@salesforce/apex/LeoThirdApex.getOrdersByAccountId';

const columns = [
    { label: 'Id', fieldName: 'Id' 
    },

    { label: 'Date Created', fieldName: 'CreatedDate' 
    },

    { label: 'Total Amount', fieldName: 'TotalAmount' 
    }
];

export default class LeoSecondLWC extends LightningElement {
    data = [];

    columns = columns;

    connectedCallback(){
        const data = getOrdersByAccountId()
        .then(result => {
            this.data = result;
            console.log(this.data);
        })
    }
}