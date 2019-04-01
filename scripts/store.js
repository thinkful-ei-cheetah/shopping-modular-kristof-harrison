'use strict';
/*global cuid Item*/


const store = ( function (){
  const items= [
    // { id: cuid(), name: 'apples', checked: false },
    // { id: cuid(), name: 'oranges', checked: false },
    // { id: cuid(), name: 'milk', checked: true },
    // { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems= false;
  let searchTerm= '';

  function findById(id){
    return this.items.find(item => item.id === id);
  }


  function addItem (name){
    try{
      Item.validateName(name);
      this.items.push(Item.create(name));
    } catch (e){
      console.error(e.message);
    }
  }

  function findAndToggleChecked(id) {
    const item = this.findById(id);
    item.checked = !item.checked;
  }

  function findAndUpdateName(id, newName){
    try{
      Item.validateName(newName);
      const item = this.findById(id);
      item.name = newName;
    } catch (e){
      console.error(e.message);
    }
  }

  function findAndDelete (id){
    this.items =  this.items.filter(item => item.id !== id);
  }

  return{
    items,
    hideCheckedItems,
    searchTerm,
    findAndDelete,
    addItem,
    findAndToggleChecked,
    findById,
    findAndUpdateName,
  };
}() );