import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUrgent } from '../features/urgentSlice';
import { fetchItems } from '../features/inventory/inventorySlice';
import { RootState } from '../store';


const Urgent = () => {
    const dispatch = useDispatch();
  //const {inventory, loading, error} = useSelector((state: RootState) => state.inventory)
  const {inventory} = useSelector((state: RootState) => state.inventory)
  const {urgentAttention} = useSelector((state: RootState) => state.urgentAttention)


  // Fetch items on component mount
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  useEffect(() => {
    if (inventory && inventory.length > 0) {
      const currentDate = new Date();
      inventory.map(item => {
        const expiryDate = new Date(item.expirery);
        const differenceInDays = Math.ceil((expiryDate - currentDate) / (1000 * 60 * 60 * 24));
        if (differenceInDays <= 30 ){
            dispatch(addUrgent(item))
        }
      }
    );
      //dispatch(setUrgentAttentionItems(itemsNeedingAttention))
      //console.log('Items needing urgent attention:', urgentAttentionItems);
    }
  }, [inventory, dispatch]);

  return (
    <div>
      Urgent
    </div>
  )
}

export default Urgent
