''Generate even number from 1 to 10
Systemutil.Run "iexplore.exe", "http://www.google.co.in"
wait 5
Browser("Google").Page("Google").WebEdit("Search").Set "Prime Minister Narendra Modi"
Wait 2
Browser("Google").Page("Google").WebButton("Google Search").Click
Wait 5

Browser("Google").Page("Prime Minister Narendra").WebElement("17 September 1950 (age").Output CheckPoint("17 September 1950 (age 68 years), Vadnagar") @@ hightlight id_;_Browser("Google").Page("Prime Minister Narendra").WebElement("17 September 1950 (age")_;_script infofile_;_ZIP::ssf1.xml_;_
Wait 2
For i = 1 To 10 Step 1
	If (i mod 2) = 0 Then
		reporter.ReportEvent micDone, "Even Number", i & " is even number"
	End If
Next
Browser("Google").Close
