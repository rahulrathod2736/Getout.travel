import "./category.css";

export const Categories = ({ categories, isLoading = false }) => {
  return (
    <div className="category-section">
      {categories.map((cate) => {
        return (
          <div className="category-container " key={`category:${cate.id}`}>
            <div>
              {isLoading ? <div className="category-image skeleton" data-testid={"category-icon-skeleton"}/> : <img src={cate.image} className="category-image" alt={cate.name} data-testid={"category"}/>}
            </div>
            {isLoading ? <span className="title-skeleton"></span> : <span className="category-title">{cate.name.toUpperCase()}</span>}
          </div>
        );
      })}
    </div>
  );
};
