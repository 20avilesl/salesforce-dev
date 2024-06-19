public with sharing class LeoSecondApex {


@AuraEnabled
public static List<Order> getOrdersByAccountId()
{
        List<Order> orders = [SELECT Id, TotalAmount, CreatedDate FROM Order WHERE AccountId ='801ao00000cNndGAAS'];
        return orders;
    }
}