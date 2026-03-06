let transactions = localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];
let currectValueEI = localStorage.getItem("currectValueEI") ? parseInt(localStorage.getItem("currectValueEI")) : 0;


let myIncome = document.querySelector("#myIncome");

let valueI = 0
let valueE = 0

function viewHandler() {
    document.querySelector("#ol-1").innerHTML = transactions.map((ele, index) => {
        return `<li style="display: flex; position:relative; right:25px; border: 0px solid white; padding-right:20px;padding-left:20px; justify-content: space-between; align-items: center;  background-color: white;height:30px; border-radius: 15px; margin-top:20px;">
                   ${index+1+'.)'} ${ele.myTransaction} : ${ele.amount} 

                    <div>
                        <button onclick="deleteItem(${index})" style="background-color: transparent;border:none;" ><img style="width:13px;height:13px;"  src="/static/images/SeekPng.com_garbage-can-png_970602(1).png" alt=""></button>
                        <button  onclick="editFunctionI(${index})" style="width:23px;height:20px;border:1px solid white;background-color:transparent;"> <img style="width:13px;height:13px;" src="/static/images/edit.png" alt=""></button> 
                    </div>

                </li>`;
    }).join("");

    localStorage.setItem("transactions", JSON.stringify(transactions));

    localStorage.setItem("currectValueEI", currectValueEI);

    myIncome.textContent = `: ${currectValueEI}`;
    valueI = `${currectValueEI}`

    const MyBalaance = document.querySelector('#MyBalaance').innerHTML = ` ${valueI - valueE}`


}

function deleteItem(index) {

    currectValueEI -= parseInt(transactions[index].amount);
    transactions.splice(index, 1);
    viewHandler();
}

function editFunctionI(index) {
    document.getElementById("Transaction").value = transactions[index].myTransaction
    document.getElementById("amount").value = transactions[index].amount
    document.getElementById("Transaction").focus()
    deleteItem(index)
    viewHandler();
}



document.querySelector("#income").addEventListener("click", () => {
    const myTransaction = document.getElementById("Transaction").value;
    const amount = document.getElementById("amount").value;
    const type = "Income";
    if (myTransaction !== "") {

        transactions.push({ myTransaction: myTransaction, amount: amount, type: type });

        currectValueEI += parseInt(amount);



        viewHandler();

        document.getElementById("Transaction").value = "";

        document.getElementById("Transaction").focus()

        document.getElementById("amount").value = "";
    } else {
        alert("kindly enter any transaction")
    }
});


viewHandler();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


let transactionExpense = localStorage.getItem("transactionExpense") ? JSON.parse(localStorage.getItem("transactionExpense")) : [];
let currectValueE = localStorage.getItem("currectValueE") ? JSON.parse(localStorage.getItem("currectValueE")) : 0;

// let transactions = localStorage.getItem("transactions") ? JSON.parse(localStorage.getItem("transactions")) : [];

const myExpense = document.querySelector("#myExpense");

function viewHandler1() {
    document.querySelector("#ol-2").innerHTML = transactionExpense.map((ele, index) => {
        return `<li style="display: flex; position:relative; right:25px; border: 0px solid white; padding-right:20px;padding-left:20px; justify-content: space-between; align-items: center;  background-color: white;height:30px; border-radius: 15px; margin-top:20px;">
                   ${index+1+'.)'} ${ele.myTransaction} : ${ele.amount} 

                    <div>
                        <button onclick="delteFunction(${index})" style="colour:black;background-color: transparent;border:none;" ><img style="width:13px;height:13px;"  src="/static/images/SeekPng.com_garbage-can-png_970602(1).png" alt=""></button>
                        <button  onclick="editFunction(${index})" style="width:23px;height:20px;border:1px solid white;background-color:transparent;"> <img style="width:13px;height:13px;" src="/static/images/edit.png" alt=""></button> 
                    </div>

                </li>`;
    }).join("");
    // document.querySelector("#ol-2").innerHTML = transactionExpense.map((ele,index)=>{
    //     return`<li style="display: flex;border-bottom: 0px solid black;width: auto;justify-content: center;align-items: center;">
    //     ${ele.myTransaction} ${ele.amount} 
    //     <button onclick="delteFunction(${index})">  <img style="width:13px;height:13px;"  src="SeekPng.com_garbage-can-png_970602(1).png" alt="">
    //     </button> 
    //     <button  onclick="editFunction(${index})"> <img style="width:13px;height:13px;" src="edit.png" alt=""></button> 
    //     </li>`;
    // }).join("");

    localStorage.setItem("transactionExpense", JSON.stringify(transactionExpense));

    localStorage.setItem("currectValueE", JSON.stringify(currectValueE));
    myExpense.textContent = `: ${currectValueE}`
    valueE = ` ${currectValueE}`

    const MyBalaance = document.querySelector('#MyBalaance').innerHTML = `${valueI - valueE}`
}

function delteFunction(index) {
    currectValueE -= parseInt(transactionExpense[index].amount)
    transactionExpense.splice(index, 1)
    viewHandler1()

}
function editFunction(index) {

    document.getElementById("Transaction").value = transactionExpense[index].myTransaction;

    document.getElementById("amount").value = parseInt(transactionExpense[index].amount);

    document.getElementById("Transaction").focus()
    delteFunction(index)
    viewHandler1()

}


// document.querySelector("#Expense").addEventListener("click",()=>{
function myFunction() {

    // alert("adfasdf")
    const myTransaction = document.getElementById("Transaction").value;
    const amount = document.getElementById("amount").value;

    if (myTransaction !== "") {
        // alert("code to chal rha hai bhai")
        transactionExpense.push({ myTransaction: myTransaction, amount: amount });

        currectValueE += parseInt(amount)

        viewHandler1()

    }else if(amount !== ""){
        document.getElementById("Transaction").value = "";
        document.getElementById("Transaction").focus()
        document.getElementById("amount").value = "";

    } 
    else {
        alert("Kindly enter any transaction!!")
    }

}


// });



viewHandler1()
viewHandler();







// console.log(localStorage.getItem("transactions"))