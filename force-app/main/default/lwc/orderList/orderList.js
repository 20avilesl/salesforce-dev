import { LightningElement } from 'lwc';
import getOrdersByAccountId from "@salesforce/apex/LeoApexClass.getOrdersByAccountId";

const columns = [
    { label: 'Total Amount', fieldName: 'TotalAmount' },
    { label: 'Created Date', fieldName: 'CreatedDate', type: 'date' },

];
export default class OrderList extends LightningElement {
    data = [];
    columns = columns;

    connectedCallback() {
        console.log('CONNECTED CLLBCK');
        getOrdersByAccountId()
            .then(result => {
                this.data = result;
                console.log(this.data);
            })
            .catch(error => {
                console.error(error);
            });
    }
}