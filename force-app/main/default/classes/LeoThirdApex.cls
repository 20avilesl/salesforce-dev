public with sharing class LeoThirdApex {




    @AuraEnabled
    public static List<Order> getOrdersByAccountId()
    {
           List<Order> orders = [SELECT Id, TotalAmount, CreatedDate FROM Order WHERE AccountId ='001ao00000cNnmvAAC'];
           return orders;
       }
    }