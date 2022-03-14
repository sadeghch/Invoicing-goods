// let url = "http://94.182.17.30:1229/webkart/eosLogin.aspx";

// (document.getElementsByTagName("input")[10].value = "9090";
// document.getElementsByTagName("input")[11].value = "9090";
// document.getElementsByTagName("input")[12].click();
const btn = document.getElementById("btn");
let button = document.getElementById("tbody");
let sumele = document.getElementById("sum");
let sum = 0;
btn.onclick = function () {
  // const tr = document.createElement("tr");
  // const td = document.createElement("td");
  // td.innerText = productname;
  // tr.appendChild(td);
  // button.appendChild(tr);
  const customer = document.getElementById("customer");

  const productname = document.getElementById("productname");
  const productprice = document.getElementById("productprice");
  const productqty = document.getElementById("productqty");
  let price = productprice.value * productqty.value;
  sum += price;

  let all = "<tr>";
  all += "<td>" + productname.value + "</td>";
  all += "<td>" + productprice.value + "</td>";
  all += "<td>" + productqty.value + "</td>";
  all += "<td>" + price + "</td>";
  all += "</tr>";
  button.innerHTML += all;
  customer.readonly = "readonly";
  customer.disabled = "disabled";

  productname.value = "";
  productprice.value = "";
  productqty.value = "";

  sumele.innerText = " مجموع قابل پرداخت " + sum;
};

let printpg = document.getElementById("printpg");
printpg.onclick = function () {
  window.print();
};
