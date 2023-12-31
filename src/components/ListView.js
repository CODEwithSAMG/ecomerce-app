import { NavLink } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const ListView = ({ products }) => {

    return (
        <div className='listview_warpper'>
            <div className='listview_container'>
                {products?.map((curElem) => {
                    const { description, id, image, price, title } = curElem;

                    return (
                        <div key={id} className='card'>
                            <figure>
                                <LazyLoadImage
                                    className='list_view_img'
                                    src={image}
                                    width={250}
                                    height={250}
                                    alt="Image Alt"
                                    effect="blur"
                                />
                            </figure>
                            <div className='card-data'>
                                <h3>{title}</h3>
                                <p>$ {price}</p>
                                <p className='list_view_desc'>{description.slice(0, 160)}....</p>

                                <NavLink to={`/item/${id}`}>
                                    <button className='btn'>Read More</button>
                                </NavLink>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListView;