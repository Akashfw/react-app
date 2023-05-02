export default function BookCard(props) {

  let  {img,price,author,year,title} = props
  return (
    <div data-testid='book-card'>
        <img src={img} alt={"image"} />
        <b><div data-testid='book-card-title'>{title}<span>({year})</span></div></b>
        <div data-testid='book-card-author'>{author}</div>
        <div data-testid='book-card-price'>{price}</div>
    </div>
  )
}

