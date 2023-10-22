import './Quote.css'

const Quote = ({ id, name, title, thumb }) => {
  return (
    <div className='quote'>
        <img src={thumb} alt={id} />
        <div className="quote-text">{title}</div>
        <span className='quote-name'>{name}</span>
        <span className='quote-id'>id: {id}</span>
    </div>
  )
}

export default Quote
