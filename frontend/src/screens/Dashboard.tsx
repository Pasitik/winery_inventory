import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleDollarToSlot, faHandHoldingDollar, faBell, faArrowUp } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Card className='bg-white mr-5 my-5'>
                    <div className='my-3 mx-3'>
                    <div className='position-relative'>
                        <p className='text-secondary'>WARNING</p>
                        <FontAwesomeIcon icon={faCircleExclamation} style={{color:"#ED5D3E"}} size="2x" className="position-absolute top-0 end-0"/>
                    </div>
                    <div>
                        <p>
                            <strong className='fs-2'> 5 </strong>
                        </p>
                    </div>
                    <div>
                    <p className='text-danger'>!urgent attention</p>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card className='bg-white mr-5 my-5'>
                    <div className='my-3 mx-3'>
                    <div className='position-relative'>
                        <p className='text-secondary'>OUT OF STOCK</p>
                        <FontAwesomeIcon icon={faBell} style={{color:"#63ED3E"}} size="2x" className="position-absolute top-0 end-0"/>
                    </div>
                    <div>
                        <p>
                            <strong className='fs-2'> 0 </strong>
                        </p>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card className='bg-white mr-5 my-5'>
                    <div className='my-3 mx-3'>
                    <div className='position-relative'>
                        <p className='text-secondary'>TOTAL SALES</p>
                        <FontAwesomeIcon icon={faCircleDollarToSlot} style={{color:"#E79060"}} size="2x" className="position-absolute top-0 end-0"/>
                    </div>
                    <div>
                        <p>
                            <strong className='fs-2'>346</strong>
                        </p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faArrowUp} style={{color:"#77E711 "}}/> 30% <span className='text-secondary'>since last month</span></p>
                    </div>
                    </div>
                </Card>
            </Col>
            <Col>
                <Card className='bg-white mr-5 my-5'>
                    <div className='my-3 mx-3'>
                    <div className='position-relative'>
                        <p className='text-secondary'>PROFIT/LOSS</p>
                        <FontAwesomeIcon icon={faHandHoldingDollar} style={{color:"#CC6FEA"}} size="2x" className="position-absolute top-0 end-0"/>
                    </div>
                    <div>
                        <p>
                            <strong className='fs-2'>GHC 25600.00 </strong>
                        </p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faArrowUp} style={{color:"#77E711 "}}/> 30% <span className='text-secondary'>since last month</span></p>
                    </div>
                    </div>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Dashboard