function calculate() {
  var chi = "";
  var zod = "";
  let myname = document.getElementById("fname").value;
  let month = parseInt(document.getElementById("month").value);
  let date = parseInt(document.getElementById("date").value);
  let year = parseInt(document.getElementById("year").value);

  switch (year) {
    case 1921:
    case 1933:
    case 1945:
    case 1957:
    case 1969:
    case 1981:
    case 1993:
    case 2005:
    case 2017:
      chi = "Rooster";
      break;
    case 1922:
    case 1934:
    case 1946:
    case 1958:
    case 1970:
    case 1982:
    case 1994:
    case 2006:
    case 2018:
      chi = "Dog";
      break;
    case 1923:
    case 1935:
    case 1947:
    case 1959:
    case 1971:
    case 1983:
    case 1995:
    case 2007:
    case 2019:
      chi = "Pig";
      break;
    case 1924:
    case 1936:
    case 1948:
    case 1960:
    case 1972:
    case 1984:
    case 1996:
    case 2008:
    case 2020:
      chi = "Rat";
      break;
    case 1925:
    case 1937:
    case 1949:
    case 1961:
    case 1973:
    case 1985:
    case 1997:
    case 2009:
    case 2021:
      chi = "Ox";
      break;
    case 1926:
    case 1938:
    case 1950:
    case 1962:
    case 1974:
    case 1986:
    case 1998:
    case 2010:
    case 2022:
      chi = "Tiger";
      break;
    case 1927:
    case 1939:
    case 1951:
    case 1963:
    case 1975:
    case 1987:
    case 1999:
    case 2011:
    case 2023:
      chi = "Rabbit";
      break;
    case 1928:
    case 1940:
    case 1952:
    case 1964:
    case 1976:
    case 1988:
    case 2000:
    case 2012:
    case 2024:
      chi = "Dragon";
      break;
    case 1928:
    case 1941:
    case 1953:
    case 1965:
    case 1977:
    case 1989:
    case 2001:
    case 2013:
    case 2025:
      chi = "Snake";
      break;
    case 1942:
    case 1954:
    case 1966:
    case 1978:
    case 1990:
    case 2002:
    case 2014:
    case 2026:
      chi = "Horse";
      break;
    case 1943:
    case 1955:
    case 1967:
    case 1979:
    case 1991:
    case 2003:
    case 2015:
    case 2027:
      chi = "Goat";
      break;
    case 1944:
    case 1956:
    case 1968:
    case 1980:
    case 1992:
    case 2004:
    case 2016:
    case 2028:
      chi = "Monkey";
      break;

    default:
      chi = "Your birth year does not have a Chinese Zodiac sign.";
  }

  switch (month) {
    case 1:
      switch (date) {
        case date < 21:
          zod = "Capricorn";
          break;
        default:
          zod = "Aquarius";
          break;
      }
      break;
    case 2:
      switch (date) {
        case date < 19:
          zod = "Aquarius";
          break;
        default:
          zod = "Pisces";
          break;
      }
      break;
    case 3:
      switch (date) {
        case date < 21:
          zod = "Pisces";
          break;
        default:
          zod = "Aries";
          break;
      }
      break;
    case 4:
      switch (date) {
        case date < 20:
          zod = "Aries";
          break;
        default:
          zod = "Taurus";
          break;
      }
      break;
    case 5:
      switch (date) {
        case date < 21:
          zod = "Taurus";
          break;
        default:
          zod = "Gemini";
          break;
      }
      break;
    case 6:
      switch (date) {
        case date < 21:
          zod = "Gemini";
          break;
        default:
          zod = "Cancer";
          break;
      }
      break;
    case 7:
      switch (date) {
        case date < 23:
          zod = "Cancer";
          break;
        default:
          zod = "Leo";
          break;
      }
      break;
    case 8:
      switch (date) {
        case date < 23:
          zod = "Leo";
          break;
        default:
          zod = "Virgo";
          break;
      }
      break;
    case 9:
      switch (date) {
        case date < 23:
          zod = "Virgo";
          break;
        default:
          zod = "Libra";
          break;
      }
      break;
    case 10:
      switch (date) {
        case date < 23:
          zod = "Libra";
          break;
        default:
          zod = "Scorpio";
          break;
      }
      break;
    case 11:
      switch (date) {
        case date < 22:
          zod = "Scorpio";
          break;
        default:
          zod = "Sagittarius";
          break;
      }
      break;
    case 12:
      switch (date) {
        case date < 21:
          zod = "Sagittarius";
          break;
        default:
          zod = "Capricorn";
          break;
      }
      break;
    default:
      zod = "Incorrect month format";
  }

  document.getElementById("nameout").innerHTML = myname;
  document.getElementById("chinese").innerHTML =
    "Your Chinese zodiac sign is: " + chi;
  document.getElementById("zodiac").innerHTML = "Your zodiac sign is: " + zod;
}
