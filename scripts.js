function Order(number, book) {
  this.number = number;
  this.book = book;

}
Order.prototype.fullorder = function () {
  var fullorder = ((this.book) * this.number);
  return fullorder;
}

$(document).ready(function () {
  $("#grade1Cre").click(function () {
    event.preventDefault();
    var inputtedNumber = 2;
    var selectedBookName = "Grade-1 CRE";
    var selectedBookPrice = parseInt($("#grade1Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade1Environ").click(function () {
    var inputtedNumber =4
    var selectedBookName = "Grade-1 ENVIRONMENAL STUDIES";
    var selectedBookPrice = parseInt($("#grade1Environ").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade1Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-1 ENGLISH";
    var selectedBookPrice = parseInt($("#grade1Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade1Mvmnt").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-1 Movement";
    var selectedBookPrice = parseInt($("#grade1Mvmnt").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade1Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-1 MATHEMATICS";
    var selectedBookPrice = parseInt($("#grade1Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade1Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-1 KISWAHILI";
    var selectedBookPrice = parseInt($("#grade1Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade1Hygiene").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-1 HYGIENE";
    var selectedBookPrice = parseInt($("#grade1Hygiene").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade2Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-2 CRE";
    var selectedBookPrice = parseInt($("#grade2Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade2Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-2 ENGLISH";
    var selectedBookPrice = parseInt($("#grade2Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade2Environ").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-2 ENVIROMENTAL STUDIES";
    var selectedBookPrice = parseInt($("#grade2Environ").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade2Hygiene").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-2 HYGIENE";
    var selectedBookPrice = parseInt($("#grade2Hygiene").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade2Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-2 KISWAHILI";
    var selectedBookPrice = parseInt($("#grade2Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade2Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-2 MATHEMATICS";
    var selectedBookPrice = parseInt($("#grade2Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 CRE";
    var selectedBookPrice = parseInt($("#grade3Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Arts").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 ARTS";
    var selectedBookPrice = parseInt($("#grade3Arts").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Hygiene").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 HYGIENE";
    var selectedBookPrice = parseInt($("#grade3Hygiene").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 ENGLISH";
    var selectedBookPrice = parseInt($("#grade3Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Environ").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 ENVIRONMENTAL STUDIES";
    var selectedBookPrice = parseInt($("#grade3Environ").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 KISWAHILI";
    var selectedBookPrice = parseInt($("#grade3Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 MATHEMATIC";
    var selectedBookPrice = parseInt($("#grade3Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#grade3Mvmnt").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Grade-3 MOVEMENT";
    var selectedBookPrice = parseInt($("#grade1Mvmnt").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  var$("#class4Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-4 CRE";
    var selectedBookPrice = parseInt($("#class4Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class4Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-4 ENGLISH";
    var selectedBookPrice = parseInt($("#class4Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class4Homescie").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-4 HOMESCIENCE";
    var selectedBookPrice = parseInt($("#class4Homescie").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class4Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-4 KISWAHILI";
    var selectedBookPrice = parseInt($("#Class4Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class4Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-4 MATHEMATICS";
    var selectedBookPrice = parseInt($("#class4Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class4Scie").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-4 SCIENCE";
    var selectedBookPrice = parseInt($("#class4Scie").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class4Social").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-4 Social";
    var selectedBookPrice = parseInt($("#class4Social").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class5Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-5 CRE";
    var selectedBookPrice = parseInt($("#class5Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  var$("#class5Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-5 ENGLISH";
    var selectedBookPrice = parseInt($("#class5Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class5Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-5 KISWAHILI";
    var selectedBookPrice = parseInt($("#class5Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class5Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-5 MATHEMATICS";
    var selectedBookPrice = parseInt($("#class5Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class5Scie").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-5 SCIENCE";
    var selectedBookPrice = parseInt($("#class5Social").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class5Social").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-5 SOCIAL STUDIES";
    var selectedBookPrice = parseInt($("#class5Social").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class6Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-6 CRE";
    var selectedBookPrice = parseInt($("#class6Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class6Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-6 ENGLISH";
    var selectedBookPrice = parseInt($("#class6Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class6Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-6 KISWAHILI";
    var selectedBookPrice = parseInt($("#class6Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class6Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-6 MATHEMATICS";
    var selectedBookPrice = parseInt($("#class6Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class6Scie").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-6 SCIENCE";
    var selectedBookPrice = parseInt($("#class6Scie").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class6Social").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-6 SOCIAL STUDIES";
    var selectedBookPrice = parseInt($("#class6Social").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class7Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-7 CRE";
    var selectedBookPrice = parseInt($("#class7Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class7Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-7 ENGLISH";
    var selectedBookPrice = parseInt($("#class7Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  var$("#class7Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-7 KISWAHILI";
    var selectedBookPrice = parseInt($("#Class7Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class7Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-7 MATHEMATICS";
    var selectedBookPrice = parseInt($("#class7Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class7Scie").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-7 SCIENCE";
    var selectedBookPrice = parseInt($("#class7Scie").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class7Social").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-7 SOCIAL STUDIES";
    var selectedBookPrice = parseInt($("#class7Social").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class8Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-8 CRE";
    var selectedBookPrice = parseInt($("#class8Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  var$("#class8Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-8 ENGLISH";
    var selectedBookPrice = parseInt($("#class8Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class8Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-8 MATHEMATICS";
    var selectedBookPrice = parseInt($("#class8Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class8Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-8 KISWAHILI";
    var selectedBookPrice = parseInt($("#class8Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class8Scie").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-8 SCIENCE";
    var selectedBookPrice = parseInt($("#class8Scie").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#class8Social").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Class-8 SOCIAL STUDIES";
    var selectedBookPrice = parseInt($("#class8Social").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Agric").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 AGRICULTURE";
    var selectedBookPrice = parseInt($("#form1Agric").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Bio").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 BIOLOGY";
    var selectedBookPrice = parseInt($("#form1Bio").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Bus").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 BUSINESS STUDIES";
    var selectedBookPrice = parseInt($("#form1Bus").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Chem").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 CHEMISTRY";
    var selectedBookPrice = parseInt($("#form1Chem").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Comp").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 COMPUTER STUDIES";
    var selectedBookPrice = parseInt($("#form1Comp").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 CRE";
    var selectedBookPrice = parseInt($("#form1Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 ENGLISH";
    var selectedBookPrice = parseInt($("#form1Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Geo").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 GEOGRAPHY";
    var selectedBookPrice = parseInt($("#form1Geo").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Hist").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 HISTORY & GOVERNMENT";
    var selectedBookPrice = parseInt($("#form1Hist").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 KISWAHILI";
    var selectedBookPrice = parseInt($("#form1Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 Mathematics";
    var selectedBookPrice = parseInt($("#form1Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form1Phy").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-1 PHYSICS";
    var selectedBookPrice = parseInt($("#form1Phy").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Agric").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 AGRICULTURE";
    var selectedBookPrice = parseInt($("#form2Agric").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Bio").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 BIOLOGY";
    var selectedBookPrice = parseInt($("#form2Bio").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Bus").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 BUSINESS STUDIES";
    var selectedBookPrice = parseInt($("#form2Bus").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Chem").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 CHEMISTRY";
    var selectedBookPrice = parseInt($("#form2Chem").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Comp").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 COMPUTER STUDIES";
    var selectedBookPrice = parseInt($("#form2Comp").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 CRE";
    var selectedBookPrice = parseInt($("#form2Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 ENGLISH";
    var selectedBookPrice = parseInt($("#form1Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Geo").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 GEOGRAPHY";
    var selectedBookPrice = parseInt($("#form1Geo").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Hist").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 HISTORY & GOVERNMENT";
    var selectedBookPrice = parseInt($("#form2Hist").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 KISWAHILI";
    var selectedBookPrice = parseInt($("#form2Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 MATHEMATICS";
    var selectedBookPrice = parseInt($("#form2Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form2Phy").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-2 PHYSICS";
    var selectedBookPrice = parseInt($("#form2Phy").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });

  $("#form3Agric").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 AGRICULTURE";
    var selectedBookPrice = parseInt($("#form3Agric").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Bio").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 BIOLOGY";
    var selectedBookPrice = parseInt($("#form3Bio").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Bus").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 BUSINESS STUDIES";
    var selectedBookPrice = parseInt($("#form3Bus").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Chem").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 CHEMISTRY";
    var selectedBookPrice = parseInt($("#form3Chem").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Comp").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 COMPUTER STUDIES";
    var selectedBookPrice = parseInt($("#form3Comp").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 CRE";
    var selectedBookPrice = parseInt($("#form3Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 ENGLISH";
    var selectedBookPrice = parseInt($("#form3Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Geo").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 GEOGRAPHY";
    var selectedBookPrice = parseInt($("#form3Geo").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Hist").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 HISTORY & GOVERNMENT";
    var selectedBookPrice = parseInt($("#form3Hist").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 KISWAHILI";
    var selectedBookPrice = parseInt($("#form3Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 MATHEMATICS";
    var selectedBookPrice = parseInt($("#form3Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form3Phy").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-3 PHYSICS";
    var selectedBookPrice = parseInt($("#form3Phy").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Agric").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 AGRICULTURE";
    var selectedBookPrice = parseInt($("#form4Agric").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Bio").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 BIOLOGY";
    var selectedBookPrice = parseInt($("#form4Bio").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Bus").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 BUSINESS STUDIES";
    var selectedBookPrice = parseInt($("#form4Bus").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Chem").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 CHEMISTRY";
    var selectedBookPrice = parseInt($("#form4Chem").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Comp").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 COMPUTER STUDIES";
    var selectedBookPrice = parseInt($("#form4Comp").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Cre").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 CRE";
    var selectedBookPrice = parseInt($("#form4Cre").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Eng").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 ENGLISH";
    var selectedBookPrice = parseInt($("#form4Eng").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Geo").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 GEOGRAPHY";
    var selectedBookPrice = parseInt($("#form4Geo").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Hist").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 HISTORY & GOVERNMENT";
    var selectedBookPrice = parseInt($("#form4Hist").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Kisw").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 KISWAHILI";
    var selectedBookPrice = parseInt($("#form4Kisw").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Maths").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 MATHEMATICS";
    var selectedBookPrice = parseInt($("#form4Maths").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
  $("#form4Phy").click(function () {
    var inputtedNumber = parseInt($("quantity").val());
    var selectedBookName = "Form-4 PHYSICS";
    var selectedBookPrice = parseInt($("#form4Phy").val());
    var newOrder = new Order(inputtedNumber, selectedBookPrice);
    var tabledata = "<tr><td>" + inputtedNumber + "</td><td>" + selectedBookName + "</td><td>" + selectedBookPrice + "</td><td>" + newOrder.fullorder() + "</td></tr>";
    $('tbody').append(tabledata);
  });
});
$(document).ready(function () {
    $("#grade1Cre,#grade2Cre,#grade3cre,#class4Cre,#class5Cre,#class6Cre,#class7Cre,#class8Cre,#form1Cre,#form2Cre,#form3Cre,#form4Cre,#grade1Eng,#grade2Eng,#grade3Eng,#class4Eng,#class5Eng,#class6Eng,#class7Eng,#class8Eng,#form1Eng,#form2Eng,#form3Eng,#form4Eng,#grade1Kisw,#grade2Kisw,#grade3Kisw,#class4Kisw,#class5Kisw,#class6Kisw,#class7kisw,#class8Kisw,#form1Kisw,#form2Kisw,#form3Kisw,#form4Kisw,#grade1Maths,#grade2Maths,#grade3Maths,#class4Maths,#class5Maths,#class6Maths,#class7Maths,#class8Maths,#form1Maths,#form2Maths,#form3Maths,#form4Maths,#form1Bio,#form2Bio,#form3Bio,#form4Bio,#form1Agric,#form2agric,#form3Agric,#form4agric,#form1Bus,#form2Bus,#form3Bus,#form4Bus,#form1Chem,#form2Chem,#form3Chem,#form4Chem,#form1Comp,#form2Comp,#form3Comp,#form4Comp,#form1Geo,#form2Geo,#form3Geo,#form4Geo,#form1Hist,#form2Hist,#form3Hist,#form4Hist,#form1Phy,#form2Phy,#form3Phy,#form4Phy,#class4Scie,#class5Scie,#class6Scie,#class7Scie,#class8Scie,#class4Social,#class5Social,#class6Social,#class7Social,#class8Social,#grade1Mvmnt,#grade3Mvmnt,#grade1Environ,#grade2Environ,#grade3Environ,#grade1Hygiene,#grade2Hygiene,#grade3Arts").click(function () {
        var theTotal = 0;
        $("td:nth-child(4)").each(function () {
            var val = parseInt($(this).text().replace(" ", "").replace(",-", ""));
            if (!isNaN(val))
            theTotal += parseInt(val);
        });
        $("#columnTotal").html('<td colspan="3">' + theTotal + '/= </td>');
    });
      $("button").click(function(){
        $('#classModal').modal('show');
    });
});
 


