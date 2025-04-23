Feature: Error Validation

    @Validation
    Scenario Outline: Login with Invalid Credenatials
        Given Login to website with invaild credentials as "<username>" and "<password>"
        Then Verify error msg is displayed

       Examples:
           | username       | password      |
           | sagarahuja     | Qwe!123       |
           | yashTech       | 1231asd       |