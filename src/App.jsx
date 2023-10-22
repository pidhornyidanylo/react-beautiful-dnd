import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'

import Column from './components/column/Column'
import { data } from './data'
import './App.css'

function App() {

  const [ stores, setStores ] = useState(data);

  const handleDragDrop = (results) => {
    const { source, destination } = results;
    console.log(source)
    if(!destination) return;
    if(source.droppableId === destination.droppableId && source.index === destination.index) return;

    const storeSourceIndex = stores.findIndex(store => store.id === source.droppableId);
    const destinationIndex = stores.findIndex(store => store.id === destination.droppableId);
    console.log(storeSourceIndex, destinationIndex)
    const newSourceItems = [...stores[storeSourceIndex].quotes];
    const newDestinationItems = source.droppableId !== destination.droppableId ? [...stores[destinationIndex].quotes] : newSourceItems;
    console.log(newSourceItems, newDestinationItems);

    const [deletedItem] = newSourceItems.splice(source.index, 1);
    newDestinationItems.splice(destination.index, 0, deletedItem);

    const newStores = [...stores];

    newStores[storeSourceIndex] = {
      ...stores[storeSourceIndex],
      quotes: newSourceItems
    }

    newStores[destinationIndex] = {
      ...stores[destinationIndex],
      quotes: newDestinationItems
    }

    setStores(newStores);
  }
  
  return (
    <DragDropContext onDragEnd={handleDragDrop}>
      {stores.map(character => (
        <Column 
          key={uuidv4()}
          title={character.id}
          quotes={character.quotes}
        />
      ))}
    </DragDropContext>
  )
}

export default App
