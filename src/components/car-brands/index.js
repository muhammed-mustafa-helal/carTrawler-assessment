import classes from './styles/car-brands.module.scss'

import { rentalBrands, rentalPerks } from '../../utils/fixtures/rentalBrands'

export default function CarBrands() {
    return (
        <section className={classes['car-brands']}>
            <div className={classes['car-brands__container']}>
                <div className={classes['car-brands__rentals']}>
                    <h2>Connecting you to the biggest brands in car rental</h2>
                    <div className={classes['car-brands__rentals--images']}>
                        {rentalBrands.map((brand) =>
                            <img key={brand.id} src={brand.imageUrl} alt={brand.name} />
                        )}
                    </div>
                </div>
                <div className={classes['car-brands__perks']}>
                    {rentalPerks.map((perk) => (
                        <div className={classes['car-brands__perks--feature']} key={perk.id}>
                            <div className={classes['car-brands__perks--feature--image']}>
                                <img src={perk.imageUrl} alt={perk.name} />
                            </div>
                            <div className={classes['car-brands__perks--feature--content']} >
                                <h5>{perk.name}</h5>
                                <p>{perk.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </section >
    )
}
