import React from "react";
import List from "../List/List";
import {useSelector} from "react-redux";
import {isEmpty, itemSelector, phaseSelector} from "../../redux/store";
import Card from "../Card/Card";
import LoadMore from "../LoadMore/LoadMore";
import getInfoQuery from "../../functions/getInfoQuery";
import Spinner from "../Spinner/Spinner";
import Error from "../Error/Error";


const Content = React.memo((props) => {
    const items = useSelector(itemSelector);
    const phase = useSelector(phaseSelector);
    React.useEffect(() => {
        const handleCardClick = () => {
            console.log(window.pageYOffset);
            window.localStorage.setItem('scroll', window.pageYOffset)
        }
        const cards = document.querySelectorAll('.card');
        for (let item of cards) {
            item.addEventListener('click', handleCardClick);
        }
        return () => {
            console.log('unmount')
            for (let item of cards) {
                item.removeEventListener('click', handleCardClick)
            }
        }
    });

    React.useEffect(() => {
        window.scrollTo(0, +window.localStorage.getItem('scroll'));
    }, [window.localStorage.getItem('scroll'), getInfoQuery().sortBy, getInfoQuery().category]);


    return (
        phase === 'active' ?
            <div>
                {
                    getInfoQuery().totalItems &&
                    <div style={{textAlign: 'center', fontSize: '20px'}}>{getInfoQuery().totalItems + ' found'}</div>
                }
                <List>
                    {!!items.length && items.map((element, index) => <Card key={index} authors={element.authors}
                                                                           title={element.title}
                                                                           category={element.categories}
                                                                           source={element.image}
                                                                           id={element.id}
                                                                           setRoute={props.setRoute}/>)}
                </List>
                {!!items.length && <LoadMore/>}

            </div> : phase === 'loading' ? <Spinner/> : phase==='error'? <Error/>:null

    )

})

export default Content;