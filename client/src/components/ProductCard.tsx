import React, { useState } from "react";
import Button from "./Button";
import "./styles/ProductCard.css";

type ProductCardProps = {
    productName: string;
    productPrice: number;
    images: string[];
    pull?: boolean;
    withRemoveButton?: boolean;
    onRemove?: () => void;
};

const ProductCard = ({
    productName,
    productPrice,
    images,
    pull,
    withRemoveButton,
    onRemove,
}: ProductCardProps) => {
    const [imageIndex, setImageIndex] = useState<number>(0);

    return (
        <div
            className="ProductCard"
            style={pull ? { alignSelf: "flex-end" } : undefined}
        >
            <img
                src={images[imageIndex]}
                onMouseOver={() => {
                    if (images.length > 1) {
                        setImageIndex(1);
                    }
                }}
                onMouseLeave={() => setImageIndex(0)}
                alt={productName}
            />
            <h3>{productName}</h3>
            <p>${productPrice}</p>
            {withRemoveButton && (
                <Button
                    onClick={onRemove}
                    className={"BaseButton SecondaryButton"}
                >
                    Remove
                </Button>
            )}
        </div>
    );
};

export default ProductCard;
