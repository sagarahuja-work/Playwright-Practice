Feature: Ecommerce Validations
    
    All the Ecommerce related validations are covered in this Feature file
    @Regression
    Scenario: Placing the Order
        Given A login to Ecommerce application with "sagarahujawork@gmail.com" and "Password@123"
        When Add product "ZARA COAT 3" to cart
        Then Verify selected product diplayed in the cart
        When Enter valid details and place the Order
        Then Verify placed order is present in order history

    @Regression
    Scenario Outline: Login with Invalid Credenatials
        Given Login to website with invaild credentials as "<username>" and "<password>"
        Then Verify error msg is displayed

       Examples:
           | username       | password      |
           | sagarahuja     | Qwe!123       |
           | yashTech       | 1231asd       |