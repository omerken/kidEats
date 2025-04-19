import React, { useState } from "react";
import styles from "./command-example.module.css";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command/command";
import { Button } from "@/components/ui/button/button";
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";

export function CommandExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <div className={styles.inlineCommand}>
          <Command className={styles.commandInline}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className={styles.icon} />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className={styles.icon} />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className={styles.icon} />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className={styles.icon} />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className={styles.icon} />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className={styles.icon} />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>

        <div className={styles.dialogDemo}>
          <Button
            variant="outline"
            className={styles.dialogTrigger}
            onClick={() => setOpen(true)}
          >
            Open Command Dialog (⌘K)
          </Button>
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <Calendar className={styles.icon} />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <Smile className={styles.icon} />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <Calculator className={styles.icon} />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <User className={styles.icon} />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCard className={styles.icon} />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <Settings className={styles.icon} />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </div>
    </div>
  );
}
