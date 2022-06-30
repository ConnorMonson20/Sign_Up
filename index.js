const express = require("express")
var bodyParser = require("body-parser")
var mongoose = require("mongoose")
const path = require('path');

const app = express()
const jsdom = require("jsdom");
const { start } = require("repl");
const { JSDOM } = jsdom;
const dom1 = new JSDOM(`<!DOCTYPE html><body><p id="main">My First JSDOM!</p></body>`,
  {
    url: "http://localhost:3000/",
    contentType: "text/html",
    pretendToBeVisual: true,
  }
);
console.log(dom1.serialize());


app.get('/', (req, res) => {
    res.send(dom.serialize());
  });
  
const dom = new JSDOM(`<!DOCTYPE html><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<link rel="stylesheet" type="text/css" href="styles.css"><div class="container">
<div class="row">
<div class="col-md-4 main id = "report" align = left float: left>
    <h2> Weekly Payroll Report </h2>
    </table><textarea id="payrollText" class = "payrollText" name="payrollText" rows="12" cols="42"> </textarea>
    <p id="payrollText"  name="w3review"</p>
    </div>
    
    <div class="col-md-4 main">
        <form action="/sign_up" method="POST">
            <h2>Add/Update Employee</h2>
            <input type="text" class="box" id="name" name="name" placeholder="Name" />
            <br>
            <input type="text" class="box" id="eStatus" name="eStatus" placeholder="Employee Status" />
            <br>
            <input type="text" class="box" id="salary" name="salary" placeholder="Salary" />
            <br>
            <input type="text" class="box" id="schedule" name="schedule" placeholder="Schedule(I.e. M:8-12T:9-14)" />
            <br>
            <button type="submit" value="submit" id="submit">Submit</button>
            <br>
            
        </form>
    </div>
    <div class="col-md-2 main">
    <form action="/sign_up" method="POST">
            <h2>Remove Employee</h2>
            <input type="text" class="box" id="removeName" name="removeName" placeholder="Name" />
            <button type="submit" onclick="remove()" value="submit" id="submit">Submit</button>
            <br>
        </form>
    
</div>
</div><tr>
<table border="5" id = "theTable" cellspacing="0" align="center">
        <!--<caption>Timetable</caption>-->
        <tr>
            <td align="center" height="50"
                width="100"><br>
                <b>Day/Period</b></br>
            </td>
            <td align="center" height="50"
                width="100">
                <b>9:00-10:00</b>
            </td>
            <td align="center" height="50"
                width="100">
                <b>10:00-11:00</b>
            </td>
            <td align="center" height="50"
                width="100">
                <b>11:00-12:00</b>
            </td>
            <td align="center" height="50"
                width="100">
                <b>12:00-13:00</b>
            </td>
            <td align="center" height="50"
                width="100">
                <b>13:00-14:00</b>
            </td>
            <td align="center" height="50"
                width="100">
                <b>14:00-15:00</b>
            </td>
            <td align="center" height="50"
                width="100">
                <b>15:00-16:00</b>
            </td>
        </tr>
        <tr>
            <td align="center" height="50">
                <b>Monday</b></td>
            <td class = "tdM" align="center" height="50">  </td>
            <td class = "tdM" align="center" height="50">  </td>
            <td class = "tdM" align="center" height="50">  </td>
            <td class = "tdM" align="center" height="50">  </td>
            <td class = "tdM" align="center" height="50">  </td>
            <td class = "tdM" align="center" height="50">  </td>
            <td class = "tdM" rowspan="1" align="center" height="50">
            </td>
            <td colspan="1" align="center"
                height="50"></td>
            <td align="center" height="50"></td>
        </tr>
        <tr>
            <td align="center" height="50">
                <b>Tuesday</b>
            </td>
            <td colspan="1" align="center"
                height="50">
            </td>
            <td class = "tdT" align="center" height="50">  </td>
            <td class = "tdT" align="center" height="50">  </td>
            <td class = "tdT" align="center" height="50">  </td>
            <td class = "tdT" align="center" height="50">  </td>
            <td class = "tdT" align="center" height="50">  </td>
            <td class = "tdT" align="center" height="50">  </td>
            
        </tr>
        <tr>
            <td align="center" height="50">
                <b>Wednesday</b>
            </td>
            <td class = "tdW" align="center" height="50">  </td>
            <td class = "tdW" align="center" height="50">  </td>
            <td class = "tdW" align="center" height="50">  </td>
            <td class = "tdW" align="center" height="50">  </td>
            <td class = "tdW" align="center" height="50">  </td>
            <td class = "tdW" align="center" height="50">  </td>
            <td class = "tdW" colspan="1" align="center"
                height="50">
            </td>
        </tr>
        <tr>
            <td align="center" height="50">
                <b>Thursday</b>
            </td>
            <td class = "tdTh" align="center" height="50">  </td>
            <td class = "tdTh" align="center" height="50">  </td>
            <td class = "tdTh" align="center" height="50">  </td>
            <td class = "tdTh" align="center" height="50">  </td>
            <td class = "tdTh" align="center" height="50">  </td>
            <td class = "tdTh" align="center" height="50">  </td>
            <td class = "tdTh" colspan="1" align="center"
                height="50">
            </td>
            <td align="center" height="50"></td>
        </tr>
        <tr>
            <td align="center" height="50">
                <b>Friday</b>
            </td>
            <td colspan="1" align="center"
                height="50">
            </td>
            <td class = "tdF" align="center" height="50">  </td>
            <td class = "tdF" align="center" height="50">  </td>
            <td class = "tdF" align="center" height="50"> </td>
            <td class = "tdF" align="center" height="50">  </td>
            <td class = "tdF" align="center" height="50">  </td>
            <td class = "tdF" align="center" height="50">  </td>
        </tr>
        <tr>
            <h1>
            <td align="center" height="50">
                <b>Saturday</b>
            </td>
            <td class = "tdS" align="center" height="50">  </td>
            <td class = "tdS" align="center" height="50">  </td>
            <td class = "tdS" align="center" height="50">  </td>
            <td class = "tdS" align="center" height="50">  </td>
            <td class = "tdS" align="center" height="50">  </td>
            <td class = "tdS" align="center" height="50">  </td>
            <td class = "tdS" colspan="1" align="center"
                height="50">
            </td>
            <td align="center" height="50"></td>
            </h1>
        </tr>
`)
    ;
    
    


app.use(bodyParser.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({
    extended:true
}))



  


mongoose.connect('mongodb://localhost:27017/test2',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;

db.on('error',()=>console.log("Error in Connecting to Database"));
db.once('open',()=>console.log("Connected to Database"))

var duplicate = false



//if the name is the same it updates information
//only requires the name to update
async function smallPause() {
    //console.log('start timer');
    await new Promise(resolve => setTimeout(resolve, 1000));
    //console.log('after 1 second');
  }
app.post("/sign_up",(req,res)=>{
    var name = req.body.name;
    var removeName = req.body.removeName
    //update entry
    const remove = async () => {
        if(req.body.removeName) {
            db.collection('users').find().toArray(function(err, collection) {
                const collectionArray = Object.values(collection);
                for (let i = 0; i < collection.length; i++) {
                    //console.log(req.body.removeName)
                    if(req.body.removeName == Object.values(collectionArray[i])[1]) {
                        Object.values((collectionArray)[i])[0]
                        var user_id = Object.values(collectionArray[i])
                        //console.log(Object.values(collectionArray[i][0]))
                        try {
                            var mondayFlag =  false
                            var tuesdayFlag =  false
                            var wednesdayFlag =  false
                            var thursdayFlag =  false
                            var fridayFlag = false
                            var saturdayFlag = false
                            //console.log(collectionArray[i]["_id"])
                            //Delete Method
                            //console.log(collectionArray[i]["schedule"])
                            if(collectionArray[i]["schedule"].indexOf("M:")) {
                                mondayFlag = true
                            }
                            if(collectionArray[i]["schedule"].indexOf("T:")) {
                                var tuesdayFlag =  true
                            }
                            if(collectionArray[i]["schedule"].indexOf("W:")) {
                                var wednesdayFlag =  true
                            }
                            if(collectionArray[i]["schedule"].indexOf("Th:")) {
                                var thursdayFlag =  true
                            }
                            if(collectionArray[i]["schedule"].indexOf("F:")) {
                                var fridayFlag = true
                            }
                            if(collectionArray[i]["schedule"].indexOf("S:")) {
                                var saturdayFlag = true
                            }


                            db.collection('users').deleteOne( { name: req.body.removeName } )
                            //return res.redirect('back');
                            if(mondayFlag) monday()
                            if(tuesdayFlag) tuesday()
                            if(wednesdayFlag) wednesday()
                            if(thursdayFlag) thursday()
                            if(fridayFlag) friday()
                         } catch (e) {
                         }
                         
                    }
                    
                }
            })
        }
    }
    const payroll = async () => {
        db.collection('users').find().toArray(function(err, collection) {
        const collectionArray = Object.values(collection);
        var varSelector = dom.window.document.querySelectorAll(".payrollText")
        varSelector[0].innerHTML = ""
        for(var i = 0; i < collectionArray.length; i++) {
           
            ////console.log(collectionArray[i]["name"])
            if(collectionArray[i]["name"]) {
                varSelector[0].innerHTML += " " +  collectionArray[i]["name"] + "\n\n"
            }
            if(collectionArray[i]["eStatus"]) {
                varSelector[0].innerHTML += "Employment Status: " + collectionArray[i]["eStatus"] + "\n"
            }
            //console.log(varSelector.value)
            if(collectionArray[i]["weeklyHours"]) {
                varSelector[0].innerHTML += " " +  collectionArray[i]["weeklyHours"] + " Hours\n"
            }
            varSelector[0].innerHTML += "Pre-Taxed Salary: " + (collectionArray[i]["weeklyHours"] * 30) + "\n"
            varSelector[0].innerHTML += "Total Taxes Deducted: " + (collectionArray[i]["weeklyHours"] * 13) + "\n"
            varSelector[0].innerHTML += "After-Tax income: " + (collectionArray[i]["weeklyHours"] * 17) + "\n"
            console.log(varSelector[0].innerHTML)
            //console.log(varSelector[0].innerHTML)

            }
        }

    )}
    const task = async () => {
    db.collection('users').find().toArray(function(err, collection) {
        const collectionArray = Object.values(collection);
        
        for (let i = 0; i < collection.length; i++) {
            if(Object.values(collectionArray)[i]["name"] == name) {
                duplicate = true
            }
        }
    if(duplicate) {
        if(req.body.eStatus) { 
            var eStatus = req.body.eStatus; 
            db.collection('users').update( { name: req.body.name },{ $set: {"eStatus": eStatus}});
        }
        if(req.body.weeklyHours) { 
            var weeklyHours = req.body.weeklyHours; 
            db.collection('users').update( { name: req.body.name },{ $set: {"weeklyHours": weeklyHours}});
        }
        if(req.body.salary) { 
            var salary = req.body.salary; 
            db.collection('users').update( { name: req.body.name },{ $set: {"salary": salary}});
        }
        if(req.body.schedule) { 
            var schedule = req.body.schedule; 
            db.collection('users').update( { name: req.body.name },{ $set: {"schedule": schedule}});
        }

        var data = {
            "name": name,
            "eStatus" : eStatus,
            "weeklyHours": weeklyHours,
            "salary" : salary,
            "schedule" : schedule
        
        }
        duplicate = false
            smallPause()
            return res.redirect('back');
    }

    else {
        if(req.body.eStatus) { var eStatus = req.body.eStatus; }
        else {
            eStatus = ""
        }
        if(req.body.weeklyHours) { var weeklyHours = req.body.weeklyHours; }
        else {
            weeklyHours = ""
        }
        if(req.body.salary) { var salary = req.body.salary; }

        else {
            salary = ""
        }

        if(req.body.schedule) { var schedule = req.body.schedule; }
        
        else {
            schedule = ""
        }

        var data = {
            "name": name,
            "eStatus" : eStatus,
            "weeklyHours": weeklyHours,
            "salary" : salary,
            "schedule" : schedule
        
        }
        db.collection('users').insertOne(data,(err,collection)=>{
            if(err){
                throw err;
            }
            console.log("Record Inserted Successfully");
        });
        smallPause()
        return res.redirect('back');
            };
        });
    }
async function monday() {
    db.collection('users').find().toArray(function(err, collection) {
    const collectionArray = Object.values(collection);
    var mondayArray = []

    var tempVal = ""
    for (let i = 0; i < collection.length; i++) {
        const str = Object.values(collectionArray)[i].schedule
        if(str.indexOf("M:") == -1)
            continue
        var firstNum = 0
        var secondNum = 0
        var postDash = false
        var totalIndices = 0
        
        for(let j = 0; j < str.length; j++) {
            //console.log(j)
            if(!isNaN(str[j])) {
                if(!postDash && str[j])   {
                    firstNum +=str[j];
                }
            }
            if(!isNaN(str[j]) && postDash) {
                secondNum += str[j]
            }
            if(str[j] == '-') {
                postDash = true
            }
            if(postDash && str[j].match(/[a-z]/i)) {
                break
                }
            }

            totalIndices = secondNum - firstNum
            db.collection('users').update( { name: Object.values(collectionArray)[i].name },{ $set: {"weeklyHours": totalIndices}});
            Object.values(collectionArray)[i].weeklyHours += totalIndices
                tempVal = Object.values(collectionArray)[i].name
                for(let k = 0; k < totalIndices;k++) {
                    if(mondayArray[firstNum-9+k] != null) {
                        mondayArray[firstNum-9+k] += "/" + tempVal
                    }
                    else  {
                        mondayArray[firstNum-9+k] = tempVal
                    }
                    
                }
            }
        mondayArray = Object.keys(mondayArray).sort().reduce((accumulator, key) => {
            accumulator[key] =  mondayArray[key];
        
            return accumulator;
          }, {});
        var varSelector = dom.window.document.querySelectorAll(".tdM");
        //console.log(Object.values(mondayArray).length)
        for(let i = 0; i < Object.values(mondayArray).length; i++) {
            //=console.log(typeof(Object.keys(mondayArray)[i]))
            if(i < 6)
                varSelector[parseInt(Object.keys(mondayArray)[i])].innerHTML = Object.values(mondayArray)[i]

            }
        
    })
        
    
    }
    async function tuesday() {
        db.collection('users').find().toArray(function(err, collection) {
        const collectionArray = Object.values(collection);
        var tuesdayArray = []
    
        var tempVal = ""
        for (let i = 0; i < collection.length; i++) {
            const str = Object.values(collectionArray)[i].schedule
            if(str.indexOf("T:") == -1)
                continue
            var firstNum = 0
            var secondNum = 0
            var postDash = false
            var totalIndices = 0
            var startflag = false
            for(let j = 0; j < str.length; j++) {
                if(str[j] != "T" && str[j+1] !=":" && !startflag) {
                    continue
                }
                 else {
                    startflag = true
                 }
                if(!isNaN(str[j])) {
                    if(!postDash && str[j])   {
                        firstNum +=str[j];
                    }
                }
                if(!isNaN(str[j]) && postDash) {
                    secondNum += str[j]
                }
                if(str[j] == '-') {
                    postDash = true
                }
                if(postDash && str[j].match(/[a-z]/i)) {
                    break
                    }
                }
    
                totalIndices = secondNum - firstNum
                db.collection('users').update( { name: Object.values(collectionArray)[i].name },{ $set: {"weeklyHours": totalIndices}});
                    tempVal = Object.values(collectionArray)[i].name
                    for(let k = 0; k < totalIndices;k++) {
                        if(tuesdayArray[firstNum-9+k] != null) {
                            tuesdayArray[firstNum-9+k] += "/" + tempVal
                        }
                        else  {
                            tuesdayArray[firstNum-9+k] = tempVal
                        }
                        
                    }
                }
            tuesdayArray = Object.keys(tuesdayArray).sort().reduce((accumulator, key) => {
                accumulator[key] =  tuesdayArray[key];
            
                return accumulator;
              }, {});
            var varSelector = dom.window.document.querySelectorAll(".tdT");
            for(let i = 0; i < Object.values(tuesdayArray).length; i++) {
                if(i < 6)
                    varSelector[parseInt(Object.keys(tuesdayArray)[i])].innerHTML = Object.values(tuesdayArray)[i]
    
                }
            
        })
            
        
        }
        async function wednesday() {
            db.collection('users').find().toArray(function(err, collection) {
            const collectionArray = Object.values(collection);
            var wednesdayArray = []
        
            var tempVal = ""
            for (let i = 0; i < collection.length; i++) {
                const str = Object.values(collectionArray)[i].schedule
                if(str.indexOf("W:") == -1)
                    continue
                var firstNum = 0
                var secondNum = 0
                var postDash = false
                var totalIndices = 0
                var startflag = false
                for(let j = 0; j < str.length; j++) {
                    if(str[j] != "T" && str[j+1] !=":" && !startflag) {
                        continue
                    }
                     else {
                        startflag = true
                     }
                    if(!isNaN(str[j])) {
                        if(!postDash && str[j])   {
                            firstNum +=str[j];
                        }
                    }
                    if(!isNaN(str[j]) && postDash) {
                        secondNum += str[j]
                    }
                    if(str[j] == '-') {
                        postDash = true
                    }
                    if(postDash && str[j].match(/[a-z]/i)) {
                        break
                        }
                    }
        
                    totalIndices = secondNum - firstNum
                    db.collection('users').update( { name: Object.values(collectionArray)[i].name },{ $set: {"weeklyHours": totalIndices}});
                        tempVal = Object.values(collectionArray)[i].name
                        for(let k = 0; k < totalIndices;k++) {
                            if(wednesdayArray[firstNum-9+k] != null) {
                                wednesdayArray[firstNum-9+k] += "/" + tempVal
                            }
                            else  {
                                wednesdayArray[firstNum-9+k] = tempVal
                            }
                            
                        }
                    }
                    wednesdayArray = Object.keys(wednesdayArray).sort().reduce((accumulator, key) => {
                    accumulator[key] =  wednesdayArray[key];
                
                    return accumulator;
                  }, {});
                var varSelector = dom.window.document.querySelectorAll(".tdW");
                for(let i = 0; i < Object.values(wednesdayArray).length; i++) {
                    if(i < 6)
                        varSelector[parseInt(Object.keys(wednesdayArray)[i])].innerHTML = Object.values(wednesdayArray)[i]
        
                    }
                
            })
                
            
            }
            async function thursday() {
                db.collection('users').find().toArray(function(err, collection) {
                const collectionArray = Object.values(collection);
                var thursdayArray = []
            
                var tempVal = ""
                for (let i = 0; i < collection.length; i++) {
                    const str = Object.values(collectionArray)[i].schedule
                    if(str.indexOf("Th:") == -1)
                        continue
                    var firstNum = 0
                    var secondNum = 0
                    var postDash = false
                    var totalIndices = 0
                    var startflag = false
                    for(let j = 0; j < str.length; j++) {
                        if(str[j] != "T" && str[j+1] !="h" &&  str[j+2] != ":" && !startflag) {
                            continue
                        }
                         else {
                            startflag = true
                         }
                        if(!isNaN(str[j])) {
                            if(!postDash && str[j])   {
                                firstNum +=str[j];
                            }
                        }
                        if(!isNaN(str[j]) && postDash) {
                            secondNum += str[j]
                        }
                        if(str[j] == '-') {
                            postDash = true
                        }
                        if(postDash && str[j].match(/[a-z]/i)) {
                            break
                            }
                        }
            
                        totalIndices = secondNum - firstNum
                        //console.log(Object.values(collectionArray)[i].weeklyHours)
                        db.collection('users').update( { name: Object.values(collectionArray)[i].name },{ $set: {"weeklyHours": totalIndices}});
                            tempVal = Object.values(collectionArray)[i].name
                            for(let k = 0; k < totalIndices;k++) {
                                if(thursdayArray[firstNum-9+k] != null) {
                                    Array[firstNum-9+k] += "/" + tempVal
                                }
                                else  {
                                    thursdayArray[firstNum-9+k] = tempVal
                                }
                                
                            }
                        }
                        thursdayArray = Object.keys(thursdayArray).sort().reduce((accumulator, key) => {
                        accumulator[key] =  thursdayArray[key];
                    
                        return accumulator;
                      }, {});
                    var varSelector = dom.window.document.querySelectorAll(".tdTh");
                    for(let i = 0; i < Object.values(thursdayArray).length; i++) {
                        if(i < 6)
                            varSelector[parseInt(Object.keys(thursdayArray)[i])].innerHTML = Object.values(thursdayArray)[i]
            
                        }
                    
                })
                    
                
                }
                async function friday() {
                    db.collection('users').find().toArray(function(err, collection) {
                    const collectionArray = Object.values(collection);
                    var fridayArray = []
                
                    var tempVal = ""
                    for (let i = 0; i < collection.length; i++) {
                        const str = Object.values(collectionArray)[i].schedule
                        if(str.indexOf("F:") == -1)
                            continue
                        var firstNum = 0
                        var secondNum = 0
                        var postDash = false
                        var totalIndices = 0
                        var startflag = false
                        for(let j = 0; j < str.length; j++) {
                            if(str[j] != "F" && str[j+1] !=":" && !startflag) {
                                continue
                            }
                             else {
                                startflag = true
                             }
                            if(!isNaN(str[j])) {
                                if(!postDash && str[j])   {
                                    firstNum +=str[j];
                                }
                            }
                            if(!isNaN(str[j]) && postDash) {
                                secondNum += str[j]
                            }
                            if(str[j] == '-') {
                                postDash = true
                            }
                            if(postDash && str[j].match(/[a-z]/i)) {
                                break
                                }
                            }
                
                            totalIndices = secondNum - firstNum
                            db.collection('users').update( { name: Object.values(collectionArray)[i].name },{ $set: {"weeklyHours": totalIndices}});
                                tempVal = Object.values(collectionArray)[i].name
                                for(let k = 0; k < totalIndices;k++) {
                                    if(fridayArray[firstNum-9+k] != null) {
                                        fridayArray[firstNum-9+k] += "/" + tempVal
                                    }
                                    else  {
                                        fridayArray[firstNum-9+k] = tempVal
                                    }
                                    
                                }
                            }
                            fridayArray = Object.keys(fridayArray).sort().reduce((accumulator, key) => {
                            accumulator[key] =  fridayArray[key];
                        
                            return accumulator;
                          }, {});
                        var varSelector = dom.window.document.querySelectorAll(".tdF");
                        for(let i = 0; i < Object.values(fridayArray).length; i++) {
                            if(i < 6)
                                varSelector[parseInt(Object.keys(fridayArray)[i])].innerHTML = Object.values(fridayArray)[i]
                
                            }
                        
                    })
                        
                    
                    }
                    async function saturday() {
                        db.collection('users').find().toArray(function(err, collection) {
                        const collectionArray = Object.values(collection);
                        var saturdayArray = []
                    
                        var tempVal = ""
                        for (let i = 0; i < collection.length; i++) {
                            const str = Object.values(collectionArray)[i].schedule
                            if(str.indexOf("S:") == -1)
                                continue
                            var firstNum = 0
                            var secondNum = 0
                            var postDash = false
                            var totalIndices = 0
                            var startflag = false
                            for(let j = 0; j < str.length; j++) {
                                if(str[j] != "S" && str[j+1] !=":" && !startflag) {
                                    continue
                                }
                                 else {
                                    startflag = true
                                 }
                                if(!isNaN(str[j])) {
                                    if(!postDash && str[j])   {
                                        firstNum +=str[j];
                                    }
                                }
                                if(!isNaN(str[j]) && postDash) {
                                    secondNum += str[j]
                                }
                                if(str[j] == '-') {
                                    postDash = true
                                }
                                if(postDash && str[j].match(/[a-z]/i)) {
                                    break
                                    }
                                }
                    
                                totalIndices = secondNum - firstNum
                                db.collection('users').update( { name: Object.values(collectionArray)[i].name },{ $set: {"weeklyHours": totalIndices}});
                                    tempVal = Object.values(collectionArray)[i].name
                                    for(let k = 0; k < totalIndices;k++) {
                                        if(saturdayArray[firstNum-9+k] != null) {
                                            saturdayArray[firstNum-9+k] += "/" + tempVal
                                        }
                                        else  {
                                            saturdayArray[firstNum-9+k] = tempVal
                                        }
                                        
                                    }
                                }
                                saturdayArray = Object.keys(saturdayArray).sort().reduce((accumulator, key) => {
                                accumulator[key] =  saturdayArray[key];
                            
                                return accumulator;
                              }, {});
                            var varSelector = dom.window.document.querySelectorAll(".tdS");
                            for(let i = 0; i < Object.values(saturdayArray).length; i++) {
                                if(i < 6)
                                    varSelector[parseInt(Object.keys(saturdayArray)[i])].innerHTML = Object.values(saturdayArray)[i]
                    
                                }
                            
                        })
                            
                        
                        }
    task()
    payroll()
    remove()
    monday()
    tuesday()
    wednesday()
    thursday()
    friday()
    saturday()
})




app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('back');
}).listen(3000);


console.log("Listening on PORT 3000");