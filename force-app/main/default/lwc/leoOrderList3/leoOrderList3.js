import { LightningElement } from 'lwc';
import getOrdersByAccountId from "@salesforce/apex/LeoThirdApexClass.getOrdersByAccountId";
const columns = [
    { label: 'Id', fieldName: 'Id' 
    },

    { label: 'Date Created', fieldName: 'CreatedDate' 
    },

    { label: 'Total Amount', fieldName: 'TotalAmount' 
    }
];

export default class LeoOrderList3 extends LightningElement {
    data = [];

    columns = columns;

    connectedCallback(){
        const data = getOrdersByAccountId();
        this.data = data;
    }

}