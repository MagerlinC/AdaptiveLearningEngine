import React, { useState } from "react";
import "./dropdown.scss";
import Scrollbars from "react-custom-scrollbars";

type DropdownProps<Type> = {
  dropdownItems: Type[];
  selectedItem: Type;
  onSelect: (t: Type) => void;
  closedText: string;
  locked: boolean;
  dropdownItemDisplayFunction: (dropdownItem: Type) => string;
};

export function Dropdown<DropdownItemType>(
  props: DropdownProps<DropdownItemType>
) {
  let container: HTMLDivElement;
  const [isOpen, setOpen] = useState(false);

  const closeOnBlur = (e: React.FocusEvent) => {
    const newTarget = e.target;
    if (
      (newTarget && newTarget.id === "dropdown-search-input") ||
      (container && container.contains(newTarget))
    ) {
      return;
    }
    setOpen(false);
  };

  const doSelectItem = (item: DropdownItemType, e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    props.onSelect(item);
    setOpen(false);
  };

  const selectedItemDisplay = props.dropdownItemDisplayFunction(
    props.selectedItem
  );

  return (
    <div
      tabIndex={0}
      onBlur={(e) => closeOnBlur(e)}
      onClick={() => (props.locked ? void 0 : setOpen(true))}
      className={"dropdown-container" + (props.locked ? " locked" : "")}
      ref={(div) => (div ? (container = div) : void 0)}
    >
      <div className={"dropdown-closed"}>
        {props.selectedItem ? (
          selectedItemDisplay
        ) : (
          <span className={"closed-text"}>{props.closedText}</span>
        )}
      </div>
      {isOpen ? (
        <div className={"dropdown-inner"}>
          <Scrollbars
            style={{
              width: 250,
              height: Math.min(
                600,
                40 * Math.max(props.dropdownItems.length, 1)
              ),
            }}
          >
            <div className={"dropdown-contents"}>
              {props.dropdownItems.map((item) => (
                <div
                  onClick={(e) => doSelectItem(item, e)}
                  key={"dropdown-item-" + item}
                  className={"dropdown-item"}
                >
                  <div className={"item-text"}>
                    {props.dropdownItemDisplayFunction(item)}
                  </div>
                </div>
              ))}
            </div>
          </Scrollbars>
        </div>
      ) : null}
    </div>
  );
}
export default Dropdown;
