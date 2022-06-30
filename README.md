I think the code is rather self explanatory. The Add/Update Employee div is the primary usecase as of right now. 
When someone's name is put in I search through the collection to make sure it isn't a repeat name. If it is then any 
other forms filled out will update the previous document but any form left blank will keep the previous information. 
The remove employee div you can input the name of any employee and they will have their document deleted from mongo. 
Along with this theyb should also automatically be dropped from the schedule. The weekly Payroll textarea utilizes a l
ot of auxiliary information that I would have otherwise discarded like pre-tracking how many hours someone was working 
a week based on their schedule. I chose to code the schedule using military time because for lack of a better reason it 
was much simpler to accurately track when someone was working a double with someone else and treat the time as always 
ascending. I used this as the key and the names as the values. I faced an issue where a key couldn't have 2 values so I 
chose to concatenate the strings to get around that. More in depth scheduling format: M:9-15T:8-16W:13-15Th:10-14F:8-10S:12-1 
I was originally excited about trying to process this using a regex but it was a lot less intuitive so I then just seperated 
the string into smaller substrings by day.

Lemme know if you have any questions. Looking forward to building more on this next week. Thanks
