import React, { useState } from "react";
import styles from "./menubar-example.module.css";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarLabel,
  MenubarGroup,
} from "@/components/ui/menubar/menubar";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Save,
  FilePlus,
  FileQuestion,
  FileUp,
  FileDown,
  Scissors,
  Copy,
  ClipboardPaste,
  Undo,
  Redo,
} from "lucide-react";

export function MenubarExample() {
  const [showRulers, setShowRulers] = useState(true);
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [zoom, setZoom] = useState("100%");
  const [alignment, setAlignment] = useState("left");
  const [lastAction, setLastAction] = useState("None");

  const handleAction = (action: string) => {
    setLastAction(action);
  };

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.sectionTitle}>Application Menubar</h3>
        <p className={styles.description}>
          A menubar component with dropdown menus that can contain items,
          checkbox items, radio items, sub-menus, and separators.
        </p>

        <div className={styles.demo}>
          <div className={styles.workspace}>
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => handleAction("New File")}>
                    <FilePlus className={styles.icon} />
                    New File
                    <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => handleAction("Open")}>
                    <FileQuestion className={styles.icon} />
                    Open
                    <MenubarShortcut>⌘O</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => handleAction("Save")}>
                    <Save className={styles.icon} />
                    Save
                    <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => handleAction("Save As")}>
                    Save As...
                    <MenubarShortcut>⇧⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => handleAction("Export")}>
                    <FileDown className={styles.icon} />
                    Export
                    <MenubarShortcut>⌘E</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => handleAction("Import")}>
                    <FileUp className={styles.icon} />
                    Import
                    <MenubarShortcut>⌘I</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => handleAction("Undo")}>
                    <Undo className={styles.icon} />
                    Undo
                    <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => handleAction("Redo")}>
                    <Redo className={styles.icon} />
                    Redo
                    <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => handleAction("Cut")}>
                    <Scissors className={styles.icon} />
                    Cut
                    <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => handleAction("Copy")}>
                    <Copy className={styles.icon} />
                    Copy
                    <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem onClick={() => handleAction("Paste")}>
                    <ClipboardPaste className={styles.icon} />
                    Paste
                    <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarCheckboxItem
                    checked={showRulers}
                    onCheckedChange={setShowRulers}
                    onClick={() =>
                      handleAction(`${showRulers ? "Hide" : "Show"} Rulers`)
                    }
                  >
                    Show Rulers
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem
                    checked={showStatusBar}
                    onCheckedChange={setShowStatusBar}
                    onClick={() =>
                      handleAction(
                        `${showStatusBar ? "Hide" : "Show"} Status Bar`
                      )
                    }
                  >
                    Show Status Bar
                  </MenubarCheckboxItem>
                  <MenubarSeparator />
                  <MenubarLabel>Zoom</MenubarLabel>
                  <MenubarRadioGroup value={zoom} onValueChange={setZoom}>
                    <MenubarRadioItem
                      value="50%"
                      onClick={() => handleAction("Zoom 50%")}
                    >
                      50%
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="75%"
                      onClick={() => handleAction("Zoom 75%")}
                    >
                      75%
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="100%"
                      onClick={() => handleAction("Zoom 100%")}
                    >
                      100%
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="150%"
                      onClick={() => handleAction("Zoom 150%")}
                    >
                      150%
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="200%"
                      onClick={() => handleAction("Zoom 200%")}
                    >
                      200%
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Format</MenubarTrigger>
                <MenubarContent>
                  <MenubarSub>
                    <MenubarSubTrigger>Text Style</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarGroup>
                        <MenubarItem onClick={() => handleAction("Bold")}>
                          <Bold className={styles.icon} />
                          Bold
                          <MenubarShortcut>⌘B</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => handleAction("Italic")}>
                          <Italic className={styles.icon} />
                          Italic
                          <MenubarShortcut>⌘I</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem onClick={() => handleAction("Underline")}>
                          <Underline className={styles.icon} />
                          Underline
                          <MenubarShortcut>⌘U</MenubarShortcut>
                        </MenubarItem>
                      </MenubarGroup>
                    </MenubarSubContent>
                  </MenubarSub>

                  <MenubarSeparator />
                  <MenubarLabel>Alignment</MenubarLabel>
                  <MenubarRadioGroup
                    value={alignment}
                    onValueChange={setAlignment}
                  >
                    <MenubarRadioItem
                      value="left"
                      onClick={() => handleAction("Align Left")}
                    >
                      <AlignLeft className={styles.icon} />
                      Left
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="center"
                      onClick={() => handleAction("Align Center")}
                    >
                      <AlignCenter className={styles.icon} />
                      Center
                    </MenubarRadioItem>
                    <MenubarRadioItem
                      value="right"
                      onClick={() => handleAction("Align Right")}
                    >
                      <AlignRight className={styles.icon} />
                      Right
                    </MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>

              <MenubarMenu>
                <MenubarTrigger>Help</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem onClick={() => handleAction("Documentation")}>
                    Documentation
                  </MenubarItem>
                  <MenubarItem
                    onClick={() => handleAction("Keyboard Shortcuts")}
                  >
                    Keyboard Shortcuts
                    <MenubarShortcut>⌘K</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem onClick={() => handleAction("About")}>
                    About
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>

            <div className={styles.workspaceContent}>
              {lastAction !== "None" ? (
                <p>Last action: {lastAction}</p>
              ) : (
                <p>Click on a menu item to see actions</p>
              )}
            </div>

            {showStatusBar && (
              <div className={styles.statusBar}>
                <div className={styles.statusItems}>
                  <span>Zoom: {zoom}</span>
                  <span>Alignment: {alignment}</span>
                </div>
                <div className={styles.statusItems}>
                  <span>Ready</span>
                </div>
              </div>
            )}
          </div>

          <div className={styles.menuOptions}>
            <h4 className={styles.menuOptionTitle}>Current Settings:</h4>
            <ul className={styles.optionsList}>
              <li className={styles.optionItem}>
                Rulers: {showRulers ? "Visible" : "Hidden"}
              </li>
              <li className={styles.optionItem}>
                Status Bar: {showStatusBar ? "Visible" : "Hidden"}
              </li>
              <li className={styles.optionItem}>Zoom Level: {zoom}</li>
              <li className={styles.optionItem}>
                Text Alignment:{" "}
                {alignment.charAt(0).toUpperCase() + alignment.slice(1)}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
