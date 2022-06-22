import "./products.css";

export const Products = ({ products, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <div className="title-skeleton text-center" />
      ) : (
        <div className="text-center quotes-title">
          There is something new for Everyone
        </div>
      )}
      <div className="product-add">
        {products.map((prod) => {
          if (isLoading) {
            return (
              <div className="product-container skeleton" key={prod.id}>
                <div className="product-image" />
              </div>
            );
          }
          return (
            <div className="product-container ripple" key={prod.id} data-testid={"product"}>
              <img src={prod.image} className="product-image" alt={prod.name} />
              <span className="product-title">{prod.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};
