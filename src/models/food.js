'use strict';

class CrudModels extends CrudModel {
  
  constructor(){
    super();
    this.fields = ['name', 'calories', 'type'];
  }
}

module.exports = CrudModels;