import { useNavigate } from 'react-router-dom';

import { AiOutlineCheck } from 'react-icons/ai';

import classes from './styles/search-form.module.scss';

export default function Hero() {
    const navigate = useNavigate();

    function searchClickHandler() {
        navigate('/search-for-deals');
    }

    return (
        <section className={classes['hero']}>
            <div className={classes['hero__container']}>
                <div className={classes['hero__intro']}>
                    <h1>Car Trawler - Search, Compare & Save</h1>
                    <ul>
                        <li><span><AiOutlineCheck /></span> Free cancellation on most bookings</li>
                        <li><span><AiOutlineCheck /></span> 60,000 locations</li>
                        <li><span><AiOutlineCheck /></span> Customer support in 40+ languages</li>
                    </ul>
                </div>
                <div className={classes['hero__search-form']}>
                    <form>
                        <div className={classes['hero__search-form--input']}>
                            <label htmlFor="location">Pick-up Location</label>
                            <input type="text" id="location" name="location" disabled value="Las Vegas - Airport" />
                        </div>
                        <div className={classes['hero__search-form--input']}>
                            <label htmlFor="location">Pick-up date</label>
                            <input type="date" id="location" name="location" disabled value="2020-03-22" />
                        </div>
                        <div className={classes['hero__search-form--input']}>
                            <label htmlFor="location">Time</label>
                            <input type="time" id="location" name="location" disabled value="10:00" />
                        </div>
                        <div className={classes['hero__search-form--input']}>
                            <label htmlFor="location">Return date</label>
                            <input type="date" id="location" name="location" disabled value="2020-04-06" />
                        </div>

                        <div className={classes['hero__search-form--input']}>
                            <label htmlFor="location">Time</label>
                            <input type="time" id="location" name="location" disabled value="10:00" />
                        </div>
                        <button type='button' onClick={searchClickHandler}>Search</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

