import { Droppable, Draggable } from 'react-beautiful-dnd'
import Quote from '../quote/Quote'
import './Column.css';

const Column = ({ title, quotes }) => {
  return (
    <div className="character-column">
        <h3 className="character-title">{title}</h3>
        <hr className='line' />
        <Droppable droppableId={title} type='dropppable'> 
          {(provided) => { return  (
            <div 
              {...provided.droppableProps} 
              ref={provided.innerRef}
            >
              {quotes.map((quote, index) => (
                <Draggable 
                  key={quote.id} 
                  draggableId={quote.id} 
                  index={index} 
                  >
                  {(provided) => { return (
                    <div
                      className='quote-container'
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      >
                        <Quote 
                          id={quote.id}
                          name={quote.name}
                          title={quote.title}
                          thumb={quote.thumb}
                      />
                    </div>
                  )}}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}}
        </Droppable>
    </div>
  )
}

export default Column
