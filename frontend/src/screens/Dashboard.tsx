import React from 'react'
import { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { fetchItems } from '../features/inventory/inventorySlice';
import { RootState } from '../store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleExclamation, faCircleDollarToSlot, faHandHoldingDollar, faBell, faArrowUp } from '@fortawesome/free-solid-svg-icons'


const Dashboard = () => {
    const [totalSales, setTotalSales] = useState<number | null>(null);
    const [todaySales, setTodaySales] = useState<number | null>(null);

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
    const items = useSelector((state: RootState) => state.inventory)

    // Fetch items on component mount
    useEffect(() => {
        dispatch(fetchItems());
    }, [dispatch]);


   useEffect(() => {
    const total_sales = () => {
        let sum = 0;
        items.inventory.forEach((item) => {
            item.sales.forEach((sale) => {
                let sales_figure = sale.quantity * item.price;
                sum += sales_figure;
            });
        });
        console.log("Total Sales:", sum);
        return sum;
    };

    //const totalSales = total_sales();
    setTotalSales(() => total_sales())
   },[items.inventory])

   useEffect(() => {
    const today_sales = () => {
        const today = new Date(); // Get today's date
        const todayString = today.toISOString().split('T')[0]; // Convert today's date to string in format 'YYYY-MM-DD'

        let sum = 0;
        items.inventory.forEach((item) => {
            item.sales.forEach((sale) => {
                // Extract the date part from the sale date string
                const saleDateString = sale.sale_date.split('T')[0];

                // Check if the sale occurred today
                if (saleDateString === todayString) {
                    let sales_figure = sale.quantity * item.price;
                    sum += sales_figure;
                }
            });
        });
        console.log("Today's Total Sales:", sum);
        return sum;
    };

    //const todaySales = today_sales(); // Calculate today's sales
    setTodaySales(() => today_sales())

}, [items.inventory]);

  return (
    <Container>
        <Row>
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
                            <strong className='fs-2'>{totalSales}</strong>
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
        <Row>
            <Col>
                <Card className='bg-white mr-5 my-5'>
                    <div className='my-3 mx-3'>
                    <div className='position-relative'>
                        <p className='text-secondary'>TODAY'S SALES</p>
                        <FontAwesomeIcon icon={faCircleDollarToSlot} style={{color:"#E79060"}} size="2x" className="position-absolute top-0 end-0"/>
                    </div>
                    <div>
                        <p>
                            <strong className='fs-2'>{todaySales}</strong>
                        </p>
                    </div>
                    <div>
                        <p> <FontAwesomeIcon icon={faArrowUp} style={{color:"#77E711 "}}/> 30% <span className='text-secondary'>since last month</span></p>
                    </div>
                    </div>
                </Card>
            </Col>
        </Row>
        </Row>
    </Container>
  )
}

export default Dashboard