import Title from '../components/Title';
import Counter from '../components/Counter';
import useCountDown from '../hooks/useCountDown';
import { useContext } from 'react';
import { CountdownContext } from '../context/CountdownContext';
import { Navigate } from 'react-router-dom';

const Countdown = () => {
    const {event} = useContext(CountdownContext)

    if(!event) return <Navigate to={"/"}/>

    const eventTitle = event.title
    const eventColor = event.color
    const [day, hour, minute, second] = useCountDown(event.date)

    return (
        <>
            <Title title={eventTitle}/>
            <div className="countdown-container">
                <Counter title={"Dias"} number={day} />
                <Counter title={"Horas"} number={hour} />
                <Counter title={"Minutos"} number={minute} />
                <Counter title={"Segundos"} number={second} />
            </div>
        </>
    )
}

export default Countdown