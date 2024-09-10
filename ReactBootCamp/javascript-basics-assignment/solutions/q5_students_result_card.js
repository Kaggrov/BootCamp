// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here

let students = []

const generateStudentList = () =>{
    for(let i=0;i<=50;i++){

        const obj = {
            name:`KG${i}`,
            subjectList:[
                {
                    name:'Grammer',
                    score:Math.floor(Math.random() * (100))
                },
                {
                    name:'Accounts',
                    score:Math.floor(Math.random() * (100))
                }
            ]
        };
        students.push(obj);
    }
    for(let i=51;i<100;i++){

        const obj = {
            name:`KG${i}`,
            subjectList:[
                {
                    name:'Grammer',
                    score:Math.floor(Math.random() * (100))
                },
                {
                    name:'Physics',
                    score:Math.floor(Math.random() * (100))
                }
            ]
        };
        students.push(obj);
    }
}

let resultCard = []
const generateReportCard = () => {

    students.map((val)=>{

        let total = 0
        val.subjectList.map((sub)=>{
            total+=sub.score
        })

        let obj = {
            name:val.name,
            percentage:total/val.subjectList.length + " %"
        }

        resultCard.push(obj)


    })
}


generateStudentList()
generateReportCard()
console.log(resultCard)