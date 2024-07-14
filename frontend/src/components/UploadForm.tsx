import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {ThunkDispatch} from "@reduxjs/toolkit";
import { saveItem } from '../features/inventory/inventorySlice';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { read, utils, WorkBook } from 'xlsx';
//import { uploadItems } from '../features/itemsSlice'; // Assuming you have a slice for items

type Item = {
  //id: number,
  name: string,
  quantity: number,
  price: number,
  unit_cost: number,
  expirery: string
}

const UploadForm = ({ clicked, setClicked }: {clicked:boolean, setClicked: (value: boolean) => void}) => {

  const [file, setFile] = useState<File | null>(null);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleFileUpload = () => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer);
      const workbook: WorkBook = read(data, { type: 'array' });

      // Assuming the first sheet is the one we need
      const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
      const items = utils.sheet_to_json<string[]>(firstSheet, { header: 1 });

      // Process items and dispatch them
      const formattedItems: Item[] = items.slice(1).map((item: string[]) => ({
        name: item[0],
        quantity: Number(item[1]),
        price: Number(item[2]),
        unit_cost: Number(item[3]),
        expirery: item[3],
      }));

      // Dispatch the async thunk to upload the items
      dispatch(uploadItems(formattedItems));
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div>
    <Form.Group controlId="formFile" className="mb-3">
      <Col sm={12}>
        <Form.Control type="file" accept=".xlsx, .xls" onChange={handleFileChange} />
      </Col>
    </Form.Group>      
    <button onClick={handleFileUpload}>Upload</button>
    </div>
  );
}

export default UploadForm;