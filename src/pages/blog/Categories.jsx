function Categories() {

  return (
    <div>

      {/* page title */}
      <h2>Shop Categories</h2>

      {/* simple static list of categories */}
      <ul>

        {/* category 1 */}
        <li>Electronics</li>

        {/* category 2 */}
        <li>Clothing</li>

        {/* category 3 */}
        <li>Books</li>

      </ul>

      {/* this component is a child route of Shop
      it's displayed inside Shop via <Outlet />
      */}

    </div>
  );
}

export default Categories;