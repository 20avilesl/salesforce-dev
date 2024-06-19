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

export default class LeoThirdLWC extends LightningElement {
    data = [];

    columns = columns;

    connectedCallback(){
        const data = getOrdersByAccountId();
        this.data = data;
    }
}