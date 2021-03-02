'use strict';

class CrudModels extends CrudModel {
  
  constructor(){
    this.fields = ['name', 'calories', 'type'];
  }
}

module.exports = CrudModels;