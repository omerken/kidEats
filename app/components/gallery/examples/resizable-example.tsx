import React from "react";
import styles from "./resizable-example.module.css";
import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@/components/ui/resizable/resizable";
import { FileCode, Terminal, FolderTree } from "lucide-react";

export function ResizableExample() {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Horizontal Resizable Panels</h4>
        <div className={styles.demoContainer}>
          <ResizablePanelGroup
            direction="horizontal"
            className={styles.horizontalGroup}
          >
            <ResizablePanel defaultSize={25} minSize={15}>
              <div className={styles.panel}>
                <div className={`${styles.panelContent} ${styles.codePanel}`}>
                  <FolderTree size={20} />
                  <h4>Project Files</h4>
                  <div className={styles.fileTree}>
                    <div className={styles.folder}>src/</div>
                    <div className={styles.fileTreeIndent}>
                      <div className={styles.folder}>components/</div>
                      <div className={styles.fileTreeIndent}>
                        <div className={styles.file}>Header.tsx</div>
                        <div className={styles.file}>Sidebar.tsx</div>
                        <div className={styles.file}>Footer.tsx</div>
                      </div>
                      <div className={styles.folder}>pages/</div>
                      <div className={styles.fileTreeIndent}>
                        <div className={styles.file}>index.tsx</div>
                        <div className={styles.file}>about.tsx</div>
                        <div className={styles.file}>contact.tsx</div>
                      </div>
                    </div>
                    <div className={styles.file}>package.json</div>
                    <div className={styles.file}>tsconfig.json</div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className={styles.panel}>
                <div className={styles.panelContent}>
                  <FileCode size={20} />
                  <h4>Code Editor</h4>
                  <div className={styles.codePreview}>
                    <pre>{`import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="app">
      <h1>Counter App</h1>
      <p>Current count: {count}</p>
      <button onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default App;`}</pre>
                  </div>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25} minSize={15}>
              <div className={styles.panel}>
                <div className={`${styles.panelContent} ${styles.codePanel}`}>
                  <Terminal size={20} />
                  <h4>Terminal</h4>
                  <div className={styles.console}>
                    <div className={styles.consoleLine}>
                      <span className={styles.prompt}>$</span> npm install
                    </div>
                    <div className={styles.consoleLine}>
                      Installing dependencies...
                    </div>
                    <div className={styles.consoleLine}>
                      <span className={styles.success}>
                        ✓ Dependencies installed successfully
                      </span>
                    </div>
                    <div className={styles.consoleLine}>
                      <span className={styles.prompt}>$</span> npm run dev
                    </div>
                    <div className={styles.consoleLine}>
                      Starting development server...
                    </div>
                    <div className={styles.consoleLine}>
                      <span className={styles.info}>
                        i Server running at http://localhost:3000
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      <div className={styles.section}>
        <h4 className={styles.sectionTitle}>Vertical Resizable Panels</h4>
        <div className={styles.demoContainer}>
          <ResizablePanelGroup
            direction="vertical"
            className={styles.verticalGroup}
          >
            <ResizablePanel defaultSize={50}>
              <div className={styles.panel}>
                <div className={styles.panelContent}>
                  <h4>Panel 1</h4>
                  <p>
                    This is the first panel in a vertical resizable layout. You
                    can drag the handle below to resize.
                  </p>
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className={styles.panel}>
                <div className={`${styles.panelContent} ${styles.codePanel}`}>
                  <h4>Panel 2</h4>
                  <p>
                    This is the second panel in a vertical resizable layout. Try
                    resizing these panels!
                  </p>
                </div>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}
