import { Link } from "react-router";
import { Button } from "../ui/button/button";
import { Input } from "../ui/input/input";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from "../ui/navigation-menu/navigation-menu";
import { Utensils, Search, Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import styles from "./app-header.module.css";

export function AppHeader() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <Utensils className={styles.logoIcon} />
          <span className={styles.logoText}>KidEats</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className={styles.navLink}>
                    Menu
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/how-it-works" className={styles.navLink}>
                    How it works
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className={styles.navLink}>
                    Contact
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/parent-dashboard" className={styles.navLink}>
                    Parent Area
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={18} />
            <Input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
              aria-label="Search food items"
            />
          </div>
        </form>

        {/* Cart Button */}
        <Button variant="outline" className={styles.cartButton}>
          <ShoppingCart size={18} />
          <span className={styles.cartText}>Cart</span>
        </Button>

        {/* Get Started Button */}

        {/* Mobile Menu Button */}
        <Button
          variant="outline"
          size="icon"
          className={styles.mobileMenuButton}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu size={20} />
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <div className={styles.mobileNavContent}>
            <Link 
              to="/" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Menu
            </Link>
            <Link 
              to="/how-it-works" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link 
              to="/contact" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/parent-dashboard" 
              className={styles.mobileNavLink}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Parent Area
            </Link>
            <div className={styles.mobileSearchContainer}>
              <form onSubmit={handleSearch} className={styles.mobileSearchForm}>
                <div className={styles.searchContainer}>
                  <Search className={styles.searchIcon} size={18} />
                  <Input
                    type="search"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={styles.searchInput}
                    aria-label="Search food items"
                  />
                </div>
              </form>
            </div>
            <Button className={styles.mobileCartButton}>
              <ShoppingCart size={18} />
              <span>Cart</span>
            </Button>
            <Button className={styles.mobileGetStartedButton} asChild>
              <Link to="/parent-dashboard" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </Link>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
