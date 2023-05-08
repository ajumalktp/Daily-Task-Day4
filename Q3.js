function getMiddle(str)
{
  let middleIndex = Math.floor(str.length / 2);
  if (str.length % 2 === 0) {
    return str.substring(middleIndex - 1, middleIndex + 1);
  } else {
    return str.charAt(middleIndex);
  }

}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
