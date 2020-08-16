Feature: Leaftaps Lead Module

Scenario: TC001 Create Lead with mandate fields alone
# Given User launch the application
# And user enters the username in the loginpage
# And user enters the password in the loginpage
# When user clicks on the Login button
# Given user clicks on the CRMSFA link
Given user clicks on the Leads link
And user clicks on the Create Lead link
And user enters the company name "Testleaf" in the create lead page
And user enters the first name in the create lead page
And user enters the last name in the create lead page
When user clicks on the Create lead button
Then verify view lead page appears