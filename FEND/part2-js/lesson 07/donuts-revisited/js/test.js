function showResult() {
  var output = null;
  ///////////////////////////////////////////////////////////////////////////
  /*************************************************************************/

  /*
   * Programming Quiz: Donuts Revisited (7-6)
   */

  var donuts = [
      { type: "Jelly", cost: 1.22 },
      { type: "Chocolate", cost: 2.45 },
      { type: "Cider", cost: 1.59 },
      { type: "Boston Cream", cost: 5.99 }
  ];

donuts.forEach(function(donut) {
  console.log(donut.type +' donuts cost $' + donut.cost + ' each');
});



  /****************************************************************************/
  if (output !== null) {
    console.log(output);
  }
  ////////////////////////////////////////////////////////////////////////////////
  document.getElementById('paragraph1').innerHTML = output;

}
