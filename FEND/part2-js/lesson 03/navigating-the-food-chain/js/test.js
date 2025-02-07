function showResult() {
  var output = null;
  ///////////////////////////////////////////////////////////////////////////
  /*************************************************************************/

  /*
   * Programming Quiz - Navigating the Food Chain (3-8)
   *
   * Use a series of ternary operator to set the category to one of the following:
   *   - "herbivore" if an animal eats plants
   *   - "carnivore" if an animal eats animals
   *   - "omnivore" if an animal eats plants and animals
   *   - undefined if an animal doesn't eat plants or animals
   *
   * Notes
   *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
   *   - `if` statements aren't allowed ;-)
   */

  // change the values of `eatsPlants` and `eatsAnimals` to test your code
  var eatsPlants = true;
  var eatsAnimals = false;

  var category =
    eatsAnimals && !eatsPlants ? 'carnivore' :
    eatsPlants && !eatsAnimals ? 'herbivore' :
    eatsPlants && eatsAnimals ? 'omnivore' : undefined;


  output = category;


  /****************************************************************************/
  if (output !== null) {
    console.log(output);
  }
  ////////////////////////////////////////////////////////////////////////////////
  document.getElementById('paragraph1').innerHTML = output;

}
