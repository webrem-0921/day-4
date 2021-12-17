import { useEffect, useState } from 'react'
import { getAllCoasters } from '../../services/coasters.service'
import CoasterCard from '../CoasterCard/CoasterCard'
import Spinner from '../LoadingSpinner/LoadingSpinner'

import { Row } from 'react-bootstrap'

function CoastersList(props) {

    const [coasters, setCoasters] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => loadList(), [])
    useEffect(() => loadList(), [props.refreshList])


    const loadList = () => {

        getAllCoasters()
            .then(response => {
                setCoasters(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    return isLoading ? <Spinner /> : (
        <Row>
            {coasters.map(coaster => <CoasterCard {...coaster} key={coaster._id} />)}
        </Row>
    )
}

export default CoastersList