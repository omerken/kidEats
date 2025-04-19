import React, { useState } from "react";
import styles from "./select-example.module.css";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select/select";
import { Label } from "@/components/ui/label/label";
import { Button } from "@/components/ui/button/button";
import { Search } from "lucide-react";

const COUNTRY_OPTIONS = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "mx", label: "Mexico" },
  { value: "br", label: "Brazil" },
  { value: "ar", label: "Argentina" },
  { value: "co", label: "Colombia" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "it", label: "Italy" },
  { value: "es", label: "Spain" },
  { value: "uk", label: "United Kingdom" },
  { value: "ru", label: "Russia" },
  { value: "cn", label: "China" },
  { value: "jp", label: "Japan" },
  { value: "in", label: "India" },
  { value: "au", label: "Australia" },
  { value: "nz", label: "New Zealand" },
  { value: "za", label: "South Africa" },
  { value: "ng", label: "Nigeria" },
  { value: "eg", label: "Egypt" },
];

export function SelectExample() {
  const [fruit, setFruit] = useState<string>();
  const [theme, setTheme] = useState<string>();
  const [language, setLanguage] = useState<string>();
  const [country, setCountry] = useState<string>();
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    role: "",
    experience: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({
    role: false,
    experience: false,
  });

  // Filter countries based on search query
  const filteredCountries = COUNTRY_OPTIONS.filter((country) =>
    country.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const errors = {
      role: !formData.role,
      experience: !formData.experience,
    };

    setFormErrors(errors);
    setFormSubmitted(true);

    if (!errors.role && !errors.experience) {
      console.log("Form submitted:", formData);
    }
  };

  const handleFormReset = () => {
    setFormData({ role: "", experience: "" });
    setFormErrors({ role: false, experience: false });
    setFormSubmitted(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Basic Select Examples</h3>
        <div className={styles.demo}>
          <div className={styles.selectExamples}>
            <div className={styles.selectExample}>
              <Label htmlFor="fruit-select">Simple Select</Label>
              <Select value={fruit} onValueChange={setFruit}>
                <SelectTrigger id="fruit-select">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {fruit && (
                <p className={styles.selectedValue}>
                  You selected: <span>{fruit}</span>
                </p>
              )}
            </div>

            <div className={styles.selectExample}>
              <Label htmlFor="theme-select">Select with Groups</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger id="theme-select">
                  <SelectValue placeholder="Select a theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Light Themes</SelectLabel>
                    <SelectItem value="light">Default Light</SelectItem>
                    <SelectItem value="dawn">Dawn</SelectItem>
                    <SelectItem value="nordic">Nordic Light</SelectItem>
                  </SelectGroup>
                  <SelectSeparator />
                  <SelectGroup>
                    <SelectLabel>Dark Themes</SelectLabel>
                    <SelectItem value="dark">Default Dark</SelectItem>
                    <SelectItem value="midnight">Midnight</SelectItem>
                    <SelectItem value="aurora">Aurora</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {theme && (
                <p className={styles.selectedValue}>
                  You selected: <span>{theme}</span>
                </p>
              )}
            </div>

            <div className={styles.selectExample}>
              <Label htmlFor="language-select">With Disabled Options</Label>
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger id="language-select">
                  <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="javascript">JavaScript</SelectItem>
                  <SelectItem value="typescript">TypeScript</SelectItem>
                  <SelectItem value="python">Python</SelectItem>
                  <SelectItem value="rust" disabled>
                    Rust (Coming soon)
                  </SelectItem>
                  <SelectItem value="go" disabled>
                    Go (Coming soon)
                  </SelectItem>
                </SelectContent>
              </Select>
              {language && (
                <p className={styles.selectedValue}>
                  You selected: <span>{language}</span>
                </p>
              )}
            </div>

            <div className={styles.selectExample}>
              <Label htmlFor="size-select">Disabled Select</Label>
              <Select disabled>
                <SelectTrigger id="size-select">
                  <SelectValue placeholder="Select is disabled" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s">Small</SelectItem>
                  <SelectItem value="m">Medium</SelectItem>
                  <SelectItem value="l">Large</SelectItem>
                  <SelectItem value="xl">Extra Large</SelectItem>
                </SelectContent>
              </Select>
              <p className={styles.helperText}>
                This select is disabled and cannot be interacted with
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Searchable Select with Many Options
        </h3>
        <div className={styles.demo}>
          <div className={styles.selectExamples}>
            <div className={styles.selectExample}>
              <Label htmlFor="country-select">Country</Label>
              <div className={styles.searchableSelect}>
                <Select value={country} onValueChange={setCountry}>
                  <SelectTrigger id="country-select">
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                  <SelectContent>
                    <div className={styles.searchWrapper}>
                      <Search className={styles.searchIcon} />
                      <input
                        type="text"
                        placeholder="Search countries..."
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    <SelectSeparator />
                    {filteredCountries.length > 0 ? (
                      filteredCountries.map((country) => (
                        <SelectItem key={country.value} value={country.value}>
                          {country.label}
                        </SelectItem>
                      ))
                    ) : (
                      <div className={styles.noResults}>No results found</div>
                    )}
                  </SelectContent>
                </Select>
              </div>
              {country && (
                <p className={styles.selectedValue}>
                  You selected:{" "}
                  <span>
                    {COUNTRY_OPTIONS.find((c) => c.value === country)?.label}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>
          Form Integration with Validation
        </h3>
        <div className={styles.demo}>
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.formField}>
              <Label
                htmlFor="role-select"
                className={formErrors.role ? styles.errorLabel : ""}
              >
                Role *
              </Label>
              <Select
                value={formData.role}
                onValueChange={(value) => {
                  setFormData({ ...formData, role: value });
                  if (formSubmitted) {
                    setFormErrors({ ...formErrors, role: !value });
                  }
                }}
              >
                <SelectTrigger
                  id="role-select"
                  className={formErrors.role ? styles.errorInput : ""}
                >
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="designer">Designer</SelectItem>
                  <SelectItem value="product_manager">
                    Product Manager
                  </SelectItem>
                  <SelectItem value="data_scientist">Data Scientist</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.role && (
                <p className={styles.errorMessage}>Role is required</p>
              )}
            </div>

            <div className={styles.formField}>
              <Label
                htmlFor="experience-select"
                className={formErrors.experience ? styles.errorLabel : ""}
              >
                Experience Level *
              </Label>
              <Select
                value={formData.experience}
                onValueChange={(value) => {
                  setFormData({ ...formData, experience: value });
                  if (formSubmitted) {
                    setFormErrors({ ...formErrors, experience: !value });
                  }
                }}
              >
                <SelectTrigger
                  id="experience-select"
                  className={formErrors.experience ? styles.errorInput : ""}
                >
                  <SelectValue placeholder="Select experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                  <SelectItem value="midlevel">
                    Mid-level (3-5 years)
                  </SelectItem>
                  <SelectItem value="senior">Senior (6-9 years)</SelectItem>
                  <SelectItem value="expert">Expert (10+ years)</SelectItem>
                </SelectContent>
              </Select>
              {formErrors.experience && (
                <p className={styles.errorMessage}>
                  Experience level is required
                </p>
              )}
            </div>

            <div className={styles.formActions}>
              <Button type="submit" variant="default">
                Submit
              </Button>
              <Button type="button" variant="outline" onClick={handleFormReset}>
                Reset
              </Button>
            </div>

            {formSubmitted && !formErrors.role && !formErrors.experience && (
              <div className={styles.successMessage}>
                Form submitted successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
