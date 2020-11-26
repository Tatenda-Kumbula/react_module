const add = (a, b) => {
 // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  const user = {
    name: 'Tatenda',
    cities: ['Johannesburg', 'Cape Town', 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };