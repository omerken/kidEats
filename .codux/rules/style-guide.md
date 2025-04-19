<SYSTEM STYLE GUIDE>
# PROJECT STYLE GUIDE - Instruction: ALWAYS USE THEME INSTRUCTIONS

## Colors

### Backgrounds

var(--accent-1);
var(--accent-2);

### Interactive components

var(--accent-3);
var(--accent-4);
var(--accent-5);

### Borders and separators

var(--accent-6);
var(--accent-7);
var(--accent-8);

### Solid colors

var(--accent-9);
var(--accent-10);

### Accessible text

var(--accent-11);
var(--accent-12);

### Functional colors

var(--accent-surface);
var(--accent-indicator);
var(--accent-track);
var(--accent-contrast);

## Fonts

### Font family customization

.myClass {
--default-font-family: ### Your custom default font
--heading-font-family: ### Your custom font for <Heading> components
--code-font-family: ### Your custom font for <Code> components
--strong-font-family: ### Your custom font for <Strong> components
--em-font-family: ### Your custom font for <Em> components
--quote-font-family: ### Your custom font for <Quote> components ;
}

## Space scale

var(--space-1);
var(--space-2);
var(--space-3);
var(--space-4);
var(--space-5);
var(--space-6);
var(--space-7);
var(--space-8);
var(--space-9);

## Radius values that automatically respond to the radius factor

var(--radius-1);
var(--radius-2);
var(--radius-3);
var(--radius-4);
var(--radius-5);
var(--radius-6);

### A multiplier that controls the theme radius

var(--radius-factor);

/\*

- A variable used to calculate a fully rounded radius.
- Usually used within a CSS `max()` function.
  \*/
  var(--radius-full);

/\*

- A variable used to calculate radius of a thumb element.
- Usually used within a CSS `max()` function.
  \*/
  var(--radius-thumb);

## Shadows

### Inset shadow

var(--shadow-1);

### Shadows for variant="classic" panels, like Card

var(--shadow-2);
var(--shadow-3);

### Shadows for smaller overlay panels, like Hover Card and Popover

var(--shadow-4);
var(--shadow-5);

### Shadows for larger overlay panels, like Dialog

var(--shadow-6);

## Available cursor tokens

var(--cursor-button);
var(--cursor-checkbox);
var(--cursor-disabled);
var(--cursor-link);
var(--cursor-menu-item);
var(--cursor-radio);
var(--cursor-slider-thumb);
var(--cursor-slider-thumb-active);
var(--cursor-switch);

.radix-themes {
--cursor-button: pointer;
--cursor-checkbox: pointer;
--cursor-disabled: default;
--cursor-link: pointer;
--cursor-menu-item: pointer;
--cursor-radio: pointer;
--cursor-slider-thumb: grab;
--cursor-slider-thumb-active: grabbing;
--cursor-switch: pointer;
}

## RADIX ICONS LIBRARY

AccessibilityIcon,ActivityLogIcon,AlignBaselineIcon,AlignBottomIcon,AlignCenterHorizontallyIcon,AlignCenterVerticallyIcon,AlignLeftIcon,AlignRightIcon,AlignTopIcon,AllSidesIcon,AngleIcon,ArchiveIcon,ArrowBottomLeftIcon,ArrowBottomRightIcon,ArrowDownIcon,ArrowLeftIcon,ArrowRightIcon,ArrowTopLeftIcon,ArrowTopRightIcon,ArrowUpIcon,AspectRatioIcon,AvatarIcon,BackpackIcon,BadgeIcon,BarChartIcon,BellIcon,BlendingModeIcon,BookmarkIcon,BookmarkFilledIcon,BorderAllIcon,BorderBottomIcon,BorderDashedIcon,BorderDottedIcon,BorderLeftIcon,BorderNoneIcon,BorderRightIcon,BorderSolidIcon,BorderSplitIcon,BorderStyleIcon,BorderTopIcon,BorderWidthIcon,BoxIcon,BoxModelIcon,ButtonIcon,CalendarIcon,CameraIcon,CardStackIcon,CardStackMinusIcon,CardStackPlusIcon,CaretDownIcon,CaretLeftIcon,CaretRightIcon,CaretSortIcon,CaretUpIcon,ChatBubbleIcon,CheckIcon,CheckCircledIcon,CheckboxIcon,ChevronDownIcon,ChevronLeftIcon,ChevronRightIcon,ChevronUpIcon,CircleIcon,CircleBackslashIcon,ClipboardIcon,ClipboardCopyIcon,ClockIcon,CodeIcon,CodeSandboxLogoIcon,ColorWheelIcon,ColumnSpacingIcon,ColumnsIcon,CommitIcon,Component1Icon,Component2Icon,ComponentBooleanIcon,ComponentInstanceIcon,ComponentNoneIcon,ComponentPlaceholderIcon,ContainerIcon,CookieIcon,CopyIcon,CornerBottomLeftIcon,CornerBottomRightIcon,CornerTopLeftIcon,CornerTopRightIcon,CornersIcon,CountdownTimerIcon,CounterClockwiseClockIcon,CropIcon,Cross1Icon,Cross2Icon,CrossCircledIcon,Crosshair1Icon,Crosshair2Icon,CrumpledPaperIcon,CubeIcon,CursorArrowIcon,CursorTextIcon,DashIcon,DashboardIcon,DesktopIcon,DimensionsIcon,DiscIcon,DiscordLogoIcon,DividerHorizontalIcon,DividerVerticalIcon,DotIcon,DotFilledIcon,DotsHorizontalIcon,DotsVerticalIcon,DoubleArrowDownIcon,DoubleArrowLeftIcon,DoubleArrowRightIcon,DoubleArrowUpIcon,DownloadIcon,DragHandleDots1Icon,DragHandleDots2Icon,DragHandleHorizontalIcon,DragHandleVerticalIcon,DrawingPinIcon,DrawingPinFilledIcon,DropdownMenuIcon,EnterIcon,EnterFullScreenIcon,EnvelopeClosedIcon,EnvelopeOpenIcon,EraserIcon,ExclamationTriangleIcon,ExitIcon,ExitFullScreenIcon,ExternalLinkIcon,EyeClosedIcon,EyeNoneIcon,EyeOpenIcon,FaceIcon,FigmaLogoIcon,FileIcon,FileMinusIcon,FilePlusIcon,FileTextIcon,FontBoldIcon,FontFamilyIcon,FontItalicIcon,FontRomanIcon,FontSizeIcon,FontStyleIcon,FrameIcon,FramerLogoIcon,GearIcon,GitHubLogoIcon,GlobeIcon,GridIcon,GroupIcon,Half1Icon,Half2Icon,HamburgerMenuIcon,HandIcon,HeadingIcon,HeartIcon,HeartFilledIcon,HeightIcon,HobbyKnifeIcon,HomeIcon,IconJarLogoIcon,IdCardIcon,ImageIcon,InfoCircledIcon,InputIcon,InstagramLogoIcon,KeyboardIcon,LapTimerIcon,LaptopIcon,LayersIcon,LayoutIcon,LetterCaseCapitalizeIcon,LetterCaseLowercaseIcon,LetterCaseToggleIcon,LetterCaseUppercaseIcon,LetterSpacingIcon,LightningBoltIcon,LineHeightIcon,Link1Icon,Link2Icon,LinkBreak1Icon,LinkBreak2Icon,LinkNone1Icon,LinkNone2Icon,LinkedInLogoIcon,ListBulletIcon,LockClosedIcon,LockOpen1Icon,LockOpen2Icon,LoopIcon,MagicWandIcon,MagnifyingGlassIcon,MarginIcon,MaskOffIcon,MaskOnIcon,MinusIcon,MinusCircledIcon,MixIcon,MixerHorizontalIcon,MixerVerticalIcon,MobileIcon,ModulzLogoIcon,MoonIcon,MoveIcon,NotionLogoIcon,OpacityIcon,OpenInNewWindowIcon,OverlineIcon,PaddingIcon,PaperPlaneIcon,PauseIcon,Pencil1Icon,Pencil2Icon,PersonIcon,PieChartIcon,PilcrowIcon,PinBottomIcon,PinLeftIcon,PinRightIcon,PinTopIcon,PlayIcon,PlusIcon,PlusCircledIcon,QuestionMarkIcon,QuestionMarkCircledIcon,QuoteIcon,RadiobuttonIcon,ReaderIcon,ReloadIcon,ResetIcon,ResumeIcon,RocketIcon,RotateCounterClockwiseIcon,RowSpacingIcon,RowsIcon,RulerHorizontalIcon,RulerSquareIcon,ScissorsIcon,SectionIcon,SewingPinIcon,SewingPinFilledIcon,ShadowIcon,ShadowInnerIcon,ShadowNoneIcon,ShadowOuterIcon,Share1Icon,Share2Icon,ShuffleIcon,SizeIcon,SketchLogoIcon,SlashIcon,SliderIcon,SpaceBetweenHorizontallyIcon,SpaceBetweenVerticallyIcon,SpaceEvenlyHorizontallyIcon,SpaceEvenlyVerticallyIcon,SpeakerLoudIcon,SpeakerModerateIcon,SpeakerOffIcon,SpeakerQuietIcon,SquareIcon,StackIcon,StarIcon,StarFilledIcon,StitchesLogoIcon,StopIcon,StopwatchIcon,StretchHorizontallyIcon,StretchVerticallyIcon,StrikethroughIcon,SunIcon,SwitchIcon,SymbolIcon,TableIcon,TargetIcon,TextIcon,TextAlignBottomIcon,TextAlignCenterIcon,TextAlignJustifyIcon,TextAlignLeftIcon,TextAlignMiddleIcon,TextAlignRightIcon,TextAlignTopIcon,TextNoneIcon,ThickArrowDownIcon,ThickArrowLeftIcon,ThickArrowRightIcon,ThickArrowUpIcon,TimerIcon,TokensIcon,TrackNextIcon,TrackPreviousIcon,TransformIcon,TransparencyGridIcon,TrashIcon,TriangleDownIcon,TriangleLeftIcon,TriangleRightIcon,TriangleUpIcon,TwitterLogoIcon,UnderlineIcon,UpdateIcon,UploadIcon,ValueIcon,ValueNoneIcon,VercelLogoIcon,VideoIcon,ViewGridIcon,ViewHorizontalIcon,ViewNoneIcon,ViewVerticalIcon,WidthIcon,ZoomInIcon,ZoomOutIcon,

Radix Themes offers a comprehensive set of components and utilities to streamline UI development. Below is a categorized list of the available elements:​

## Radix Themes Components

### Layout Components:

Box​,Flex​,Grid​,Container​,Section​,

### Typography Components:

Text​,Heading​,Blockquote​,Code​,Em​,Kbd​,Link​,Quote​,Strong​,

### UI Components:

Alert Dialog​,Aspect Ratio​,Avatar​,Badge​,Button​,Callout​,Card​,Checkbox​,Checkbox Group​,Checkbox Cards​,Context Menu​,Data List​,Dialog​,Dropdown Menu​,Hover Card​,Icon Button​,Inset​,Popover​,Progress​,Radio​,Radio Group​,Radio Cards​,Scroll Area​,Segmented Control​,Select​,Separator​,Skeleton​,Slider​,Spinner​,Switch​,Table​,Tabs​,Tab Nav​,Text Area​,Text Field​,Tooltip​,

### Utilities:

Accessible Icon​,Portal​,Reset​,Slot​,Theme​,Visually Hidden​,

## Further Instructions:

- Avoid Hardcoded Values - When implementing styles, never use hardcoded values directly in your code. Instead, always reference design tokens defined in this guide if possible.
- Breakdown the task requested into concrete steps, and follow them through.
- Make sure you understand the user request properly before beginning to write code.
- Create only beautiful designs, interfaces and UI
- Create only responsive implementations
- All designs should support dark and light modes
- Use images and media from known online open source options
- Always import the required components
- Component styling should done in a separate CSS modules file, next to the component file

</SYSTEM STYLE GUIDE>
