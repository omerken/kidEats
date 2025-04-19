import React, { useState } from "react";
import styles from "./table-example.module.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table/table";
import { Badge } from "@/components/ui/badge/badge";
import { Button } from "@/components/ui/button/button";
import {
  ChevronDown,
  ChevronUp,
  ChevronsUpDown,
  Trash,
  Eye,
  Edit,
} from "lucide-react";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
};

const products: Product[] = [
  {
    id: "PRD001",
    name: "Wireless Earbuds",
    category: "Electronics",
    price: 59.99,
    stock: 23,
    status: "In Stock",
  },
  {
    id: "PRD002",
    name: "Smart Watch",
    category: "Electronics",
    price: 129.99,
    stock: 8,
    status: "Low Stock",
  },
  {
    id: "PRD003",
    name: "Yoga Mat",
    category: "Fitness",
    price: 24.99,
    stock: 0,
    status: "Out of Stock",
  },
  {
    id: "PRD004",
    name: "Coffee Maker",
    category: "Home",
    price: 79.99,
    stock: 15,
    status: "In Stock",
  },
  {
    id: "PRD005",
    name: "Bluetooth Speaker",
    category: "Electronics",
    price: 49.99,
    stock: 3,
    status: "Low Stock",
  },
];

type SortDirection = "asc" | "desc" | null;
type SortableColumn = "name" | "category" | "price" | "stock";

export function TableExample() {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState<SortableColumn | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);

  const toggleSelectRow = (id: string) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === products.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(products.map((product) => product.id));
    }
  };

  const handleSort = (column: SortableColumn) => {
    if (sortBy === column) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
      } else if (sortDirection === "desc") {
        setSortDirection(null);
        setSortBy(null);
      } else {
        setSortDirection("asc");
      }
    } else {
      setSortBy(column);
      setSortDirection("asc");
    }
  };

  const sortedProducts = [...products].sort((a, b) => {
    if (!sortBy || !sortDirection) return 0;

    if (sortDirection === "asc") {
      return a[sortBy] > b[sortBy] ? 1 : -1;
    } else {
      return a[sortBy] < b[sortBy] ? 1 : -1;
    }
  });

  const getSortIcon = (column: SortableColumn) => {
    if (sortBy !== column)
      return <ChevronsUpDown className={styles.sortIcon} />;
    if (sortDirection === "asc")
      return <ChevronUp className={styles.sortIcon} />;
    if (sortDirection === "desc")
      return <ChevronDown className={styles.sortIcon} />;
    return <ChevronsUpDown className={styles.sortIcon} />;
  };

  return (
    <div className={styles.container}>
      {selectedRows.length > 0 && (
        <div className={styles.selectedActions}>
          <span>{selectedRows.length} item(s) selected</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setSelectedRows([])}
          >
            Clear Selection
          </Button>
          <Button variant="destructive" size="sm">
            <Trash className={styles.actionIcon} />
            Delete Selected
          </Button>
        </div>
      )}

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>
          Interactive Table with Sorting & Selection
        </h4>
        <div className={styles.tableResponsive}>
          <Table>
            <TableCaption>
              A list of products with sorting and selection
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className={styles.checkboxCell}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selectedRows.length === products.length}
                    onChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead
                  className={styles.sortableColumn}
                  onClick={() => handleSort("name")}
                >
                  <div className={styles.headerContent}>
                    Product
                    {getSortIcon("name")}
                  </div>
                </TableHead>
                <TableHead
                  className={styles.sortableColumn}
                  onClick={() => handleSort("category")}
                >
                  <div className={styles.headerContent}>
                    Category
                    {getSortIcon("category")}
                  </div>
                </TableHead>
                <TableHead
                  className={styles.sortableColumn}
                  onClick={() => handleSort("price")}
                >
                  <div className={styles.headerContent}>
                    Price
                    {getSortIcon("price")}
                  </div>
                </TableHead>
                <TableHead
                  className={styles.sortableColumn}
                  onClick={() => handleSort("stock")}
                >
                  <div className={styles.headerContent}>
                    Stock
                    {getSortIcon("stock")}
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedProducts.map((product) => (
                <TableRow
                  key={product.id}
                  data-state={
                    selectedRows.includes(product.id) ? "selected" : undefined
                  }
                >
                  <TableCell className={styles.checkboxCell}>
                    <input
                      type="checkbox"
                      className={styles.checkbox}
                      checked={selectedRows.includes(product.id)}
                      onChange={() => toggleSelectRow(product.id)}
                    />
                  </TableCell>
                  <TableCell className={styles.productCell}>
                    {product.name}
                  </TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        product.status === "In Stock"
                          ? "default"
                          : product.status === "Low Stock"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className={styles.actions}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={styles.actionButton}
                      >
                        <Eye className={styles.actionIcon} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={styles.actionButton}
                      >
                        <Edit className={styles.actionIcon} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className={styles.actionButton}
                      >
                        <Trash className={styles.actionIcon} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}>Totals</TableCell>
                <TableCell>
                  {products.reduce(
                    (total, product) => total + product.stock,
                    0
                  )}
                </TableCell>
                <TableCell colSpan={2}>
                  $
                  {products
                    .reduce((total, product) => total + product.price, 0)
                    .toFixed(2)}
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Compact Mobile-Friendly Table</h4>
        <div className={styles.compactTableWrapper}>
          <Table className={styles.compact}>
            <TableHeader>
              <TableRow>
                <TableHead className={styles.mobileHidden}>ID</TableHead>
                <TableHead>Product</TableHead>
                <TableHead className={styles.mobileHidden}>Category</TableHead>
                <TableHead className={styles.textRight}>Price</TableHead>
                <TableHead className={styles.textRight}>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell
                    className={`${styles.idCell} ${styles.mobileHidden}`}
                  >
                    {product.id}
                  </TableCell>
                  <TableCell className={styles.productCellMobile}>
                    <div>{product.name}</div>
                    <div className={styles.mobileOnly}>{product.category}</div>
                  </TableCell>
                  <TableCell className={styles.mobileHidden}>
                    {product.category}
                  </TableCell>
                  <TableCell className={styles.textRight}>
                    ${product.price.toFixed(2)}
                  </TableCell>
                  <TableCell className={styles.textRight}>
                    <Badge
                      variant={
                        product.status === "In Stock"
                          ? "default"
                          : product.status === "Low Stock"
                          ? "outline"
                          : "destructive"
                      }
                    >
                      {product.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
