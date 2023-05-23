/* eslint-disable no-unused-vars */
import MenuItem from '../../shared/menuItem/MenuItem';
import UseMenu from '../../../Hooks/UseMenu';

const Popularmenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular')
    // const [menu, setMenu] = useState([]);
    // console.log(menu);
    // useEffect(() => {
    //     fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             const popularItems = data.filter(item => item.category === 'popular')
    //             setMenu(popularItems)
    //         })

    // }, [])
    return (
        <section className=''>
            <div className='mx-auto text-center md:w-3/12 mb-8'>
                <p className='text-yellow-500 pb-3'>---Check it out---</p>
                <h2 className='text-4xl font-medium border-y-4 py-3'>FROM OUR MENU</h2>
            </div>
            <div className='max-w-6xl mx-auto my-10 grid md:grid-cols-2 gap-12'>
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center mb-8'>
                <button className='btn btn-outline border-0 border-b-2 hover:bg-yellow-500'>View Full Menu</button>
            </div>
        </section>
    );
};

export default Popularmenu;