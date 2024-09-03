import React from "react";
import './Breadcrum.css'
import { ChevronRight } from "lucide-react";

const Breadcrum = (props) => {
    const { product } = props;

    // Kiểm tra sự tồn tại của product và các thuộc tính của nó
    const category = product?.category || 'Unknown Category';
    const name = product?.name || 'Unknown Product';

    return (
        <div className="breadcrum">
            HOME <ChevronRight /> SHOP <ChevronRight /> {category} <ChevronRight /> {name}
        </div>
    );
}

export default Breadcrum;
