import './styles/car-brands.scss'

import { rentalBrands, rentalPerks } from '../../fixtures/rentalBrands'

export default function CarBrands() {
    return (
        <section className='car-brands'>
            <div className='car-brands__container'>
                <div className='car-brands__rentals'>
                    <h2>Connecting you to the biggest brands in car rental</h2>
                    <div className='car-brands__rentals--images'>
                        {rentalBrands.map((brand) =>
                            <img key={brand.name} src={brand.imageUrl} alt={brand.name} />
                        )}
                    </div>
                </div>
                <div className='car-brands__perks'>
                    {rentalPerks.map((perk) => (
                        <div className='car-brands__perks--feature' key={perk.name}>
                            <div className='car-brands__perks--feature--image'>
                                <img src={perk.imageUrl} alt={perk.name} />
                            </div>
                            <div className='car-brands__perks--feature--content'>
                                <h5>{perk.name}</h5>
                                <p>{perk.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
