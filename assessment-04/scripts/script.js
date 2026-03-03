function loadList() {
  var list = "";
  let i = 1;

  while (i <= 12) {
    switch (i) {
      case 1:
        list += "January: New Years and Martin Luthor King Jr. Day <br>";
        break;
      case 2:
        list += "February: Valentine's Day and Presidents' Day <br>";
        break;
      case 3:
        list += "March: St. Partick's Day and Palm Sunday <br>";
        break;
      case 4:
        list += "April: April Fools Day and Easter Monday <br>";
        break;
      case 5:
        list += "May: Cinco De Mayo and Mother's Day <br>";
        break;
      case 6:
        list += "June: Flag Day and Father's Day <br>";
        break;
      case 7:
        list += "July: Independence Day and Canada Day <br>";
        break;
      case 8:
        list +=
          "August: National Chocolate Chip Cookie Day and National S'mores Day <br>";
        break;
      case 9:
        list += "September: Labor Day and Constitution Day <br>";
        break;
      case 10:
        list += "October: Columbus Day and Halloween <br>";
        break;
      case 11:
        list += "November: Thanksgiving and Veterans Day <br>";
        break;
      case 12:
        list += "December: Christmas and New Years Eve <br>";
        break;
    }
    i++;
  }

  document.getElementById("list").innerHTML = list;
}
