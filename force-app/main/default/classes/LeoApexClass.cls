public with sharing class LeoApexClass {

    @AuraEnabled
    public static List<Order> getOrdersByAccountId() {
        String accountId = '001ao00000cNnmvAAC';
        List<Order> orders = [SELECT Id,  TotalAmount, CreatedDate FROM Order WHERE AccountId =:accountId];
        return orders;


    }
}